import {
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function WarrantyAndHelp() {
  return (
    <section className="bg-[#EAF0F5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="mb-8 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#415A77]">
            Service & Support
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#182433] md:text-[36px]">
            Protect Your Investment
            <span className="block text-[#415A77]">With Regular Servicing</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Warranty Protection */}
          <div className="group rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                <ShieldCheck size={34} strokeWidth={1.7} />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#415A77]">
                  Protect your investment
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight text-[#182433] md:text-[28px]">
                  Warranty Protection
                </h3>

                <p className="mt-4 text-base leading-7 text-[#667085]">
                  To keep your manufacturer's warranty valid, most automation
                  companies require your gate to be serviced at the recommended
                  intervals.
                </p>

                <div className="mt-5 flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#415A77]"
                    strokeWidth={1.8}
                  />

                  <p className="text-sm font-semibold leading-6 text-[#1F2937]">
                    Regular servicing helps protect your investment.
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  This is particularly important for automated gates using
                  equipment from leading manufacturers such as CAME.
                </p>
              </div>
            </div>
          </div>

          {/* We're Here To Help */}
          <div className="group rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                <PhoneCall size={32} strokeWidth={1.7} />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#415A77]">
                  Maintenance & support
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight text-[#182433] md:text-[28px]">
                  We're Here to Help
                </h3>

                <p className="mt-4 text-base leading-7 text-[#667085]">
                  From one-off services to tailored maintenance plans, Gate
                  Smart can keep your gates running safely and reliably all year
                  round.
                </p>

                <p className="mt-4 text-sm font-semibold leading-6 text-[#1F2937]">
                  Contact us today to book a service or discuss a maintenance
                  plan.
                </p>

                <a
                  href="tel:01494578656"
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#415A77] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#182433]"
                >
                  Call Gate Smart
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
