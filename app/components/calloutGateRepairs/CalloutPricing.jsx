import { ArrowRight, Check, MapPin } from "lucide-react";

const pricingOptions = [
  {
    distance: "0–15",
    label: "miles",
    price: "£95",
    description: "Callout within 15 miles of our service base.",
  },
  {
    distance: "15–20",
    label: "miles",
    price: "£110",
    description: "Callout between 15 and 20 miles from our service base.",
  },
  {
    distance: "20–30",
    label: "miles",
    price: "£125",
    description: "Callout between 20 and 30 miles from our service base.",
  },
];

export default function CalloutPricing() {
  return (
    <section id="callout-pricing" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* =================================
            HEADER
        ================================== */}

        <div className="mx-auto max-w-[720px] text-center">
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-[#EAF0F5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Callout Pricing
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[38px]">
            What Will It
            <span className="text-[#415A77]"> Cost Me?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-[#667085]">
            Our callout pricing is based on the distance from our service base.
            Choose the distance zone that applies to your property.
          </p>
        </div>

        {/* =================================
            PRICING CARDS
        ================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricingOptions.map((option, index) => (
            <div
              key={option.distance}
              className={`group relative overflow-hidden rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                index === 0
                  ? "border-[#415A77] shadow-[0_15px_40px_rgba(65,90,119,0.10)]"
                  : "border-[#E4E9EE] hover:border-[#415A77]/30 hover:shadow-[0_15px_40px_rgba(24,36,51,0.07)]"
              }`}
            >
              {/* Recommended badge */}
              {index === 0 && (
                <div className="absolute right-6 top-6 rounded-full bg-[#EAF0F5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#415A77]">
                  Local Zone
                </div>
              )}

              {/* Distance */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">
                    Callout Zone
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[#1F2937]">
                    {option.distance} {option.label}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-8">
                <span className="text-5xl font-bold tracking-[-2px] text-[#182433]">
                  {option.price}
                </span>

                <span className="ml-2 text-sm text-[#667085]">callout</span>
              </div>

              {/* Description */}
              <p className="mt-4 min-h-[48px] text-sm leading-6 text-[#667085]">
                {option.description}
              </p>

              {/* Included */}
              <div className="mt-7 border-t border-[#E4E9EE] pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#1F2937]">
                  Included
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-5 text-[#667085]">
                      First hour of service
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-5 text-[#667085]">
                      Driving time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =================================
            IMPORTANT NOTE
        ================================== */}

        <div className="mx-auto mt-8  rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
              <Check size={17} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#1F2937]">
                What the callout price includes
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                All callout prices include the first hour of service and driving
                time. Any required parts are charged separately.
              </p>
            </div>
          </div>
        </div>

  

        {/* <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#E4E9EE] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="text-sm font-bold text-[#1F2937]">
              Outside our standard service area?
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#667085]">
              Please contact us for a personalised quotation.
            </p>
          </div>

          <a
            href="tel:01494578656"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#415A77] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#344B65]"
          >
            Discuss Your Location
            <ArrowRight size={15} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
