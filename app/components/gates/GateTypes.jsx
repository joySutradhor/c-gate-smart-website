"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gates = [
  {
    number: "01",
    title: "Metal Gates",
    description:
      "Bespoke metal and wrought iron gates, crafted for a strong and timeless entrance.",
    image: "/gallery/metal15.jpg",
    tag: "Crafted Metal",
  },
  {
    number: "02",
    title: "Wooden Gates",
    description:
      "Beautiful timber gates bringing warmth, character and a natural finish to your entrance.",
    image: "/gallery/wood/wood13.jpg",
    tag: "Natural Timber",
  },
  {
    number: "03",
    title: "Aluminium Gates",
    description:
      "Clean, lightweight and durable gates designed for modern properties and easy maintenance.",
    image: "/h-nav-assets/gates/Aluminium-gate.jpg",
    tag: "Modern Aluminium",
  },
  {
    number: "04",
    title: "Composite Gates",
    description:
      "Contemporary gates combining a refined appearance with durability and minimal maintenance.",
    image: "/h-nav-assets/gates/composite.jpg",
    tag: "Contemporary",
  },
];

export default function GateTypes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#415A77]">
              Our Gate Collection
            </span>
          </div>

          <h2
            className="
              mt-5
              text-[31px]
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#182433]
              sm:text-[38px]
              lg:text-[46px]
            "
          >
            A gate for every property,
            <span className="block text-[#98A2B3]">designed with purpose.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[14px]
              leading-7
              text-[#667085]
              sm:text-[15px]
            "
          >
            From traditional craftsmanship to contemporary materials, explore
            the different ways we can create the right entrance for your
            property.
          </p>
        </div>

        {/* =====================================================
            GATE SHOWCASE
        ====================================================== */}

        <div className="mt-16 sm:mt-20">
          {gates.map((gate, index) => {
            const reverse = index % 2 !== 0;

            return (
              <Link href="/contact" key={gate.number} className="group block">
                <article
                  className={`
                    grid
                    items-center
                    gap-8
                    border-t
                    border-[#E4E9EE]
                    py-10

                    sm:gap-10
                    sm:py-14

                    lg:grid-cols-[1.15fr_0.85fr]
                    lg:gap-16
                    lg:py-20

                    ${reverse ? "lg:grid-cols-[0.85fr_1.15fr]" : ""}
                  `}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[28px]
                      bg-[#F8FAFC]

                      ${reverse ? "lg:order-2" : "lg:order-1"}
                    `}
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                      <Image
                        src={gate.image}
                        alt={gate.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* Image overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/35 via-transparent to-transparent" />

                      {/* Number */}

                      <div
                        className="
                          absolute
                          left-5
                          top-5
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-[#182433]/35
                          text-[10px]
                          font-semibold
                          text-white
                          backdrop-blur-md

                          sm:left-6
                          sm:top-6
                        "
                      >
                        {gate.number}
                      </div>

                      {/* Tag */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5

                          sm:bottom-6
                          sm:left-6
                        "
                      >
                        <span
                          className="
                            rounded-full
                            border
                            border-white/25
                            bg-[#182433]/45
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.13em]
                            text-white
                            backdrop-blur-md
                          "
                        >
                          {gate.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className={`
                      relative

                      ${reverse ? "lg:order-1" : "lg:order-2"}
                    `}
                  >
                    {/* Giant background number */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -top-10
                        right-0
                        select-none
                        text-[100px]
                        font-semibold
                        leading-none
                        tracking-[-0.08em]
                        text-[#F1F4F7]

                        sm:text-[130px]
                      "
                    >
                      {gate.number}
                    </span>

                    <div className="relative z-10">
                      {/* Label */}

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#415A77]
                        "
                      >
                        GateSmart Collection
                      </p>

                      {/* Title */}

                      <h3
                        className="
                          mt-4
                          text-[30px]
                          font-semibold
                          leading-[1.08]
                          tracking-[-0.035em]
                          text-[#182433]

                          sm:text-[34px]

                          lg:text-[38px]
                        "
                      >
                        {gate.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-4
                          max-w-md
                          text-[14px]
                          leading-7
                          text-[#667085]

                          sm:text-[15px]
                        "
                      >
                        {gate.description}
                      </p>

                      {/* CTA */}

                      <div
                        className="
                          mt-7
                          inline-flex
                          items-center
                          gap-3
                          text-[13px]
                          font-semibold
                          text-[#415A77]
                        "
                      >
                        <span>Discuss this gate</span>

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#E4E9EE]
                            transition-all
                            duration-300
                            group-hover:border-[#415A77]
                            group-hover:bg-[#415A77]
                            group-hover:text-white
                          "
                        >
                          <ArrowUpRight size={15} />
                        </span>
                      </div>

                      {/* Bottom line */}

                      <div className="mt-8 h-px max-w-md bg-[#E4E9EE]">
                        <div
                          className="
                            h-px
                            w-0
                            bg-[#415A77]
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <div className="border-t border-[#E4E9EE] pt-8 sm:pt-10">
          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="text-[14px] font-semibold text-[#182433]">
                Have something specific in mind?
              </p>

              <p className="mt-1 text-[13px] leading-6 text-[#667085]">
                Tell us about your property and we can help you find the right
                gate solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#415A77]
                px-5
                text-[13px]
                font-semibold
                text-white
                transition
                hover:bg-[#344B65]
              "
            >
              Start Your Enquiry
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
