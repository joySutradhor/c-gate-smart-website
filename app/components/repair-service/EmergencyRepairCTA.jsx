import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function EmergencyRepairCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="relative overflow-hidden rounded-[32px] border border-[#DCE4EB] bg-white">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EAF0F5] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[#F8FAFC] blur-2xl" />

          <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">

            {/* =========================================
                LEFT CONTENT
            ========================================== */}
            <div className="max-w-[720px]">

              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#415A77]" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                  Need Assistance?
                </span>

              </div>


              {/* Heading */}
              <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[40px]">

                Need Your Gate
                <span className="text-[#415A77]">
                  {" "}Repaired?
                </span>

              </h2>


              {/* Description */}
              <p className="mt-4 max-w-[650px] text-base leading-7 text-[#667085]">
                Whether your automated gate has stopped working, is operating
                incorrectly or needs urgent attention, our experienced service
                engineers are here to help.
              </p>


              {/* Trust Points */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

                <div className="flex items-center gap-2">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                    <Clock3 size={14} />
                  </span>

                  <span className="text-xs font-medium text-[#667085]">
                    24/7/365 support
                  </span>

                </div>


                <div className="flex items-center gap-2">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                    <ShieldCheck size={14} />
                  </span>

                  <span className="text-xs font-medium text-[#667085]">
                    Experienced engineers
                  </span>

                </div>

              </div>

            </div>


            {/* =========================================
                RIGHT CTA
            ========================================== */}
            <div className="relative flex flex-col items-start gap-3 lg:items-end">

              {/* Phone Number */}
              <div className="mb-1 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                  <Phone size={18} />
                </div>

                <div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8795A4]">
                    Call Gate Smart
                  </p>

                  <p className="mt-0.5 text-xl font-bold tracking-[-0.4px] text-[#182433]">
                    01494 578656
                  </p>

                </div>

              </div>


              {/* Primary CTA */}
              <Link
                href="tel:01494578656"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#415A77] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#344B65] sm:w-auto"
              >
                Call Us Today
                <ArrowUpRight size={16} />
              </Link>


              <p className="text-xs text-[#8795A4]">
                Available 24 hours a day, 365 days a year
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}