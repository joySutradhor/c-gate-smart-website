"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NeedHelpCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        <div className="relative overflow-hidden rounded-3xl bg-[#182433] px-7 py-10 sm:px-10 lg:px-14 lg:py-12">

          {/* Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#415A77]/30 blur-3xl" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C8D5E2]">
                Let's Find Your Gate
              </span>

              <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.025em] text-white lg:text-[34px]">
                Not sure where to start?
              </h2>

              <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/60">
                Tell us about your property and what you
                need. Our team can help you choose the
                right gate and discuss your options.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[14px] font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}