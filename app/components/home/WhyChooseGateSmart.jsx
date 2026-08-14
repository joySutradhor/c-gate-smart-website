"use client";

import {
  Check,
  ShieldCheck,
  Award,
  Clock3,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Every solution is designed with the security of your property and family in mind.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Carefully selected materials and attention to detail deliver a finish built to last.",
  },
  {
    icon: Clock3,
    title: "Reliable Service",
    description:
      "From installation to ongoing servicing, we provide dependable support when you need it.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced professionals who understand gates, automation and access systems.",
  },
];

export default function WhyChooseGateSmart() {
  return (
    <section className="bg-[#F8FAFC]">

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* =========================================
            TOP CONTENT
        ========================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">

          <div className="max-w-[700px]">

            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Why Choose GateSmart
              </span>

            </div>


            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

              Built Around Quality.

              <br />

              <span className="text-[#415A77]">
                Focused on You.
              </span>

            </h2>


            {/* Normal Description - 16px */}

            <p className="mt-4 max-w-[650px] text-base leading-7 text-[#667085]">

              Choosing the right gate company means more than finding
              someone to install a gate. We combine quality products,
              expert workmanship and dependable support to deliver a
              solution you can rely on.

            </p>

          </div>


          {/* Trust Statement */}

          <div className="hidden border-l border-[#D8E0E7] pl-6 lg:block">

            <p className="max-w-[220px] text-sm leading-6 text-[#667085]">

              From first consultation to long-term support, we're here
              for every step.

            </p>

          </div>

        </div>


        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =====================================
              LEFT FEATURE PANEL
          ====================================== */}

          <div className="relative overflow-hidden rounded-[24px] bg-[#182433] p-7 sm:p-9 lg:p-10">

            {/* Decorative Circle */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/5" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                {/* Small Label - 12px */}

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D0]">
                  The GateSmart Difference
                </span>


                {/* Heading */}

                <h3 className="mt-5 max-w-[360px] text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-white sm:text-[32px]">

                  A smarter approach to gates and access.

                </h3>


                {/* Description - 16px */}

                <p className="mt-5 max-w-[380px] text-base leading-7 text-[#C4CDD6]">

                  We don't believe in one-size-fits-all solutions.
                  Every property has different needs, which is why we
                  take the time to understand yours.

                </p>

              </div>


              {/* Checklist */}

              <div className="mt-10 space-y-3">

                {[
                  "Bespoke solutions",
                  "Professional installation",
                  "Quality materials",
                  "Ongoing support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#AFC0D0]">

                      <Check size={13} />

                    </div>

                    <span className="text-sm font-medium text-[#E4E9EE]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT REASONS
          ====================================== */}

          <div className="grid gap-4 sm:grid-cols-2">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (

                <div
                  key={reason.title}
                  className="group rounded-[20px] border border-[#E4E9EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D3DDE6] hover:shadow-[0_12px_35px_rgba(31,41,55,0.06)] sm:p-7"
                >

                  {/* Number + Icon */}

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition group-hover:bg-[#415A77] group-hover:text-white">

                      <Icon size={19} />

                    </div>


                    <span className="text-xs font-semibold tracking-[0.1em] text-[#A0AAB5]">
                      0{index + 1}
                    </span>

                  </div>


                  {/* Card Title - 16px */}

                  <h3 className="mt-6 text-base font-bold text-[#1F2937]">
                    {reason.title}
                  </h3>


                  {/* Service Description - 14px */}

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {reason.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>


        {/* =========================================
            BOTTOM TRUST BAR
        ========================================== */}

        <div className="mt-6 grid overflow-hidden rounded-[20px] border border-[#E4E9EE] bg-white sm:grid-cols-3">

          {/* Item 01 */}

          <div className="flex items-center gap-4 p-5 sm:p-6">

            <div className="text-[30px] font-bold tracking-[-1px] text-[#415A77]">
              01
            </div>

            <div>

              <p className="text-base font-semibold text-[#1F2937]">
                Personal Approach
              </p>

              <p className="mt-0.5 text-sm text-[#667085]">
                Solutions built around your property
              </p>

            </div>

          </div>


          {/* Item 02 */}

          <div className="flex items-center gap-4 border-t border-[#E4E9EE] p-5 sm:border-l sm:border-t-0 sm:p-6">

            <div className="text-[30px] font-bold tracking-[-1px] text-[#415A77]">
              02
            </div>

            <div>

              <p className="text-base font-semibold text-[#1F2937]">
                Quality Focused
              </p>

              <p className="mt-0.5 text-sm text-[#667085]">
                Designed for long-term performance
              </p>

            </div>

          </div>


          {/* Item 03 */}

          <div className="flex items-center gap-4 border-t border-[#E4E9EE] p-5 sm:border-l sm:border-t-0 sm:p-6">

            <div className="text-[30px] font-bold tracking-[-1px] text-[#415A77]">
              03
            </div>

            <div>

              <p className="text-base font-semibold text-[#1F2937]">
                Ongoing Care
              </p>

              <p className="mt-0.5 text-sm text-[#667085]">
                Support beyond installation
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}