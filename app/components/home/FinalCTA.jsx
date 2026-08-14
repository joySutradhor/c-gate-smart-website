"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="relative overflow-hidden rounded-[28px] bg-[#182433]">

          {/* =====================================
              SOFT DECORATIVE ELEMENTS
          ====================================== */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/5" />


          {/* =====================================
              MAIN CONTENT
          ====================================== */}

          <div className="relative z-10 grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-16 xl:px-20">

            {/* =================================
                LEFT CONTENT
            ================================== */}

            <div>

              {/* Small Label - 12px */}

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#AFC0D0]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC0D0]">
                  Let's Talk
                </span>

              </div>


              {/* Main Heading
                  Mobile: 30px
                  Desktop: 36px
              */}

              <h2 className="max-w-[700px] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-white sm:text-[36px]">

                Ready to Upgrade Your

                <span className="text-[#AFC0D0]">
                  {" "}Entrance?
                </span>

              </h2>


              {/* Normal Description - 16px */}

              <p className="mt-5 max-w-[620px] text-base leading-7 text-[#C4CDD6]">

                Whether you're looking for a bespoke gate, automatic
                access or reliable servicing, our team is ready to
                help you find the right solution for your property.

              </p>


              {/* =================================
                  CTA BUTTONS
              ================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* Call */}

                <a
                  href="tel:01494578656"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
                >

                  <Phone size={16} />

                  Call Us

                  <span className="text-[#667085]">
                    01494 578656
                  </span>

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />

                </a>


                {/* Email */}

                <a
                  href="mailto:info@gatesmart.co.uk"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >

                  <Mail size={16} />

                  Email Us

                </a>

              </div>

            </div>


            {/* =================================
                CONTACT DETAILS
            ================================== */}

            <div className="lg:justify-self-end">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D0]">
                  Get in touch
                </p>


                <div className="mt-5 space-y-5">

                  {/* Phone */}

                  <a
                    href="tel:01494578656"
                    className="group flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#AFC0D0]">

                      <Phone size={17} />

                    </div>

                    <div>

                      <p className="text-xs text-[#AAB6C2]">
                        Call us
                      </p>

                      <p className="mt-0.5 text-base font-semibold text-white group-hover:text-[#AFC0D0]">
                        01494 578656
                      </p>

                    </div>

                  </a>


                  {/* Email */}

                  <a
                    href="mailto:info@gatesmart.co.uk"
                    className="group flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#AFC0D0]">

                      <Mail size={17} />

                    </div>

                    <div>

                      <p className="text-xs text-[#AAB6C2]">
                        Email us
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#AFC0D0]">
                        info@gatesmart.co.uk
                      </p>

                    </div>

                  </a>


                  {/* Location */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#AFC0D0]">

                      <MapPin size={17} />

                    </div>

                    <div>

                      <p className="text-xs text-[#AAB6C2]">
                        Serving
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-white">
                        Local & surrounding areas
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}