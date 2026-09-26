import Image from "next/image";
import Reveal from "./Reveal";

import PHOTO from "@/public/photo.webp";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title mt-4">About Me</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal
            delay={0.1}
            className="order-2 lg:order-1 space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I&apos;m a software engineer and MSc student in Computer Science and
              Engineering at NOVA School of Science and Technology in Lisbon, majoring
              in Programming Languages and Software Systems with a minor in Systems
              and Software Security.
            </p>
            <p>
              I like understanding how systems work under the hood and building
              software that is reliable, secure, and efficient. Recently that has
              meant building multi-agent AI tooling at Sky, and shipping web and
              mobile products at In-Nova, where I went from developer to leading a
              30-person Projects Department and now serve as CFO.
            </p>
            <p>
              Outside of tech, I enjoy movies, music, gaming, and going to the gym.
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
