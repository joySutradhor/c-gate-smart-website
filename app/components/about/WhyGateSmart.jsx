"use client";

import {
  Award,
  Hammer,
  HeartHandshake,
  Ruler,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    number: "01",
    title: "25+ Years Experience",
    description:
      "Decades of experience have given us the practical knowledge to understand what makes a gate work well.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Bespoke Solutions",
    description:
      "Every property is different, so we create solutions around your space, style and requirements.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Quality Craftsmanship",
    description:
      "We focus on detail, construction quality and a finished result that looks right at your property.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Personal Service",
    description:
      "We work closely with you throughout the project rather than treating every job as the same.",
  },
];

export default function WhyGateSmart() {
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
            Why GateSmart
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
            Experience you can
            <span className="block">
              build on.
            </span>
          </h2>

          <p
            className="
              mt-4
              text-[15px]
              leading-7
              text-[#667085]
            "
          >
            Our approach is built around experience,
            craftsmanship and understanding what each
            customer actually needs.
          </p>

        </div>


        {/* GRID */}

        <div
          className="
            mt-12
            grid
            gap-px
            overflow-hidden
            rounded-3xl
            border
            border-[#E4E9EE]
            bg-[#E4E9EE]

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >

          {reasons.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  bg-white
                  p-7

                  transition
                  hover:bg-[#F8FAFC]

                  lg:p-8
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EAF0F5]
                      text-[#415A77]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      tracking-[0.14em]
                      text-[#98A2B3]
                    "
                  >
                    {item.number}
                  </span>

                </div>


                <h3
                  className="
                    mt-6
                    text-[16px]
                    font-semibold
                    text-[#182433]
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#667085]
                  "
                >
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}