import Image, { type StaticImageData } from "next/image";
import { Cpu, Keyboard, Laptop, Printer, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

/*
 * To add the printer photo: put it in public/setup/, then
 *   import PRINTER from "@/public/setup/printer.webp";
 * and set PRINTER_PHOTO = PRINTER below. Until then the card has no image slot.
 */
const PRINTER_PHOTO: StaticImageData | null = null;

type Spec = { label: string; value: string };
type Group = { icon: LucideIcon; title: string; specs: Spec[] };

const workshop: Spec[] = [
  { label: "Printer", value: "Bambu Lab P2S" },
  { label: "CAD", value: "Fusion 360, still learning" },
];

// Two columns of groups. Rows with an empty value are not rendered.
const desk: Group[][] = [
  [
    {
      icon: Cpu,
      title: "Desktop",
      specs: [
        { label: "CPU", value: "AMD Ryzen 5 3600" },
        { label: "GPU", value: "ASUS GeForce RTX 3060 12 GB OC" },
        { label: "RAM", value: "HyperX Predator DDR4, 2 × 8 GB" },
        { label: "Motherboard", value: "ROG Strix X470-F Gaming" },
        { label: "SSD", value: "WD_Black SN750 SE NVMe 500 GB" },
        { label: "HDD", value: "Seagate BarraCuda 2 TB" },
        { label: "Case", value: "Corsair Obsidian 500D" },
        { label: "OS", value: "Windows + Kali Linux on WSL2" },
      ],
    },
    {
      icon: Laptop,
      title: "On the go",
      specs: [{ label: "Laptop", value: "ASUS Zenbook Duo (UX8406)" }],
    },
  ],
  [
    {
      icon: Keyboard,
      title: "Peripherals",
      specs: [
        { label: "Main monitor", value: "HP OMEN 27\" 165 Hz" },
        { label: "Second monitor", value: "LG UltraGear 27GN650-B" },
        { label: "Keyboard", value: "SteelSeries Apex Pro Gen 3" },
        { label: "Mouse", value: "Logitech G502 HERO" },
        { label: "Headphones", value: "SteelSeries Arctis Nova Pro Wireless" },
        { label: "Tablet", value: "Wacom Intuos Pro S" },
        { label: "Chair", value: "HBADA E3 Pro" },
        { label: "Lights", value: "Govee Flow Pro" },
      ],
    },
  ],
];

function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className="divide-y divide-border">
      {specs
        .filter((s) => s.value.trim() !== "")
        .map((s) => (
          <div key={s.label} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="shrink-0 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="text-right text-sm font-medium">{s.value}</dd>
          </div>
        ))}
    </dl>
  );
}

function GroupTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="mb-2 flex items-center gap-2.5">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>
      <h4 className="font-medium">{title}</h4>
    </div>
  );
}

export default function Setup() {
  return (
    <section id="setup" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">03 // setup</span>
          <h2 className="section-title mt-4">Desk &amp; workshop</h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.05} className="overflow-hidden rounded-2xl border bg-card">
            {PRINTER_PHOTO && (
              <div className="relative aspect-video bg-secondary">
                <Image
                  src={PRINTER_PHOTO}
                  alt="My Bambu Lab P2S 3D printer"
                  fill
                  sizes="(max-width: 1152px) 100vw, 1104px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">The workshop</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Away from the keyboard, I&apos;m usually at my Bambu Lab P2S. 3D printing
                  scratches the same itch as software: you design something, hit run, and
                  find out how wrong your assumptions were. The difference is that this one
                  ends with something you can hold.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  I&apos;m now learning CAD in Fusion 360, so the next step is printing my own
                  designs instead of other people&apos;s.
                </p>
              </div>

              <div className="space-y-4 lg:pt-1">
                <GroupTitle icon={Printer} title="Tools" />
                <SpecList specs={workshop} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">The desk</h3>
            <p className="mt-2 text-muted-foreground">What I work, play and tinker on.</p>

            <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
              {desk.map((column, i) => (
                <div key={i} className="space-y-8">
                  {column.map((group) => (
                    <div key={group.title}>
                      <GroupTitle icon={group.icon} title={group.title} />
                      <SpecList specs={group.specs} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
