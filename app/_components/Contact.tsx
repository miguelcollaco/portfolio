"use client";

import {
  LuMail,
  LuMailOpen,
  LuLinkedin,
  LuGithub,
  LuMapPin,
  LuArrowRight,
  LuExternalLink,
} from "react-icons/lu";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { useRef, useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";

const ACCESS_KEY = "a399e8e5-c236-40be-b194-9837d4494a83";
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const PLACEHOLDERS: { name: string; email: string; message: string }[] = [
  {
    name: "Batman",
    email: "DefinitelyNotTheDarkKnight@wayneenterprises.com",
    message: "I prefer working at night, but your contact form will do.",
  },
  {
    name: "Superman",
    email: "MildManneredReporter@dailyplanet.com",
    message: "This looks like a job for your support team.",
  },
  {
    name: "Spider-Man",
    email: "FriendlyNeighborhood@WebSlinger.net",
    message: "Just swinging by to say your form validation is amazing.",
  },
  {
    name: "Iron Man",
    email: "GeniusBillionaire@starkindustries.ai",
    message: "Your UI could use a little more red and gold. Just saying.",
  },
  {
    name: "Joker",
    email: "WhySoSerious@gothamchaos.com",
    message: "Let's put a smile on that error message.",
  },
  {
    name: "Harry Potter",
    email: "TheBoyWhoClicked@hogwarts.edu",
    message: "I solemnly swear this form is up to no good.",
  },
  {
    name: "Lord Voldemort",
    email: "HeWhoMustNotBeEmailed@darklord.magic",
    message: "There is no good or evil, only properly submitted forms.",
  },
  {
    name: "Gandalf",
    email: "YouShallNotPass@middleearth.org",
    message:
      "Your password requirements shall not pass without a capital letter.",
  },
  {
    name: "Darth Vader",
    email: "BreathingHeavily@empire.gal",
    message: "I find your lack of auto-reply disturbing.",
  },
  {
    name: "Luke Skywalker",
    email: "FarmBoyNoMore@rebellion.space",
    message: "I feel the force is strong with this submit button.",
  },
  {
    name: "Yoda",
    email: "WiseAndSmall@dagobah.sw",
    message: "Submit successfully, you must.",
  },
  {
    name: "Mario",
    email: "ItsAMe@kingdom.mush",
    message: "It's-a me, testing your contact form!",
  },
  {
    name: "Princess Peach",
    email: "NotInAnotherCastle@toadstool.gov",
    message: "Thank you for rescuing this message from spam.",
  },
  {
    name: "Sonic",
    email: "GottaGoFast@greenhill.zone",
    message: "Your form loads fast. I approve.",
  },
  {
    name: "Elsa",
    email: "LetItGo@arendelle.ice",
    message: "The cold never bothered your UX anyway.",
  },
  {
    name: "Shrek",
    email: "GetOutOfMySwamp@farfaraway.fairytale",
    message: "This contact form has layers. Like onions.",
  },
  {
    name: "James Bond",
    email: "Bond.James@mi6.uk",
    message: "This message will not self-destruct… I hope.",
  },
];

type FormValues = {
  access_key: string;
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

type Status = "idle" | "sending" | "success" | "error";

const DEFAULT_VALUES: FormValues = {
  access_key: ACCESS_KEY,
  name: "",
  email: "",
  message: "",
  "h-captcha-response": "",
};

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };
const fadeLeft = { initial: { opacity: 0, x: -32 }, whileInView: { opacity: 1, x: 0 } };
const fadeRight = { initial: { opacity: 0, x: 32 }, whileInView: { opacity: 1, x: 0 } };
const viewport = { once: true, margin: "-80px" };

export default function Contact() {

  const [status, setStatus] = useState<Status>("idle");

  const [lisbonTime, setLisbonTime] = useState<string>("");
  const [lisbonTZ, setLisbonTZ] = useState<string>("");

  useEffect(() => {
    const tz = new Intl.DateTimeFormat("en", { timeZone: "Europe/Lisbon", timeZoneName: "short" })
      .formatToParts(new Date())
      .find(p => p.type === "timeZoneName")?.value ?? "";
    setLisbonTZ(tz);

    const update = () => {
      const now = new Date();
      setLisbonTime(now.toLocaleTimeString("pt-PT", { timeZone: "Europe/Lisbon", hour: "2-digit", minute: "2-digit" }));
    };
    update();

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      update();
      intervalId = setInterval(update, 60_000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);

  useEffect(() => {
    setPlaceholder(PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  const captchaRef = useRef<HCaptcha>(null);

  const resetCaptcha = useCallback(() => {
    captchaRef.current?.resetCaptcha();
  }, []);

  const setErrorState = useCallback(() => {
    setStatus("error");
    resetCaptcha();
  }, [resetCaptcha]);

  const onSubmit = useCallback(() => {
    setStatus("sending");
    captchaRef.current?.execute();
  }, []);

  const onVerify = useCallback(
    async (token: string) => {
      try {
        const { access_key, name, email, message } = getValues();

        if (!name || !email || !message) {
          setErrorState();
          return;
        }

        const payload: FormValues = {
          access_key,
          name,
          email,
          message,
          "h-captcha-response": token,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (result?.success) {
          setStatus("success");
          reset(DEFAULT_VALUES);
          resetCaptcha();

          window.setTimeout(() => setStatus("idle"), 5000);
        } else {
          setErrorState();
        }
      } catch {
        setErrorState();
      }
    },
    [getValues, reset, resetCaptcha, setErrorState],
  );

  const onClose = useCallback(() => {
    setStatus("idle");
    resetCaptcha();
  }, [resetCaptcha]);

  const onError = useCallback(() => {
    setErrorState();
  }, [setErrorState]);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeUp}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="section-label">OPEN TO OPPORTUNITIES</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            I'm always open to discussing Computer Science projects, research
            collaborations, or technical inquiries. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            {...fadeLeft}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="h-full bg-card border border-border rounded-xl p-6">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </label>
                    <Input
                      suppressHydrationWarning
                      placeholder={placeholder.name}
                      className="bg-secondary"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </label>
                    <Input
                      suppressHydrationWarning
                      type="email"
                      placeholder={placeholder.email}
                      className="bg-secondary"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    suppressHydrationWarning
                    placeholder={placeholder.message}
                    rows={5}
                    className="bg-secondary resize-none"
                    {...register("message", { required: true })}
                  />
                </div>

                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITEKEY}
                  size="invisible"
                  reCaptchaCompat={false}
                  onVerify={onVerify}
                  onExpire={onClose}
                  onClose={onClose}
                  onError={onError}
                />

                {status === "success" && (
                  <p className="text-green-500 text-sm">
                    ✅ Message sent successfully! I’ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    ❌ Something went wrong. Please try again later.
                  </p>
                )}

                <div className="flex justify-center">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 gap-3"
                    type="submit"
                    disabled={status === "sending" || isSubmitting}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <LuArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col justify-between gap-6"
          >
            <div>
              <a
                href="mailto:miguel.l.collaco@gmail.com"
                className="group flex items-center justify-between p-4 bg-card border rounded-xl card-hover-scale group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <LuMail className="w-5 h-5 text-primary group-hover:hidden" />
                    <LuMailOpen className="w-5 h-5 text-primary hidden group-hover:block" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Email me
                    </p>
                    <p className="font-medium">miguel.l.collaco@gmail.com</p>
                  </div>
                </div>
                <LuExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-5 md:gap-8">
                <a
                  href="https://www.linkedin.com/in/miguelcollaco/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover-scale group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <LuLinkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Connect
                    </p>
                    <p className="font-medium">LinkedIn</p>
                  </div>
                </a>
                <a
                  href="https://github.com/miguelcollaco"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover-scale group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <LuGithub className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Explore
                    </p>
                    <p className="font-medium">GitHub</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover group">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <LuMapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex gap-2 justify-between w-full">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <div className="font-medium whitespace-normal">
                      Lisbon, Portugal
                    </div>
                  </div>
                  <div className="skill-badge h-fit my-auto whitespace-nowrap px-2">
                    {`${lisbonTime} (${lisbonTZ})`}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
