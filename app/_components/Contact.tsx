"use client";

import { motion } from "framer-motion";
import {
  LuMail,
  LuLinkedin,
  LuGithub,
  LuMapPin,
  LuArrowRight,
  LuExternalLink,
} from "react-icons/lu";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from "./animations/AnimatedSection";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const PLACEHOLDERS: { name: string; email: string; message: string }[] = [
  {
    name: "Tony Stark",
    email: "DefinitelyNotIronMan@starkmail.com",
    message: "",
  },
  {
    name: "Peter Parker",
    email: "TotallyNotSpiderman@dailybugle.net",
    message: "",
  },
  { name: "Bruce Wayne", email: "NotBatman321@hotmail.com", message: "" },
  {
    name: "Clark Kent",
    email: "GlassesAreDisguise@dailyplanet.com",
    message: "",
  },
  { name: "Darth Vader", email: "NotYourFather@deathstar.empire", message: "" },
];

export default function Contact() {
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);
  useEffect(() => {
    setPlaceholder(
      PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)],
    );
  }, []);

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      access_key: "a399e8e5-c236-40be-b194-9837d4494a83",
      name: "",
      email: "",
      message: "",
      "h-captcha-response": "",
    },
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  type FormValues = {
    access_key: string;
    name: string;
    email: string;
    message: string;
    "h-captcha-response": string;
  };

  const captchaRef = useRef<HCaptcha>(null);

  const pendingDataRef = useRef<Omit<FormValues, "h-captcha-response"> | null>(
    null,
  );

  const onSubmit = (data: FormValues) => {
    setStatus("sending");
    const { ["h-captcha-response"]: _token, ...rest } = data;
    pendingDataRef.current = rest;
    captchaRef.current?.execute();
  };

  const onVerify = async (token: string) => {
    try {
      const pending = pendingDataRef.current;
      if (!pending) {
        setStatus("error");
        return;
      }

      const payload: FormValues = {
        ...pending,
        "h-captcha-response": token,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");

        reset({
          access_key: "a399e8e5-c236-40be-b194-9837d4494a83",
          name: "",
          email: "",
          message: "",
          "h-captcha-response": "",
        });

        captchaRef.current?.resetCaptcha();
        pendingDataRef.current = null;

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        captchaRef.current?.resetCaptcha();
        pendingDataRef.current = null;
      }
    } catch (e) {
      setStatus("error");
      captchaRef.current?.resetCaptcha();
      pendingDataRef.current = null;
    }
  };

  const onExpire = () => {
    setStatus("idle");
    pendingDataRef.current = null;
  };

  const onError = () => {
    setStatus("error");
    pendingDataRef.current = null;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="section-label">OPEN TO OPPORTUNITIES</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            I'm always open to discussing Computer Science projects, research
            collaborations, or technical inquiries. Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <AnimatedSection delay={0.1} className="h-full">
            <motion.div
              className="h-full bg-card border border-border rounded-xl p-6"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </label>
                    <Input
                      suppressHydrationWarning
                      placeholder={placeholder.name}
                      className="bg-secondary"
                      {...register("name", { required: true })}
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
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
                  </motion.div>
                </div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
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
                </motion.div>
                <HCaptcha
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  size="invisible"
                  reCaptchaCompat={false}
                  onVerify={onVerify}
                  onExpire={onExpire}
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <LuArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>

          <AnimatedStaggerContainer className="h-full flex flex-col justify-between gap-6">
            <AnimatedStaggerItem>
              <a
                href="mailto:tiago.dev@example.pt"
                className="flex items-center justify-between p-4 bg-card border rounded-xl card-hover-scale group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <LuMail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Email me
                    </p>
                    <p className="font-medium">miguel.l.collaco@gmail.com</p>
                  </div>
                </div>
                <LuExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </AnimatedStaggerItem>

            <AnimatedStaggerItem>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/miguelcollaco/"
                  className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover-scale group"
                >
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <LuLinkedin className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Connect
                    </p>
                    <p className="font-medium">LinkedIn</p>
                  </div>
                </a>
                <a
                  href="https://github.com/miguelcollaco"
                  className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover-scale group"
                >
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <LuGithub className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Explore
                    </p>
                    <p className="font-medium">GitHub</p>
                  </div>
                </a>
              </div>
            </AnimatedStaggerItem>

            <AnimatedStaggerItem>
              <div className="flex items-center p-5 gap-5 bg-card border rounded-xl card-hover group">
                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <LuMapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Lisbon, Portugal</p>
                    <span className="skill-badge">GMT (UTC+0)</span>
                  </div>
                </div>
              </div>
            </AnimatedStaggerItem>
          </AnimatedStaggerContainer>
        </div>
      </div>
    </section>
  );
}
