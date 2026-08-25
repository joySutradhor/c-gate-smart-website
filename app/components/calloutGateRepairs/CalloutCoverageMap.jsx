import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const coveredAreas = [
  {
    name: "Beaconsfield",
    href: "https://www.gatesmart.co.uk/beaconsfield-metal-driveway-gates/",
  },
  {
    name: "Gerrards Cross",
    href: "https://www.gatesmart.co.uk/wooden-gates-gerrards-cross/",
  },
  {
    name: "Amersham",
    href: "https://www.gatesmart.co.uk/gatesmart/driveway-gates-railings-amersham/",
  },
  {
    name: "Great Missenden",
    href: "https://www.gatesmart.co.uk/metal-wooden-gates-great-missenden/",
  },
  {
    name: "Sunningdale",
    href: "https://www.gatesmart.co.uk/electric-gates-sunninghill-sunningdale/",
  },
  {
    name: "Sunninghill",
    href: "https://www.gatesmart.co.uk/electric-gates-sunninghill-sunningdale/",
  },
  {
    name: "Tring",
    href: "https://www.gatesmart.co.uk/electric-driveway-gates-tring/",
  },
  {
    name: "High Wycombe",
    href: "https://www.gatesmart.co.uk/electric-driveway-gates-high-wycombe/",
  },
  {
    name: "Marlow",
    href: "https://www.gatesmart.co.uk/marlow-electric-metal-wooden-gates/",
  },
  {
    name: "Chalfont St Giles",
    href: "https://www.gatesmart.co.uk/driveway-gates-chalfont-st-giles/",
  },
  {
    name: "Chalfont St Peter",
    href: "https://www.gatesmart.co.uk/chalfont-st-peter-electric-metal-wooden-gates/",
  },
  {
    name: "Ascot",
    href: "https://www.gatesmart.co.uk/electric-gates-ascot/",
  },
  {
    name: "Prestwood",
    href: "https://www.gatesmart.co.uk/metal-gates-railings-prestwood/",
  },
  {
    name: "Bovingdon",
    href: "https://www.gatesmart.co.uk/gate-installation-bovingdon/",
  },
];

export default function CalloutCoverageMap() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="max-w-[720px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Service Coverage
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[38px]">
            Gate Repair
            <span className="text-[#415A77]"> & Callout Coverage</span>
          </h2>

          <p className="mt-4 max-w-[680px] text-base leading-7 text-[#667085]">
            Our callout rates are based on distance from our service base. We
            provide reliable gate repair and breakdown services across our local
            coverage area.
          </p>
        </div>

        {/* =====================================
            TWO COLUMN CONTENT
        ====================================== */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =================================
              LEFT — MAP
          ================================= */}

          <div className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-2">
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-2xl">
              <Image
                src="/callout/Callout.jpeg"
                alt="Gate Smart callout coverage map showing service areas and pricing zones"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* =================================
              RIGHT — AREAS
          ================================= */}

          <div className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-6 sm:p-7">
            {/* Area Header */}

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 bg-[#415A77]" />

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#415A77]">
                  Areas Covered
                </span>
              </div>

              <h3 className="text-[26px] font-bold tracking-[-0.7px] text-[#1F2937]">
                Local Service
                <span className="text-[#415A77]"> Areas</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                We currently provide gate repairs, breakdown assistance and
                callouts across these local areas.
              </p>
            </div>

            {/* =================================
                LOCATION GRID
            ================================= */}

            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {coveredAreas.map((area) => (
                <Link
                  key={area.name}
                  href="#"
                  rel="noopener noreferrer"
                  className="group flex min-h-[52px] items-center justify-between gap-2 rounded-xl border border-[#E4E9EE] bg-white px-3 py-2.5 transition-all duration-300 hover:border-[#415A77]/40 hover:shadow-[0_6px_18px_rgba(24,36,51,0.06)]"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-[#415A77]" />

                    <span className="truncate text-xs font-semibold text-[#1F2937]">
                      {area.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="shrink-0 text-[#98A2B3] transition group-hover:text-[#415A77]"
                  />
                </Link>
              ))}
            </div>

            {/* =================================
                SERVICE BASE
            ================================= */}

            <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">
                    Service Base
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-[#1F2937]">
                    HP6 5RH — Hyde Heath
                  </p>
                </div>
              </div>

              <div className="hidden rounded-full bg-[#EAF0F5] px-3 py-1.5 text-[10px] font-bold text-[#415A77] sm:block">
                Up to 30 miles
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            MOBILE SERVICE INFO
        ====================================== */}

        <div className="mt-4 flex items-center justify-center rounded-xl bg-[#F8FAFC] px-4 py-3 text-xs font-medium text-[#667085] sm:hidden">
          <MapPin size={14} className="mr-2 text-[#415A77]" />
          Service coverage up to 30 miles from HP6 5RH
        </div>
      </div>
    </section>
  );
}
