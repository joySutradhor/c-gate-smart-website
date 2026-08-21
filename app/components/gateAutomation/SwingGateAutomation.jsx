import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const swingGateTypes = [
  {
    title: "Single Swing Gate",
    description:
      "A single gate leaf opens inwards or outwards, making it a practical solution for many residential entrances.",
    image: "/p-gate-automation/GO-SWING.jpg",
  },
  {
    title: "Double Swing Gates",
    description:
      "A pair of gate leaves meet in the centre, providing a wider entrance while maintaining a balanced appearance.",
    image: "/p-gate-automation/double-gate.jpg",
  },
];

const swingFeatures = [
  "Suitable for many residential entrances",
  "Can open inwards or outwards",
  "Available for single or double gate leaves",
];

export default function SwingGateAutomation() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* =====================================
            SECTION INTRO
        ====================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT CONTENT */}

          <div>
            {/* Small Label */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Automation Type 01
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">
              Swing Gate
              <span className="block text-[#415A77]">Automation</span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-[500px] text-base leading-7 text-[#667085]">
              Swing gates open in a similar way to a traditional door, with the
              gate leaf swinging either inwards or outwards.
            </p>

            <p className="mt-3 max-w-[500px] text-base leading-7 text-[#667085]">
              A swing gate system can consist of one single gate or a pair of
              gates meeting in the centre.
            </p>

            {/* Features */}

            <div className="mt-6 space-y-3">
              {swingFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                    <Check size={13} />
                  </span>

                  <span className="text-sm leading-6 text-[#667085]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================
              GATE TYPE CARDS
          ================================== */}

          <div className="grid gap-5 sm:grid-cols-2">
            {swingGateTypes.map((gate) => (
              <article
                key={gate.title}
                className="group overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white"
              >
                {/* Image */}

                <div className="relative h-[230px] overflow-hidden sm:h-[260px]">
                  <Image
                    src={gate.image}
                    alt={gate.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/65 via-transparent to-transparent" />

                  {/* Image Title */}

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                      Swing Gate
                    </span>

                    <h3 className="mt-1 text-base font-bold text-white">
                      {gate.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}

                <div className="p-5">
                  <p className="text-sm leading-6 text-[#667085]">
                    {gate.description}
                  </p>

                  <Link
                    href="/contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#415A77] transition hover:text-[#344B65]"
                  >
                    Discuss your gate
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
