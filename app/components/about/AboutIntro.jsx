"use client";

import Image from "next/image";

export default function AboutIntro() {
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
            grid
            items-center
            gap-12

            lg:grid-cols-2
            lg:gap-20
          "
        >

          {/* IMAGE */}

          <div
            className="
              relative
              order-2

              lg:order-1
            "
          >

            <div
              className="
                relative
                h-[380px]
                overflow-hidden
                rounded-3xl

                sm:h-[480px]
              "
            >

              <Image
                src="/about/our-story.jpg"
                alt="GateSmart craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>


          {/* CONTENT */}

          <div
            className="
              order-1

              lg:order-2
            "
          >

            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#415A77]
              "
            >
              Our Story
            </span>


            <h2
              className="
                mt-3
                max-w-xl
                text-[30px]
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#182433]

                lg:text-[38px]
              "
            >
              Gates designed around
              <span className="block">
                your property.
              </span>
            </h2>


            <div
              className="
                mt-6
                space-y-5
                text-[15px]
                leading-7
                text-[#667085]
              "
            >

              <p>
                At GateSmart, we believe a gate should be
                more than simply an entrance. It should
                complement your property, provide the
                functionality you need and be built to
                perform for years to come.
              </p>

              <p>
                With more than 25 years of experience,
                we have developed the knowledge and skills
                required to create quality gates and
                railings for a wide range of properties.
              </p>

              <p>
                We work closely with our customers from
                the early design stage through to the
                finished installation, helping make sure
                the final result is right for the property
                and the people using it.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}