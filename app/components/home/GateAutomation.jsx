"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Smartphone,
  ShieldCheck,
  Radio,
} from "lucide-react";

export default function GateAutomation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid overflow-hidden rounded-[28px] bg-[#182433] lg:grid-cols-[0.95fr_1.05fr]">
          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 xl:px-16">
            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#AFC0D0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC0D0]">
                Gate Automation
              </span>
            </div>

            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="max-w-[560px] text-[30px] font-bold leading-[1.12] tracking-[-1px] text-white sm:text-[36px]">
              Smarter Access.
              <br />
              <span className="text-[#AFC0D0]">Greater Control.</span>
            </h2>

            {/* Normal Description - 16px */}

            <p className="mt-5 max-w-[550px] text-base leading-7 text-[#C4CDD6]">
              Make coming home simpler with reliable gate automation. Open,
              close and control your gates with technology designed around the
              way you use your property.
            </p>

            {/* =================================
                FEATURES
            ================================== */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#AFC0D0]">
                  <Smartphone size={16} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Smart Control
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#AAB6C2]">
                    Convenient access from your phone or remote.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#AFC0D0]">
                  <ShieldCheck size={16} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Added Security
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#AAB6C2]">
                    Controlled access for greater peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#AFC0D0]">
                  <Radio size={16} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Reliable Systems
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#AAB6C2]">
                    Quality automation built for everyday use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#AFC0D0]">
                  <Check size={16} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Expert Installation
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-[#AAB6C2]">
                    Professionally installed and configured.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <Link
              href="/callout-gate-repairs"
              className="group mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
            >
              Need a Gate Repair?
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =====================================
              RIGHT IMAGE / VIDEO
          ====================================== */}

          <div className="relative min-h-[380px] lg:min-h-[600px]">
            {/* Replace with your automation video */}

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/gate-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#182433]/50 via-transparent to-transparent" />

            {/* Floating Label */}

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#182433]/80 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-xs uppercase tracking-[0.14em] text-[#AFC0D0]">
                Intelligent Access
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Automation made simple
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
