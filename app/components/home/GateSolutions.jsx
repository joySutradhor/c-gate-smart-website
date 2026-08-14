"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const gateSolutions = [
  {
    title: "Metal Gates",
    description:
      "Strong, secure and beautifully finished gates designed to provide lasting protection and style.",
    image: "/h-gate-soluations/metal-gate.jpg",
    href: "/metal-gates",
  },
  {
    title: "Wooden Gates",
    description:
      "Timeless wooden gates that add warmth, character and kerb appeal to your property.",
    image:
      "/h-gate-soluations/WoodenGates.jpg",
    href: "/wooden-gates",
  },
  {
    title: "Aluminium Gates",
    description:
      "Modern, lightweight and low-maintenance gates built for everyday performance.",
    image:
      "/h-gate-soluations/Driveway-Gate-Aluminium.webp",
    href: "/aluminium-gates",
  },
  {
    title: "Driveway Gates",
    description:
      "Make a strong first impression with a bespoke entrance designed around your property.",
    image:
      "/h-gate-soluations/driveway-gates.jfif",
    href: "/driveway-gates",
  },
];

export default function GateSolutions() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[700px]">
            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Our Gate Solutions
              </span>
            </div>

            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">
              Gates Made for Your
              <span className="text-[#415A77]"> Property.</span>
            </h2>

            {/* Normal Description - 16px */}

            <p className="mt-4 max-w-[650px] text-base leading-7 text-[#667085]">
              Explore our range of bespoke gate solutions, designed to
              complement your property while providing the security, convenience
              and durability you need.
            </p>
          </div>

          {/* View All */}

          <Link
            href="/gates"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#415A77]"
          >
            View all gates
            <ArrowRight
              size={16}
              className="transition duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =========================================
            FEATURED GATE
        ========================================== */}
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white lg:grid-cols-[1.15fr_0.85fr]">
          {/* Image */}

          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[470px]">
            <img
              src={gateSolutions[0].image}
              alt={gateSolutions[0].title}
              className="absolute inset-0 h-full w-full rounded-3xl object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Featured Label */}

            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#415A77]">
                Popular Choice
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Bespoke
            </span>

            {/* Card Title */}

            <h3 className="mt-3 text-[28px] font-bold tracking-[-0.8px] text-[#1F2937] sm:text-[32px]">
              {gateSolutions[0].title}
            </h3>

            {/* Service Description */}

            <p className="mt-4 max-w-[470px] text-sm leading-6 text-[#667085]">
              {gateSolutions[0].description}
            </p>

            {/* Features */}

            <div className="mt-6 space-y-2">
              {[
                "Bespoke designs",
                "Built for security",
                "Professional installation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#415A77]" />

                  <span className="text-sm text-[#667085]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <Link
              href={gateSolutions[0].href}
              className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#415A77] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#344B65]"
            >
              Explore Metal Gates
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* =========================================
            OTHER GATE TYPES
        ========================================== */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {gateSolutions.slice(1).map((gate) => (
            <Link
              key={gate.title}
              href={gate.href}
              className="group overflow-hidden rounded-[20px] border border-[#E4E9EE] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(31,41,55,0.07)]"
            >
              {/* Image */}

              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={gate.image}
                  alt={gate.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}

              <div className="p-5 sm:p-6">
                {/* Card Title - 16px */}

                <h3 className="text-base font-bold text-[#1F2937]">
                  {gate.title}
                </h3>

                {/* Service Description - 14px */}

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#667085]">
                  {gate.description}
                </p>

                {/* Link - 14px */}

                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#415A77]">
                  Discover more
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
