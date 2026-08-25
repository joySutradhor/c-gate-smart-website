import Image from "next/image";
import { ArrowRight, Building2, Factory, Home } from "lucide-react";

const servicingLevels = [
  {
    number: "01",
    icon: Home,
    usage: "0–20",
    title: "Openings Per Day",
    frequency: "Service once per year",
    description:
      "A suitable servicing interval for typical residential properties with lighter daily gate usage.",
    image: "/gate-servicing/swing_gate.webp",
    tag: "Light Usage",
  },
  {
    number: "02",
    icon: Building2,
    usage: "20–50",
    title: "Openings Per Day",
    frequency: "Service twice per year",
    description:
      "Recommended for busy homes, apartment blocks and smaller commercial properties with regular daily use.",
    image: "/gate-servicing/BI-FOLDGATE.webp",
    tag: "Regular Usage",
  },
  {
    number: "03",
    icon: Factory,
    usage: "50+",
    title: "Openings Per Day",
    frequency: "Service four times per year",
    description:
      "Designed for commercial, industrial and high-traffic sites where the gate operates frequently throughout the day.",
    image: "/gate-servicing/high-use-commercial-gate.jpg",
    tag: "High Usage",
  },
];

export default function ServicingFrequency() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-[720px]">

            {/* Label */}

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Recommended Frequency
              </span>

            </div>


            {/* Heading */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

              How often should your gate
              <span className="block text-[#415A77]">
                be serviced?
              </span>

            </h2>

          </div>


          {/* Supporting text */}

          <p className="max-w-[430px] text-sm leading-6 text-[#667085] lg:pb-1">

            The more frequently your gate opens and closes, the more wear
            its mechanical and electrical components experience. Use the
            guide below as a starting point.

          </p>

        </div>


        {/* =====================================================
            USAGE GUIDE
        ====================================================== */}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">

          {servicingLevels.map((item) => {

            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[28px] border border-[#E4E9EE] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,36,51,0.08)]"
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={`${item.usage} daily gate openings`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />


                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/60 via-transparent to-transparent" />


                  {/* Number */}

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#415A77] shadow-sm">
                    {item.number}
                  </div>


                  {/* Usage tag */}

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-[#182433]/80 px-3.5 py-1.5 backdrop-blur-sm">

                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                      {item.tag}
                    </span>

                  </div>

                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 sm:p-7">

                  {/* Usage */}

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8795A4]">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-[32px] font-bold leading-none tracking-[-1px] text-[#182433]">
                        {item.usage}
                      </h3>

                    </div>


                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                  </div>


                  {/* Recommended frequency */}

                  <div className="mt-5 rounded-2xl bg-[#F8FAFC] px-4 py-3.5">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8795A4]">
                      Recommended
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#415A77]">
                      {item.frequency}
                    </p>

                  </div>


                  {/* Description */}

                  <p className="mt-4 text-sm leading-6 text-[#667085]">
                    {item.description}
                  </p>


                  {/* Bottom indicator */}

                  <div className="mt-5 flex items-center gap-2 border-t border-[#E4E9EE] pt-4">

                    <span className="text-xs font-semibold text-[#182433]">
                      Servicing based on usage
                    </span>

                    <ArrowRight
                      size={14}
                      className="text-[#415A77] transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </article>
            );

          })}

        </div>


        {/* =====================================================
            IMPORTANT NOTE
        ====================================================== */}

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] px-5 py-4 sm:flex-row sm:items-center sm:px-6">

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-xs font-bold text-[#415A77]">
            i
          </div>

          <p className="text-sm leading-6 text-[#667085]">

            <span className="font-semibold text-[#182433]">
              Every gate is different.
            </span>{" "}
            Recommended servicing frequency can also depend on the gate
            design, automation system, environment and operating conditions.

          </p>

        </div>

      </div>
    </section>
  );
}