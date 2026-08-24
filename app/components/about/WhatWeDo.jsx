"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Metal Gates",
    description:
      "Bespoke metal and wrought iron gates designed around your property.",
    href: "/gates",
  },
  {
    title: "Wooden Gates",
    description:
      "Natural timber gates that bring warmth and character to an entrance.",
    href: "/gates",
  },
  {
    title: "Aluminium Gates",
    description: "Lightweight, strong and low-maintenance gate solutions.",
    href: "/gates",
  },

  {
    title: "Composite Gates",
    description:
      "Modern, durable and low-maintenance gates that combine materials for a unique look.",
    href: "/gates",
  },
  {
    title: "Gate Automation",
    description:
      "Convenient automated solutions for smooth and secure gate operation.",
    href: "/gates",
  },
  {
    title: "Railings",
    description:
      "Practical and attractive railing solutions for your property.",
    href: "/gates",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16

          sm:px-8

          lg:px-10
          lg:py-24
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            gap-5

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#415A77]
              "
            >
              What We Do
            </span>

            <h2
              className="
                mt-3
                text-[30px]
                font-semibold
                tracking-[-0.025em]
                text-[#182433]

                lg:text-[38px]
              "
            >
              Solutions for every
              <span className="block">type of entrance.</span>
            </h2>
          </div>

          <Link
            href="/gates"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#415A77]
              transition
              hover:text-[#344B65]
            "
          >
            Explore our services
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* SERVICES */}

        <div
          className="
            mt-12
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={service.title}
              className="
                group
                rounded-3xl
                border
                border-[#E4E9EE]
                bg-white
                p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#D4DDE6]
                hover:bg-[#F8FAFC]
                hover:shadow-[0_15px_40px_rgba(24,36,51,0.06)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.14em]
                    text-[#98A2B3]
                  "
                >
                  0{index + 1}
                </span>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#EAF0F5]
                    text-[#415A77]
                    transition
                    group-hover:bg-[#415A77]
                    group-hover:text-white
                  "
                >
                  <ChevronRight size={17} />
                </div>
              </div>

              <h3
                className="
                  mt-7
                  text-[17px]
                  font-semibold
                  text-[#182433]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-2
                  text-[13px]
                  leading-6
                  text-[#667085]
                "
              >
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
