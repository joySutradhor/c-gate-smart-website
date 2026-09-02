"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-5
        pb-16
bg-white
        sm:px-8
         
        lg:px-10
        lg:pb-24
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-[#EAF0F5]
          px-6
          py-12

          sm:px-10

          lg:px-16
          lg:py-16
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-white
            opacity-40
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-center
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
              Let&apos;s Work Together
            </span>

            <h2
              className="
                mt-3
                text-[29px]
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#182433]

                sm:text-[36px]
              "
            >
              Have a gate project in mind?
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-[14px]
                leading-6
                text-[#667085]
              "
            >
              Talk to the GateSmart team about your requirements and discover
              what we can create for your property.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <a
              href="tel:+441494611111"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#D5DEE7]
                bg-white
                px-5
                text-[14px]
                font-semibold
                text-[#182433]
                transition
                hover:bg-[#F8FAFC]
              "
            >
              <Phone size={16} />
              Call Us
            </a>

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
                px-5
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#344B65]
              "
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
