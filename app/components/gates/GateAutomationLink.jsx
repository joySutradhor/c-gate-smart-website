"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function GateAutomationLink() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-5">

        <Link
          href="/gate-automation"
          className="group flex flex-col gap-4 rounded-2xl border border-[#E4E9EE] bg-white p-6 transition hover:bg-[#F8FAFC] sm:flex-row sm:items-center sm:justify-between"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
              <Zap size={19} />
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#182433]">
                Want an automated entrance?
              </p>

              <p className="mt-1 text-[13px] text-[#667085]">
                Explore our gate automation solutions.
              </p>
            </div>

          </div>

          <ArrowRight
            size={18}
            className="text-[#98A2B3] transition group-hover:translate-x-1 group-hover:text-[#415A77]"
          />

        </Link>

      </div>
    </section>
  );
}