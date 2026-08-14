"use client";

import Link from "next/link";
import {
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "From the initial consultation through to installation, the whole process was straightforward and professional. We're really pleased with the finished gate.",
    name: "James Wilson",
    location: "Buckinghamshire",
  },
  {
    quote:
      "The team understood exactly what we wanted and helped us choose the right automation. The finished result looks fantastic and works perfectly.",
    name: "Sarah Mitchell",
    location: "High Wycombe",
  },
  {
    quote:
      "Excellent service from start to finish. Everything was explained clearly and the installation was completed to a very high standard.",
    name: "David Thompson",
    location: "Beaconsfield",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8FAFC]">

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div className="max-w-[700px]">

            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Customer Reviews
              </span>

            </div>


            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

              Trusted by Property Owners

              <span className="text-[#415A77]">
                {" "}Across the Area.
              </span>

            </h2>


            {/* Normal Description - 16px */}

            <p className="mt-4 max-w-[620px] text-base leading-7 text-[#667085]">

              We believe the best measure of our work is what our
              customers have to say about their experience.

            </p>

          </div>


          {/* Rating Summary */}

          <div className="flex items-center gap-4 rounded-2xl border border-[#E4E9EE] bg-white px-5 py-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

              <Star
                size={19}
                fill="currentColor"
              />

            </div>

            <div>

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={14}
                    className="text-[#415A77]"
                    fill="currentColor"
                  />

                ))}

              </div>

              <p className="mt-1 text-sm text-[#667085]">
                Highly rated service
              </p>

            </div>

          </div>

        </div>


        {/* =========================================
            TESTIMONIALS
        ========================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <article
              key={testimonial.name}
              className={`relative rounded-[22px] border border-[#E4E9EE] bg-white p-6 sm:p-7 ${
                index === 1
                  ? "lg:-translate-y-2 lg:shadow-[0_15px_40px_rgba(31,41,55,0.06)]"
                  : ""
              }`}
            >

              {/* Quote Icon */}

              <div className="flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">

                  <Quote size={17} />

                </div>


                {/* Stars */}

                <div className="flex gap-0.5">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={13}
                      className="text-[#415A77]"
                      fill="currentColor"
                    />

                  ))}

                </div>

              </div>


              {/* Review - 16px */}

              <blockquote className="mt-6 text-base leading-7 text-[#4B5563]">

                “{testimonial.quote}”

              </blockquote>


              {/* Customer */}

              <div className="mt-7 border-t border-[#E4E9EE] pt-5">

                <p className="text-base font-semibold text-[#1F2937]">
                  {testimonial.name}
                </p>

                <p className="mt-0.5 text-sm text-[#667085]">
                  {testimonial.location}
                </p>

              </div>

            </article>

          ))}

        </div>


       

      </div>

    </section>
  );
}