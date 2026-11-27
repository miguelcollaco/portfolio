import Image from "next/image";
import Reveal from "./Reveal";

import PHOTO from "@/public/photo.webp";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">01 // whoami</span>
          <h2 className="section-title mt-4">About me</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal
            delay={0.1}
            className="order-2 lg:order-1 space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I&apos;m Miguel, a software engineer from Lisbon finishing an MSc in
              Computer Science and Engineering at NOVA School of Science and Technology.
              I like knowing how things work under the hood, and I get a kick out of
              making a slow, annoying task disappear.
            </p>
            <p>
              That&apos;s the thread through most of what I do: an LLM agent at Sky that
              does the crash-portal digging so engineers don&apos;t have to, a desktop
              app that turns a 20-click portal into one, a self-hosted deploy setup for
              In-Nova. I&apos;ve also learnt a lot from the other side of the table, going
              from developer to running a 30-person department and now the company&apos;s
              finances.
            </p>
            <p>
              Away from code: 3D printing, learning CAD, movies, music, games and the gym.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="h-5/6 w-full order-1 lg:order-2 lg:justify-self-end max-w-sm mx-auto relative"
          >
            <Image
              src={PHOTO}
              alt="Miguel Collaço"
              sizes="(max-width: 1024px) 90vw, 384px"
              className="h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
