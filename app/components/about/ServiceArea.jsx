"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const areas = [
  "High Wycombe",
  "Beaconsfield",
  "Marlow",
  "Amersham",
  "Gerrards Cross",
  "Great Missenden",
  "Chalfont St Giles",
  "Chalfont St Peter",
  "Prestwood",
  "Tring",
  "Bovingdon",
  "Ascot",
];

export default function ServiceArea() {
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
          lg:py-20
        "
      >

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          "
        >

          {/* CONTENT */}

          <div>

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
              <MapPin size={20} />
            </div>


            <span
              className="
                mt-6
                block
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#415A77]
              "
            >
              Areas We Cover
            </span>


            <h2
              className="
                mt-3
                text-[30px]
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#182433]

                lg:text-[38px]
              "
            >
              Local knowledge.
              <span className="block">
                Personal service.
              </span>
            </h2>


            <p
              className="
                mt-5
                max-w-lg
                text-[15px]
                leading-7
                text-[#667085]
              "
            >
              GateSmart provides a personal and
              professional service across Buckinghamshire
              and surrounding areas. If you are unsure
              whether we cover your location, simply get
              in touch.
            </p>


            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#415A77]
                px-5
                py-3
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#344B65]
              "
            >
              Check Your Area
              <ArrowUpRight size={16} />
            </Link>

          </div>


          {/* AREA GRID */}

          <div
            className="
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-3
            "
          >

            {areas.map((area) => (

              <div
                key={area}
                className="
                  rounded-2xl
                  border
                  border-[#E4E9EE]
                  bg-[#F8FAFC]
                  px-4
                  py-4
                  text-[13px]
                  font-medium
                  text-[#1F2937]
                  transition
                  hover:border-[#D4DDE6]
                  hover:bg-[#EAF0F5]
                "
              >
                {area}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}