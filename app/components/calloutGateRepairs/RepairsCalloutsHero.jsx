import Link from "next/link";
import { ArrowUpRight, Clock3, Phone } from "lucide-react";

export default function RepairsCalloutsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#EAF0F5]/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-[-120px] h-[260px] w-[260px] rounded-full bg-[#F8FAFC] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Repairs & Callouts
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[720px] text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-[#182433] sm:text-[52px] lg:text-[62px]">
              Reliable Gate Repairs &
              <span className="block text-[#415A77]">24/7 Callouts</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[680px] text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Our dedicated service engineers are available 24 hours a day, 365
              days a year, providing reliable support when you need it. From
              breakdowns to repairs, we provide knowledgeable technical
              assistance for gate automation systems.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:01494578656"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#415A77] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
              >
                <Phone size={16} />
                Call 01494 578656
              </Link>

              <Link
                href="#callout-pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E0E7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] transition hover:border-[#415A77] hover:text-[#415A77]"
              >
                View Callout Rates
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-4 py-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                <Clock3 size={16} />
              </div>

              <span className="text-sm font-medium text-[#667085]">
                Available 24 hours a day, 365 days a year
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[500px]">
              {/* Main card */}
              <div className="rounded-[32px] border border-[#E4E9EE] bg-[#F8FAFC] p-8 shadow-[0_20px_60px_rgba(24,36,51,0.08)]">
                <div className="rounded-3xl bg-white p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667085]">
                        Gate Smart
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-[-0.5px] text-[#182433]">
                        Emergency Support
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                      <Phone size={20} />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-[#F8FAFC] p-5">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#415A77] opacity-30" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#415A77]" />
                      </span>

                      <span className="text-sm font-semibold text-[#1F2937]">
                        Service engineers available
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#667085]">
                      24 hours a day, 365 days a year.
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#E4E9EE] p-4">
                      <p className="text-xs text-[#667085]">Standard Hours</p>

                      <p className="mt-1 text-xl font-bold text-[#182433]">
                        £99
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E4E9EE] p-4">
                      <p className="text-xs text-[#667085]">Out of Hours</p>

                      <p className="mt-1 text-xl font-bold text-[#182433]">
                        £175
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#E4E9EE] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(24,36,51,0.10)]">
                <p className="text-xs font-medium text-[#667085]">
                  Callout Service
                </p>

                <p className="mt-1 text-sm font-bold text-[#415A77]">
                  24 / 7 / 365
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
