import Link from "next/link";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

export default function BespokeGatesCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="relative overflow-hidden rounded-[32px] border border-[#DDE5EC] bg-white px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-20 lg:py-20">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#EAF0F5] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F8FAFC] blur-3xl" />


          <div className="relative mx-auto max-w-[760px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Looking For Something Bespoke?
              </span>

              <span className="h-px w-8 bg-[#415A77]" />

            </div>


            {/* Heading */}
            <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#182433] sm:text-[40px]">

              Create an Automated Gate
              <span className="block text-[#415A77]">
                Designed Specifically for You
              </span>

            </h2>


            {/* Description */}
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Have an idea for your entrance? Speak to Gate Smart about the
              different gate styles, materials, automation and access-control
              options available for your property.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="tel:01494578656"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#415A77] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#344B65] sm:w-auto"
              >
                <Phone size={16} />
                Call 01494 578656
              </Link>


              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9E0E7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] transition duration-300 hover:border-[#415A77] hover:text-[#415A77] sm:w-auto"
              >
                Discuss Your Project
                <ArrowUpRight size={16} />
              </Link>

            </div>


            {/* Bottom Note */}
            <div className="mt-7 flex items-center justify-center gap-2">

              <MessageCircle
                size={15}
                className="text-[#8795A4]"
              />

              <p className="text-xs text-[#8795A4]">
                Discuss your requirements with our team
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}