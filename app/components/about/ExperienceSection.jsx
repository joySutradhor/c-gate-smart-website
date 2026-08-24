"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-[#F8FAFC]">

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
            overflow-hidden
            rounded-3xl
            bg-[#182433]
          "
        >

          <div
            className="
              grid

              lg:grid-cols-2
            "
          >

            {/* IMAGE */}

            <div
              className="
                relative
                min-h-[350px]

                lg:min-h-[600px]
              "
            >

              <Image
                src="/gallery/metal1.jpg"
                alt="GateSmart gate craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-[#182433]/20
                "
              />

            </div>


            {/* CONTENT */}

            <div
              className="
                flex
                items-center
                p-8

                sm:p-12

                lg:p-14
              "
            >

              <div>

                <span
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#C8D5E2]
                  "
                >
                  Experience Matters
                </span>


                <h2
                  className="
                    mt-4
                    text-[30px]
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-white

                    lg:text-[38px]
                  "
                >
                  The knowledge to
                  <span className="block text-[#C8D5E2]">
                    get the details right.
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-7
                    text-white/60
                  "
                >
                  Years of experience have taught us that
                  the small details matter. From the way
                  a gate fits within an entrance to how it
                  operates day after day, every part of the
                  solution needs to work together.
                </p>


                <div className="mt-8 space-y-4">

                  {[
                    "Designed around your property",
                    "Practical and functional solutions",
                    "Professional approach from start to finish",
                    "Gate and railing expertise",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
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
                          bg-white/10
                          text-[#C8D5E2]
                        "
                      >
                        <Check size={12} />
                      </div>

                      <span
                        className="
                          text-[13px]
                          text-white/75
                        "
                      >
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                <Link
                  href="/contact"
                  className="
                    mt-9
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-5
                    py-3
                    text-[14px]
                    font-semibold
                    text-[#182433]
                    transition
                    hover:bg-[#EAF0F5]
                  "
                >
                  Discuss Your Project
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}