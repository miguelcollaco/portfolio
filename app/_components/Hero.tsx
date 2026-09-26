import { ArrowRight, Download, Mail, MailOpen } from "lucide-react";
import { Github, LinkedIn } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NAME, EMAIL, GITHUB, LINKEDIN, CV } from "@/lib/site";

const iconLink =
  "w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="px-6 md:px-20">
        <div className="max-w-3xl space-y-8">
          <div className="reveal-load space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {NAME}
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Software Engineer &amp; <span className="gradient-text">MSc student</span> in
              Computer Science and Engineering
            </p>
            <p className="text-lg text-muted-foreground">
              CFO at In-Nova · previously Sky and Clearis · Lisbon
            </p>
          </div>

          <div
            className="reveal-load flex flex-wrap items-center gap-3"
            style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
          >
            <Button asChild size="lg">
              <a href={CV} download>
                <Download />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-secondary hover:text-foreground">
              <a href="#contact">
                Get in touch
                <ArrowRight />
              </a>
            </Button>

            <div className="flex items-center gap-1 sm:ml-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLink}
                aria-label="GitHub"
              >
                <Github className="h-full w-full" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLink}
                aria-label="LinkedIn"
              >
                <LinkedIn className="h-full w-full" />
              </a>
              <a href={`mailto:${EMAIL}`} className={`group ${iconLink}`} aria-label="Email">
                <Mail className="h-full w-full group-hover:hidden" />
                <MailOpen className="h-full w-full hidden group-hover:block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
