"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Info } from "lucide-react";

export default function IntercomSolution({
  number,
  eyebrow,
  title,
  description,
  image,
  advantages = [],
  considerations = [],
  reverse = false,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div
          className={`
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          `}
        >
          {/* =====================================================
              IMAGE
          ====================================================== */}

          <div
            className={`
              relative
              ${reverse ? "lg:order-2" : "lg:order-1"}
            `}
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFC]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.03]
                  "
                />

                {/* Soft overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/30 via-transparent to-transparent" />

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
                  bg-white/95
                  text-[11px]
                  font-semibold
                  text-[#415A77]
                  shadow-sm
                  backdrop-blur-md
                "
                >
                  {number}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div
            className={`
              ${reverse ? "lg:order-1" : "lg:order-2"}
            `}
          >
            {/* Eyebrow */}

            <span
              className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#415A77]
            "
            >
              {eyebrow}
            </span>

            {/* Title */}

            <h2
              className="
              mt-3
              max-w-xl
              text-[28px]
              font-semibold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#182433]
              sm:text-[34px]
              lg:text-[38px]
            "
            >
              {title}
            </h2>

            {/* Description */}

            <p
              className="
              mt-4
              max-w-xl
              text-[14px]
              leading-7
              text-[#667085]
            "
            >
              {description}
            </p>

            {/* =================================================
                ADVANTAGES
            ================================================== */}

            {advantages.length > 0 && (
              <div className="mt-7">
                <p
                  className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#98A2B3]
                "
                >
                  Why choose it
                </p>

                <div
                  className="
                  mt-4
                  grid
                  gap-2.5
                  sm:grid-cols-2
                "
                >
                  {advantages.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-2.5
                        rounded-xl
                        border
                        border-[#E4E9EE]
                        bg-[#F8FAFC]
                        px-3.5
                        py-3
                      "
                    >
                      <span
                        className="
                        mt-0.5
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
                        <Check size={11} strokeWidth={2.5} />
                      </span>

                      <span
                        className="
                        text-[12px]
                        font-medium
                        leading-5
                        text-[#1F2937]
                      "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =================================================
                CONSIDERATION
            ================================================== */}

            {considerations.length > 0 && (
              <div
                className="
                mt-5
                flex
                gap-3
                rounded-2xl
                border
                border-[#E4E9EE]
                bg-white
                px-4
                py-3.5
              "
              >
                <Info
                  size={16}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#415A77]
                  "
                />

                <div>
                  <p
                    className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#182433]
                  "
                  >
                    Good to know
                  </p>

                  <p
                    className="
                    mt-1
                    text-[12px]
                    leading-5
                    text-[#667085]
                  "
                  >
                    {considerations[0]}
                  </p>
                </div>
              </div>
            )}

            {/* =================================================
                CTA
            ================================================== */}

            <Link
              href="/contact"
              className="
                mt-6
                inline-flex
                h-11
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
              Find the right system
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
