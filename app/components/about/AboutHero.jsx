"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#EAF0F5]
          opacity-70
          blur-3xl
        "
      />

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

        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >

          {/* LEFT */}

          <div className="relative z-10">

            {/* Label */}

            <div
              className="
                mb-6
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


            {/* Heading */}

            <h1
              className="
                max-w-xl
                text-[34px]
                font-semibold
                leading-[1.1]
                tracking-[-0.035em]
                text-[#182433]

                sm:text-[44px]

                lg:text-[54px]
              "
            >
              Experience,
              <span className="block text-[#415A77]">
                craftsmanship & care.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-[15px]
                leading-7
                text-[#667085]

                sm:text-[16px]
              "
            >
              With over 25 years of experience, GateSmart
              combines practical knowledge, quality
              craftsmanship and a personal approach to
              create gates that are made around your
              property and requirements.
            </p>


            {/* Highlights */}

            <div className="mt-7 space-y-3">

              {[
                "Over 25 years of experience",
                "Bespoke gates made to your requirements",
                "Friendly, personal and local service",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    font-medium
                    text-[#1F2937]
                  "
                >

                  <div
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF0F5]
                      text-[#415A77]
                    "
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </div>

                  {item}

                </div>

              ))}

            </div>


            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >

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
                  hover:bg-[#F8FAFC]
                "
              >
                View Our Work
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative">

            <div
              className="
                relative
                h-[420px]
                overflow-hidden
                rounded-3xl

                sm:h-[500px]

                lg:h-[570px]
              "
            >

              <Image
                src="/about/experience.jpg"
                alt="GateSmart bespoke gates"
                fill
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  50vw
                "
                className="
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#182433]/40
                  via-transparent
                  to-transparent
                "
              />

            </div>


            {/* Experience Card */}

            <div
              className="
                absolute
                bottom-5
                left-5

                rounded-2xl
                border
                border-white/50
                bg-white/95
                p-5
                shadow-[0_15px_40px_rgba(24,36,51,0.12)]
                backdrop-blur-md

                sm:bottom-7
                sm:left-7
              "
            >

              <p
                className="
                  text-[34px]
                  font-semibold
                  leading-none
                  text-[#182433]
                "
              >
                25+
              </p>

              <p
                className="
                  mt-2
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#667085]
                "
              >
                Years Experience
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}