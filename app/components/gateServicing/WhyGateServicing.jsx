import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Clock3,
  PoundSterling,
  Award,
} from "lucide-react";

const servicingBenefits = [
  {
    icon: ShieldCheck,
    title: "Keeps You Safe",
    text: "Safety devices are checked to help ensure your gate operates safely and reliably.",
  },
  {
    icon: Wrench,
    title: "Prevents Breakdowns",
    text: "Small issues can be identified early before they develop into costly faults.",
  },
  {
    icon: Clock3,
    title: "Extends Equipment Life",
    text: "Routine maintenance helps reduce wear and keeps your automation working for longer.",
  },
  {
    icon: PoundSterling,
    title: "Helps Reduce Costs",
    text: "Preventative servicing can help avoid expensive repairs and emergency call-outs.",
  },
  {
    icon: Award,
    title: "Protects Your Warranty",
    text: "Many manufacturers require regular servicing to keep product warranties valid.",
  },
];

export default function WhyGateServicing() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =====================================================
              IMAGE
          ====================================================== */}

          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-[#E4E9EE] bg-white p-2 shadow-[0_15px_45px_rgba(24,36,51,0.06)]">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[22px]">
                <Image
                  src="/gate-servicing/gate-servicing-importance.jpg"
                  alt="Gate Smart engineer servicing an automated gate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small floating label */}

            <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#E4E9EE] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(24,36,51,0.10)] sm:left-8">
              <p className="text-xs font-medium text-[#667085]">Gate Smart</p>

              <p className="mt-1 text-sm font-bold text-[#415A77]">
                Automation Specialists
              </p>
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="pt-2 lg:pt-0">
            {/* Label */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Why Regular Servicing Matters
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-[650px] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
              Keep your automated gate
              <span className="text-[#415A77]">
                {" "}
                safe, reliable and efficient.
              </span>
            </h2>

            {/* Intro */}

            <p className="mt-5 max-w-[650px] text-base leading-7 text-[#667085]">
              Your gate works every day and is exposed to changing weather
              conditions. Regular servicing helps identify wear, maintain safety
              systems and keep your automation performing as it should.
            </p>

            {/* Benefits Grid */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {servicingBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                const isLast = index === servicingBenefits.length - 1;

                return (
                  <div
                    key={benefit.title}
                    className={`group rounded-2xl border border-[#E4E9EE] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D5DDE5] hover:shadow-[0_10px_30px_rgba(24,36,51,0.06)] ${
                      isLast ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition group-hover:bg-[#415A77] group-hover:text-white">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      {/* Text */}

                      <div>
                        <h3 className="text-[15px] font-bold leading-5 text-[#182433]">
                          {benefit.title}
                        </h3>

                        <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
