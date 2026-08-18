"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  Zap,
  Wrench,
  WrenchOff,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Bespoke Gates",
  },
  {
    icon: Zap,
    title: "Gate Automation",
  },
  {
    icon: Wrench,
    title: "Gate Servicing",
  },
  {
    icon: WrenchOff,
    title: "Repair Service",
  },
];

export default function Hero() {
  return (
    <section className="bg-white">
      {/* =========================================
          HERO CONTAINER
      ========================================== */}

      <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <div className="relative min-h-[650px] overflow-hidden rounded-[28px] bg-[#F8FAFC]">
          {/* =====================================
              BACKGROUND VIDEO
          ====================================== */}

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

          {/* =====================================
              VIDEO OVERLAY
          ====================================== */}

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 lg:from-white lg:via-white/80 lg:to-transparent" />

          {/* =====================================
              CONTENT
          ====================================== */}

          <div className="relative z-10 flex min-h-[650px] items-center">
            <div className="w-full px-6 py-14 sm:px-10 lg:w-[62%] lg:px-14 xl:px-20">
              {/* =================================
                  EYEBROW
              ================================== */}

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#415A77]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                  Gate Specialists
                </span>
              </div>

              {/* =================================
                  HEADING

                  Mobile: 42px
                  Tablet: 50px
                  Desktop: 62px
              ================================== */}

              <h1 className="max-w-[680px] text-[42px] font-bold leading-[1.04] tracking-[-2px] text-[#182433] sm:text-[50px] lg:text-[62px]">
                Gates Designed
                <br />
                <span className="text-[#415A77]">Around You.</span>
              </h1>

              {/* =================================
                  DESCRIPTION
                  16px
              ================================== */}

              <p className="mt-6 max-w-[600px] text-base leading-7 text-[#667085]">
                Bespoke gates, intelligent automation and expert servicing for
                homes and businesses across Buckinghamshire and the surrounding counties.
                <span className="font-semibold text-[#1F2937]">
                  {" "}
                  Built for security. Designed to last.
                </span>
              </p>

              {/* =================================
                  SERVICES
              ================================== */}

              <div className="mt-8 grid max-w-[600px] xl:max-w-[70vw] gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="flex items-center gap-3 rounded-xl border border-[#E4E9EE] bg-white/90 px-3 py-3 backdrop-blur-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF0F5] text-[#415A77]">
                        <Icon size={17} />
                      </div>

                      <span className="text-sm font-semibold leading-5 text-[#1F2937]">
                        {service.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* =================================
                  CTA AREA
              ================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Call CTA */}

                <a
                  href="tel:+4401494 578656"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#415A77] px-6 text-sm font-semibold text-white transition hover:bg-[#344B65]"
                >
                  <Phone size={16} />
                  Call Us Today
                </a>

                {/* Email CTA */}

                <a
                  href="mailto:info@gatesmart.co.uk"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D8E0E7] bg-white px-6 text-sm font-semibold text-[#1F2937] transition hover:border-[#415A77] hover:text-[#415A77]"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>

              {/* =================================
                  CONTACT DETAILS
              ================================== */}

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#415A77]" />

                  <span className="text-sm text-[#667085]">01494 578656</span>
                </div>

                <div className="hidden h-4 w-px bg-[#D8E0E7] sm:block" />

                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#415A77]" />

                  <span className="text-sm text-[#667085]">
                    info@gatesmart.co.uk
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              BOTTOM LEFT MINI BADGE
          ====================================== */}

          

          {/* =====================================
              BOTTOM RIGHT LABEL
          ====================================== */}

          <div className="absolute bottom-6 right-6 z-10 hidden rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md lg:block">
            <p className="text-xs uppercase tracking-[0.14em] text-[#667085]">
              Premium Gate Solutions
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          BELOW HERO
      ========================================== */}

      {/* <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-[#E4E9EE] pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              GateSmart
            </p>

            <h2 className="mt-1 text-[30px] font-bold leading-tight tracking-[-1px] text-[#1F2937] sm:text-[36px]">
              Complete Gate Solutions
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#415A77]"
          >
            Explore our services
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div> */}
    </section>
  );
}
