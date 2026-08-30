import { Mail, MailOpen } from "lucide-react";
import { Github, LinkedIn } from "@/components/icons";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="ml-3 md:ml-20 max-w-4xl">
        <div className="space-y-8">
          <div className="reveal-load inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">
              AVAILABLE FOR INTERNSHIPS
            </span>
          </div>

          <div
            className="reveal-load space-y-4"
            style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building the <span className="gradient-text">future</span>
              <br />
              through robust logic
            </h1>
            <p className="text-lg text-muted-foreground">
              I&apos;m a Computer Science &amp; Engineering student based in Portugal
            </p>
          </div>

          <div
            className="reveal-load flex items-center gap-3"
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          >
            <a
              href="https://github.com/miguelcollaco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-full w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/miguelcollaco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn className="h-full w-full" />
            </a>
            <a
              href="mailto:miguel.l.collaco@gmail.com"
              className="group w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-full w-full group-hover:hidden" />
              <MailOpen className="h-full w-full hidden group-hover:block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
