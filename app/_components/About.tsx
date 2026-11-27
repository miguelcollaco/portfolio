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
              I&apos;ve been drawn to tech for as long as I can remember, mostly to how
              things actually work under the hood, and what happens when they break.
            </p>
            <p>
              Three areas keep pulling me back. Security, which is why I took the Systems
              and Software Security minor. The web, which I&apos;ve built professionally at
              In-Nova and Clearis. And distributed systems: getting machines to agree when
              networks and clocks don&apos;t cooperate, from a multi-region uptime monitor
              to a peer-to-peer watch party, and now a thesis that turns REST API
              behaviour into TLA+ specifications.
            </p>
            <p>
              Along the way I&apos;ve also learnt from the other side of the table, going
              from developer to running a 30-person department at In-Nova and now its
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
