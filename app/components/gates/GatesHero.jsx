"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const gateTypes = [
  "Metal Gates",
  "Wooden Gates",
  "Aluminium Gates",
  "Composite Gates",
];

export default function GatesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-[#EAF0F5]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="flex min-h-[570px] flex-col items-center justify-center py-20 text-center sm:min-h-[600px] lg:py-24">
          {/* Eyebrow */}

          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
              Our Gates
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-4xl
              text-[32px]
                font-semibold
                leading-[1.12]
                tracking-[-0.03em]
                text-[#182433]

                sm:text-[42px]

                lg:text-[52px]
          "
          >
            Bespoke gates,
            <span className="block text-[#415A77]">
              made for your property.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-[16px]">
            From traditional metal and timber gates to contemporary aluminium
            and composite designs, we create entrances that complement the
            character of your property.
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#415A77]
                px-6
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#344B65]
              "
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/gate-gallery"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#E4E9EE]
                bg-white
                px-6
                text-[14px]
                font-semibold
                text-[#182433]
                transition
                hover:border-[#D5DDE5]
                hover:bg-[#F8FAFC]
              "
            >
              View Our Work
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* =================================================
              GATE TYPES
          ================================================== */}

          <div className="mt-14 w-full max-w-4xl border-y border-[#E4E9EE]">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {gateTypes.map((gate, index) => (
                <div
                  key={gate}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    border-[#E4E9EE]
                    px-3
                    py-4
                    sm:border-r
                    sm:last:border-r-0
                  "
                >
                  <span className="text-[10px] font-medium text-[#98A2B3]">
                    0{index + 1}
                  </span>

                  <span className="text-[12px] font-semibold text-[#667085]">
                    {gate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              SMALL BOTTOM STATEMENT
          ================================================== */}

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-[#98A2B3]">
            Designed around your entrance
          </p>
        </div>
      </div>
    </section>
  );
}
