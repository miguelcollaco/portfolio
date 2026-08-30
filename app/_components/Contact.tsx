"use client";

import {
  Mail,
  MailOpen,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Github, LinkedIn } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Reveal from "./Reveal";

const ACCESS_KEY = "a399e8e5-c236-40be-b194-9837d4494a83";
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

const LISBON_TIME = new Intl.DateTimeFormat("pt-PT", {
  timeZone: "Europe/Lisbon",
  hour: "2-digit",
  minute: "2-digit",
});

const LISBON_ZONE = new Intl.DateTimeFormat("en", {
  timeZone: "Europe/Lisbon",
  timeZoneName: "short",
});

function subscribeToMinute(onChange: () => void) {
  const now = new Date();
  const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  let intervalId: ReturnType<typeof setInterval>;
  const timeoutId = setTimeout(() => {
    onChange();
    intervalId = setInterval(onChange, 60_000);
  }, msUntilNextMinute);

  return () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };
}

function getLisbonClock() {
  const now = new Date();
  const zone =
    LISBON_ZONE.formatToParts(now).find((p) => p.type === "timeZoneName")?.value ?? "";
  return `${LISBON_TIME.format(now)} (${zone})`;
}

function getLisbonClockServer() {
  return "";
}

const DEFAULT_VALUES: FormValues = {
  access_key: ACCESS_KEY,
  name: "",
  email: "",
  message: "",
  "h-captcha-response": "",
};

export default function Contact() {

  const [status, setStatus] = useState<Status>("idle");

  // Ticks on the minute boundary. The snapshot is a stable string within any
  // given minute, which is what useSyncExternalStore requires.
  const lisbonClock = useSyncExternalStore(
    subscribeToMinute,
    getLisbonClock,
    getLisbonClockServer,
  );

  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);

  useEffect(() => {
    // Deliberately client-only: the page is statically prerendered, so picking
    // at render time would bake one placeholder into the HTML for everyone.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlaceholder(PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  const captchaRef = useRef<HCaptcha>(null);

  // hCaptcha injects a third-party script on mount, so it is kept out of the
  // initial page load and mounted on first interaction with the form instead.
  const [captchaMounted, setCaptchaMounted] = useState(false);
  const pendingSubmit = useRef(false);

  const mountCaptcha = useCallback(() => setCaptchaMounted(true), []);

  const resetCaptcha = useCallback(() => {
    captchaRef.current?.resetCaptcha();
  }, []);

  const setErrorState = useCallback(() => {
    pendingSubmit.current = false;
    setStatus("error");
    resetCaptcha();
  }, [resetCaptcha]);

  const onSubmit = useCallback(() => {
    setStatus("sending");

    if (!captchaMounted) {
      // Submitted before the widget was mounted - run it once it loads.
      pendingSubmit.current = true;
      setCaptchaMounted(true);
      return;
    }

    captchaRef.current?.execute();
  }, [captchaMounted]);

  const onCaptchaLoad = useCallback(() => {
    if (!pendingSubmit.current) return;
    pendingSubmit.current = false;
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
          pendingSubmit.current = false;
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
    pendingSubmit.current = false;
    setStatus("idle");
    resetCaptcha();
  }, [resetCaptcha]);

  const onError = useCallback(() => {
    setErrorState();
  }, [setErrorState]);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="section-label">OPEN TO OPPORTUNITIES</span>
          </div>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            I&apos;m always open to discussing Computer Science projects, research
            collaborations, or technical inquiries. Feel free to reach out.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <Reveal direction="left" className="h-full">
            <div className="h-full bg-card border border-border rounded-xl p-6">
              <form
                className="space-y-6"
                noValidate
                onSubmit={(e) => handleSubmit(onSubmit)(e)}
                onFocusCapture={mountCaptcha}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      suppressHydrationWarning
                      autoComplete="name"
                      placeholder={placeholder.name}
                      className="bg-secondary"
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      {...register("name", { required: "Please enter your name." })}
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="text-destructive text-xs">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      suppressHydrationWarning
                      type="email"
                      autoComplete="email"
                      placeholder={placeholder.email}
                      className="bg-secondary"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      {...register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value: EMAIL_PATTERN,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="text-destructive text-xs">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    suppressHydrationWarning
                    placeholder={placeholder.message}
                    rows={5}
                    className="bg-secondary resize-none"
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    {...register("message", { required: "Please write a message." })}
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="text-destructive text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {captchaMounted && (
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={HCAPTCHA_SITEKEY}
                    size="invisible"
                    reCaptchaCompat={false}
                    onLoad={onCaptchaLoad}
                    onVerify={onVerify}
                    onExpire={onClose}
                    onClose={onClose}
                    onError={onError}
                  />
                )}

                {status === "success" && (
                  <p role="status" className="text-green-500 text-sm">
                    ✅ Message sent successfully! I’ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="text-red-500 text-sm">
                    ❌ Something went wrong. Please try again later.
                  </p>
                )}

                <div className="flex justify-center">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 gap-3"
                    type="submit"
                    size={"lg"}
                    disabled={status === "sending" || isSubmitting}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            className="h-full flex flex-col justify-between gap-6"
          >
            <div>
              <a
                href="mailto:miguel.l.collaco@gmail.com"
                className="group flex items-center justify-between p-5 bg-card border rounded-xl card-hover-scale group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary group-hover:hidden" />
                    <MailOpen className="w-5 h-5 text-primary hidden group-hover:block" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Email me
                    </p>
                    <p className="font-medium">miguel.l.collaco@gmail.com</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
                    <LinkedIn className="w-5 h-5 text-primary" />
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
                    <Github className="w-5 h-5 text-primary" />
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
                  <MapPin className="w-5 h-5 text-primary" />
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
                    {lisbonClock}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
