"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const aboutPoints = [
  "25+ Years Experience",
  "Bespoke Craftsmanship",
  "Personal Local Service",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden ">
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-[#EAF0F5]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="flex  flex-col items-center justify-center py-20 text-center  lg:py-16">
          {/* =================================================
              EYEBROW
          ================================================== */}

          {/* <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
              About GateSmart
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div> */}
          <div
            className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E4E9EE]
                bg-[#F8FAFC]
                px-4
                py-2
              "
          >
            <span
              className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#415A77]
                "
            />

            <span
              className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#667085]
                "
            >
              About GateSmart
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

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
            Where Experience 
            <span className="block text-[#415A77]">Meets Craftsmanship.</span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-[16px]">
            With over 25 years of experience, GateSmart combines practical
            knowledge, quality craftsmanship and a personal approach to create
            bespoke gates designed around your property and requirements.
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              Start Your Project
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
          </div> */}

          

        
        </div>
      </div>
    </section>
  );
}
