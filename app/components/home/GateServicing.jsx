"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Wrench,
  Settings,
  Clock3,
} from "lucide-react";

const servicePoints = [
  "Gate repairs and troubleshooting",
  "Automatic gate servicing",
  "Regular maintenance",
  "Replacement parts and adjustments",
];

export default function GateServicing() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* =====================================
              IMAGE
          ====================================== */}

          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] sm:min-h-[500px]">

            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
              alt="Gate servicing and maintenance"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Soft Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/45 via-transparent to-transparent" />


            {/* Floating Service Badge */}

            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-[0_10px_35px_rgba(31,41,55,0.12)] backdrop-blur-md sm:bottom-7 sm:left-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

                  <Wrench size={18} />

                </div>

                <div>

                  <p className="text-base font-semibold text-[#1F2937]">
                    Professional Servicing
                  </p>

                  <p className="mt-0.5 text-sm text-[#667085]">
                    Keeping your gate running smoothly
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================
              CONTENT
          ====================================== */}

          <div>

            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Servicing & Repairs
              </span>

            </div>


            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="max-w-[600px] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

              Keep Your Gate

              <span className="text-[#415A77]">
                {" "}Working at Its Best.
              </span>

            </h2>


            {/* Normal Description - 16px */}

            <p className="mt-5 max-w-[570px] text-base leading-7 text-[#667085]">

              Gates need regular care to stay safe, reliable and
              convenient. Whether your gate needs a routine service,
              repair or automation adjustment, our team can help.

            </p>


            {/* =================================
                SERVICE POINTS
            ================================== */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {servicePoints.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">

                    <Check size={13} />

                  </div>

                  <span className="text-sm leading-6 text-[#667085]">
                    {item}
                  </span>

                </div>

              ))}

            </div>


            {/* =================================
                SERVICE HIGHLIGHTS
            ================================== */}

            <div className="mt-8 grid gap-4 border-y border-[#E4E9EE] py-6 sm:grid-cols-2">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#415A77]">

                  <Settings size={18} />

                </div>

                <div>

                  <p className="text-base font-semibold text-[#1F2937]">
                    Gate Automation
                  </p>

                  <p className="mt-0.5 text-sm text-[#667085]">
                    Servicing & adjustments
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#415A77]">

                  <Clock3 size={18} />

                </div>

                <div>

                  <p className="text-base font-semibold text-[#1F2937]">
                    Ongoing Support
                  </p>

                  <p className="mt-0.5 text-sm text-[#667085]">
                    Maintenance when needed
                  </p>

                </div>

              </div>

            </div>


            {/* =================================
                CTA
            ================================== */}

            <div className="mt-7 flex flex-wrap items-center gap-3">

              <a
                href="tel:01494578656"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-[#415A77] px-5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
              >

                Call Us

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />

              </a>


              <Link
                href="/servicing-repairs"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#D8E0E7] bg-white px-5 text-sm font-semibold text-[#415A77] transition hover:bg-[#F8FAFC]"
              >

                Servicing & Repairs

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}