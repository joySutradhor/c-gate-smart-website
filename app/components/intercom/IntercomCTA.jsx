"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IntercomCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Need Help Choosing?
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#182433] sm:text-[40px]">
              Let's find the right
              <span className="block text-[#415A77]">
                intercom for your gate.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#667085]">
              Tell us about your property, gate, existing cabling and how
              you'd like to answer visitors. We'll help you identify the
              most suitable solution.
            </p>

          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#415A77] px-6 text-[14px] font-semibold text-white hover:text-[#182433] transition hover:bg-[#EAF0F5]"
          >
            Discuss Your Requirements
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}