import {
  Clock3,
  ShieldCheck,
  Settings2,
  ClipboardCheck,
  PoundSterling,
} from "lucide-react";

const repairBenefits = [
  {
    icon: Clock3,
    title: "Rapid Response",
    description:
      "We aim to attend quickly and get your gate working again with minimum disruption.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We identify and resolve faults to help keep your property, family and visitors safe.",
  },
  {
    icon: Settings2,
    title: "Expert Engineers",
    description:
      "Experienced engineers with practical knowledge of leading gate automation systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Repairs",
    description:
      "We use quality parts and industry best practice to deliver dependable repairs.",
  },
  {
    icon: PoundSterling,
    title: "Fair & Transparent",
    description:
      "Clear pricing and honest advice, so you know exactly what you are paying for.",
  },
];

export default function RepairServiceBenefits() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="">

          <div className="mb-4 flex items-center  gap-3">

            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Repair Support
            </span>

            <span className="h-px w-8 bg-[#415A77]" />

          </div>


          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

            Professional repairs, <br />
            <span className="text-[#415A77]">
              {" "}without the guesswork.
            </span>

          </h2>


          <p className=" mt-4 max-w-[650px] text-base leading-7 text-[#667085]">

            From mechanical faults to electrical and automation problems,
            our engineers focus on finding the cause and getting your gate
            back to safe, reliable operation.

          </p>

        </div>


        {/* =====================================================
            BENEFIT CARDS
        ====================================================== */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {repairBenefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative rounded-[24px] border border-[#E4E9EE] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4DDE6] hover:shadow-[0_18px_45px_rgba(24,36,51,0.08)]"
              >

                {/* Number */}

                <div className="absolute right-4 top-4 text-[11px] font-bold tracking-[0.1em] text-[#C8D1DA]">
                  0{index + 1}
                </div>


                {/* Icon */}

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77] transition-all duration-300 group-hover:bg-[#415A77] group-hover:text-white">

                  <Icon
                    size={20}
                    strokeWidth={1.8}
                  />

                </div>


                {/* Title */}

                <h3 className="mt-5 text-[15px] font-bold leading-5 text-[#182433]">
                  {benefit.title}
                </h3>


                {/* Description */}

                <p className="mt-2 text-[13px] leading-5 text-[#667085]">
                  {benefit.description}
                </p>


                {/* Bottom line */}

                <div className="mt-5 h-px w-8 bg-[#415A77] transition-all duration-300 group-hover:w-14" />

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}