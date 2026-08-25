"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const options = [
  {
    title: "Metal",
    text: "Strong, timeless and highly versatile",
    href: "/gates/metal-gates",
  },
  {
    title: "Wooden",
    text: "Natural, warm and traditional",
    href: "/gates/wooden-gates",
  },
  {
    title: "Aluminium",
    text: "Modern, lightweight and low maintenance",
    href: "/gates/aluminium-gates",
  },
  {
    title: "Composite",
    text: "Contemporary, durable and practical",
    href: "/gates/composite-gates",
  },
];

export default function WhichGateIsRight() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

          {/* LEFT */}
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Need A Little Help?
            </span>

            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.025em] text-[#182433] lg:text-[36px]">
              Which gate is right
              <span className="block">for you?</span>
            </h2>

            <p className="mt-4 max-w-md text-[14px] leading-6 text-[#667085]">
              Your property, style and maintenance preferences
              can all influence your choice.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#415A77]"
            >
              Talk to our team
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid gap-3 sm:grid-cols-2">

            {options.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="group rounded-2xl border border-[#E4E9EE] bg-white p-5 transition hover:border-[#415A77]/30 hover:bg-[#F8FAFC]"
              >
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-[16px] font-semibold text-[#182433]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#667085]">
                      {item.text}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="mt-0.5 shrink-0 text-[#98A2B3] transition group-hover:translate-x-1 group-hover:text-[#415A77]"
                  />

                </div>
              </Link>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}