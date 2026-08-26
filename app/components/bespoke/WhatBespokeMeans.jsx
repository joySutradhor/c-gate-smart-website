import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "Designed specifically for your entrance",
  "Manufactured around your individual requirements",
  "Built around your property's style and layout",
  "Integrated with the right automation and access control",
];

export default function WhatBespokeMeans() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[30px] border border-[#E4E9EE] bg-white p-2">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">

                <Image
                  src="/Bespoke/drivewaygates.jpg"
                  alt="Bespoke automated driveway gate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

            {/* Small floating label */}
            <div className="absolute -bottom-5 right-5 rounded-2xl border border-[#E4E9EE] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(24,36,51,0.08)] sm:right-8">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8795A4]">
                Gate Smart
              </p>

              <p className="mt-1 text-sm font-bold text-[#182433]">
                Made For Your Entrance
              </p>

            </div>

          </div>


          {/* CONTENT */}
          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                What Bespoke Means
              </span>

            </div>


            {/* Heading */}
            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

              A Gate Designed
              <span className="text-[#415A77]">
                {" "}Around You
              </span>

            </h2>


            <p className="mt-5 text-base leading-7 text-[#667085]">
              Bespoke simply means your gates are designed and manufactured
              to suit your individual entrance and requirements, rather than
              supplying a standard off-the-shelf gate.
            </p>


            <p className="mt-4 text-sm leading-6 text-[#8795A4]">
              From the dimensions of your driveway to the way your family,
              visitors or customers use the entrance, every part of the
              system can be considered from the beginning.
            </p>


            {/* Points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {points.map((point) => (

                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-[#E4E9EE] bg-white p-4"
                >

                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm font-medium leading-5 text-[#4F5D6B]">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}