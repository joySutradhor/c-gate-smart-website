import { ArrowRight, Settings, ShieldCheck, Wrench } from "lucide-react";

const trustPoints = [
  {
    number: "01",
    title: "Bespoke Design",
    description:
      "Every gate is designed around your property, requirements and personal style.",
  },
  {
    number: "02",
    title: "Expert Installation",
    description:
      "Professional installation with attention to detail from start to finish.",
  },
  {
    number: "03",
    title: "Reliable Support",
    description:
      "From servicing to repairs, we're here to keep your gate performing reliably.",
  },
];

export default function TrustIntroduction() {
  return (
    <section className="bg-white">

      {/* =========================================
          INTRODUCTION
      ========================================== */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div>

            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Why GateSmart
              </span>

            </div>


            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="max-w-[520px] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

              More Than Just a Gate.

              <br />

              <span className="text-[#415A77]">
                A Complete Solution.
              </span>

            </h2>


            {/* Normal Description - 16px */}

            <div className="mt-5 max-w-[570px] space-y-4 text-base leading-7 text-[#667085]">

              <p>
                At GateSmart, we provide complete gate solutions designed
                to improve the security, appearance and accessibility of
                your property.
              </p>

              <p>
                From bespoke gate design and installation to automation,
                servicing and repairs, our team helps you find the right
                solution from start to finish.
              </p>

            </div>


            {/* CTA */}

            <a
              href="/about"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-[#415A77] px-5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
            >
              Discover GateSmart

              <ArrowRight
                size={15}
              />

            </a>

          </div>


          {/* =====================================
              RIGHT TRUST POINTS
          ====================================== */}

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 ">

            {trustPoints.map((point) => (

              <div
                key={point.number}
                className="group rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-5 transition duration-300 hover:border-[#D5DEE7] hover:bg-white hover:shadow-[0_10px_30px_rgba(31,41,55,0.05)] sm:p-6 lg:flex lg:items-start lg:gap-6"
              >

                {/* Number */}

                <span className="text-sm font-bold tracking-wide text-[#415A77]">
                  {point.number}
                </span>


                {/* Content */}

                <div className="mt-3 lg:mt-0">

                  {/* Card Title - 16px */}

                  <h3 className="text-base font-bold text-[#1F2937]">
                    {point.title}
                  </h3>


                  {/* Service / Card Description - 14px */}

                  <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                    {point.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =========================================
            BOTTOM TRUST STRIP
        ========================================== */}

        {/* <div className="mt-14 border-t border-[#E4E9EE] pt-8 lg:mt-20">

          <div className="grid gap-6 sm:grid-cols-3">



            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

                <ShieldCheck size={19} />

              </div>

              <div>

                <p className="text-base font-semibold text-[#1F2937]">
                  Security Focused
                </p>

                <p className="mt-0.5 text-sm text-[#667085]">
                  Built with your property in mind
                </p>

              </div>

            </div>


    

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

                <Settings size={19} />

              </div>

              <div>

                <p className="text-base font-semibold text-[#1F2937]">
                  Smart Automation
                </p>

                <p className="mt-0.5 text-sm text-[#667085]">
                  Convenient access and control
                </p>

              </div>

            </div>


   

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

                <Wrench size={19} />

              </div>

              <div>

                <p className="text-base font-semibold text-[#1F2937]">
                  Ongoing Support
                </p>

                <p className="mt-0.5 text-sm text-[#667085]">
                  Servicing when you need it
                </p>

              </div>

            </div>

          </div>

        </div> */}

      </div>

    </section>
  );
}