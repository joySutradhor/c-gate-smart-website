import Image from "next/image";
import { MapPin, Route, ArrowUpRight, Check } from "lucide-react";

const pricingZones = [
  {
    miles: "0–15 miles",
    price: "£95",
    description: "Callout within 15 miles of our service base.",
  },
  {
    miles: "15–20 miles",
    price: "£110",
    description: "Callout between 15 and 20 miles from our service base.",
  },
  {
    miles: "20–30 miles",
    price: "£125",
    description: "Callout between 20 and 30 miles from our service base.",
  },
];

const serviceAreas = [
  "Beaconsfield",
  "Gerrards Cross",
  "Amersham",
  "Great Missenden",
  "Sunning Dale",
  "Sunning Hill",
  "Tring",
  "High Wycombe",
  "Marlow",
  "Chalfont St Giles",
  "Chalfont St Peter",
  "Ascot",
  "Prestwood",
  "Bovingdon",
];

export default function CalloutCoverageAreas() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="max-w-[760px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Service Coverage
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            Callout Coverage
            <span className="text-[#415A77]"> & Service Areas</span>
          </h2>

          <p className="mt-4 max-w-[680px] text-base leading-7 text-[#667085]">
            Our callout pricing is based on the mileage from our service base.
            We cover a wide range of towns and surrounding areas.
          </p>
        </div>

        {/* =================================================
            MAP + PRICING
        ================================================= */}
        <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =================================================
              MAP
          ================================================= */}
          <div className="overflow-hidden rounded-[28px] border border-[#E4E9EE] bg-[#F8FAFC] p-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[22px]">
              <Image
                src="/callout/Callout.jpeg"
                alt="Gate Smart callout coverage map"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            {/* Map information */}
            <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#415A77] shadow-sm">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#182433]">
                    Service Base
                  </p>

                  <p className="text-xs text-[#667085]">HP6 5RH — Hyde Heath</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#667085]">
                <Route size={15} className="text-[#415A77]" />
                Mileage-based pricing
              </div>
            </div>
          </div>

          {/* =================================================
              PRICING
          ================================================= */}
          <div className="rounded-[28px] border border-[#E4E9EE] bg-[#F8FAFC] p-5 sm:p-6">
            {/* Pricing Header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                  Callout Pricing
                </p>

                <h3 className="mt-1 text-xl font-bold tracking-[-0.4px] text-[#182433]">
                  Based on Distance
                </h3>
              </div>

              <div className="hidden rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#415A77] shadow-sm sm:block">
                From HP6 5RH
              </div>
            </div>

            {/* Pricing Zones */}
            <div className="mt-5 grid gap-3">
              {pricingZones.map((zone) => (
                <div
                  key={zone.miles}
                  className="group rounded-2xl border border-[#E1E7EC] bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9D5E0] hover:shadow-[0_10px_30px_rgba(24,36,51,0.06)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Zone */}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#415A77]">
                        Callout Zone
                      </p>

                      <div className="mt-1 flex items-baseline gap-2">
                        <h4 className="text-lg font-bold text-[#182433]">
                          {zone.miles}
                        </h4>

                        <span className="text-xs text-[#8795A4]">
                          from service base
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-[#667085]">
                        {zone.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 sm:text-right">
                      <p className="text-[27px] font-bold tracking-[-1px] text-[#415A77]">
                        {zone.price}
                      </p>

                      <p className="text-[11px] font-medium text-[#8795A4]">
                        callout
                      </p>
                    </div>
                  </div>

                  {/* Included */}
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#EEF1F4] pt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                        <Check size={11} strokeWidth={2.5} />
                      </span>

                      <span className="text-xs font-medium text-[#667085]">
                        First hour of service
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                        <Check size={11} strokeWidth={2.5} />
                      </span>

                      <span className="text-xs font-medium text-[#667085]">
                        Driving time
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            AREAS COVERED
        ================================================= */}
        <div className="mt-5 rounded-[28px] border border-[#E4E9EE] bg-[#F8FAFC] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                Areas Covered
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#182433]">
                Local Service Areas
              </h3>
            </div>

            <p className="max-w-[430px] text-xs leading-5 text-[#8795A4] sm:text-right">
              We provide gate repair and callout services across these areas and
              surrounding locations.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-2 rounded-xl border border-[#E4E9EE] bg-white px-3 py-2.5 transition duration-200 hover:border-[#CBD7E2] hover:shadow-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#415A77]" />

                <span className="truncate text-xs font-medium text-[#667085] group-hover:text-[#182433]">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* Outside Area */}
          <div className="mt-4 flex flex-col gap-3 border-t border-[#E4E9EE] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#8795A4]">
              Outside our normal service area?
              <span className="font-medium text-[#667085]">
                {" "}
                Contact us for a personalised quotation.
              </span>
            </p>

            <a
              href="tel:01494578656"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#415A77] transition hover:text-[#344B65]"
            >
              Call 01494 578656
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
