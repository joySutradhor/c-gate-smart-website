import { ArrowUpRight, MapPin, Users } from "lucide-react";

export default function ServiceAreaDetails() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">

        <div className="grid gap-5 md:grid-cols-2">

          {/* Service Area */}
          <div className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-7 sm:p-8">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#415A77]">
              <MapPin size={19} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#1F2937]">
              Outside Our Normal Service Area
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#667085]">
              For call-outs outside our standard service areas, please
              contact us for a personalised quotation.
            </p>

            <a
              href="tel:01494578656"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#415A77]"
            >
              Discuss your location
              <ArrowUpRight size={15} />
            </a>

          </div>

          {/* Additional Engineer */}
          <div className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-7 sm:p-8">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#415A77]">
              <Users size={19} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#1F2937]">
              Additional Engineers
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#667085]">
              If an additional engineer is required for your repair or
              breakdown, the same applicable hourly rate will apply.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}