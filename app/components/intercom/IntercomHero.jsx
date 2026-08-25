"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function IntercomHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#EAF0F5] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className = "flex justify-center flex-col items-center gap-6 text-center">

          {/* Content */}

          <div>

            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
                Gate Access
              </span>
            </div>

            <h1 className="max-w-4xl text-[36px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#182433] sm:text-[46px] lg:text-[54px]">
              Stay connected  to 
              <span className="block text-[#415A77]">
               your gate.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-[16px]">
              Choose the right gate intercom for your property, whether
              you need a simple wired system, wireless communication,
              mobile access or video from your smartphone.
            </p>

         

          </div>


          

        </div>

      </div>
    </section>
  );
}