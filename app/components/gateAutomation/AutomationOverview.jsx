import {
  ShieldCheck,
  Wrench,
  Settings2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const automationHighlights = [
  {
    icon: Settings2,
    title: "CAME Automation",
    description: "Our primary automation system for new installations.",
  },
  {
    icon: Wrench,
    title: "Repair & Servicing",
    description: "We service and maintain existing automation systems.",
  },
  {
    icon: ShieldCheck,
    title: "Other Manufacturers",
    description: "We can also support systems from leading manufacturers.",
  },
];

export default function AutomationOverview() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* =====================================
            MAIN NOTICE
        ====================================== */}

        <div className="overflow-hidden rounded-3xl border border-[#D8E0E7] bg-[#F8FAFC]">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================
                LEFT TRUST PANEL
            ================================== */}

            <div className="flex items-center gap-5 border-b border-[#D8E0E7] bg-[#EAF0F5] px-6 py-7 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">

              {/* Icon */}

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#415A77] text-white shadow-[0_8px_20px_rgba(65,90,119,0.18)]">

                <ShieldCheck size={27} />

              </div>


              <div>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                  Our Approach
                </span>

                <h2 className="mt-1 text-[22px] font-bold tracking-[-0.5px] text-[#1F2937]">
                  Automation Specialists
                </h2>

              </div>

            </div>


            {/* =================================
                RIGHT CONTENT
            ================================== */}

            <div className="px-6 py-7 sm:px-8 lg:px-10 lg:py-8">

              <p className="max-w-[780px] text-base leading-7 text-[#667085]">

                At GateSmart, we predominantly install{" "}

                <span className="font-semibold text-[#1F2937]">
                  CAME automation
                </span>
                , but we also service, repair and maintain gate
                automation from other leading manufacturers.

              </p>


              {/* Highlights */}

              <div className="mt-7 grid gap-5 sm:grid-cols-3">

                {automationHighlights.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#415A77] shadow-sm">

                        <Icon size={17} />

                      </div>


                      <div>

                        <h3 className="text-sm font-semibold text-[#1F2937]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[#667085]">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            SMALL SUPPORTING CTA
        ====================================== */}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-[#667085]">
            Already have an automated gate? We may be able to help with
            servicing or repairs.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#415A77] transition hover:text-[#344B65]"
          >
            Talk to our team

            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </section>
  );
}