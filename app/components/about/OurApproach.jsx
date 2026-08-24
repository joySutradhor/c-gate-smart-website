"use client";

import {
  MessageCircle,
  PencilRuler,
  Settings2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Understand",
    description:
      "We start by understanding your property, requirements and what you want your gate to achieve.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description:
      "We help develop a solution that fits the property while reflecting your preferred style.",
  },
  {
    icon: Settings2,
    title: "Build & Install",
    description:
      "The project is carried through with attention to quality, functionality and detail.",
  },
  {
    icon: Sparkles,
    title: "Complete",
    description:
      "The result is a finished entrance designed to look right and perform reliably.",
  },
];

export default function OurApproach() {
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

        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#415A77]
            "
          >
            Our Approach
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
            From idea to finished gate.
          </h2>

          <p
            className="
              mt-4
              text-[15px]
              leading-7
              text-[#667085]
            "
          >
            A straightforward approach designed to make
            the process clear, collaborative and personal.
          </p>

        </div>


        {/* STEPS */}

        <div
          className="
            relative
            mt-14
            grid
            gap-8

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >

          {/* Connecting Line */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[27px]
              hidden
              h-px
              bg-[#E4E9EE]

              lg:block
            "
          />


          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  relative
                  text-center
                "
              >

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#E4E9EE]
                    bg-white
                    text-[#415A77]
                    shadow-sm
                  "
                >
                  <Icon size={21} />
                </div>


                <span
                  className="
                    mt-5
                    block
                    text-[11px]
                    font-semibold
                    tracking-[0.14em]
                    text-[#98A2B3]
                  "
                >
                  0{index + 1}
                </span>


                <h3
                  className="
                    mt-2
                    text-[16px]
                    font-semibold
                    text-[#182433]
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[240px]
                    text-[13px]
                    leading-6
                    text-[#667085]
                  "
                >
                  {step.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}