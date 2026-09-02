"use client";

import {
  Mail,
  Phone,
  ShieldCheck,
  Zap,
  Wrench,
  WrenchOff,
  SmartphoneNfc,
  DoorOpen,
  MessageCircleCheck,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    icon: ShieldCheck,
    title: "Bespoke Gates",
    url: "/bespoke-gates",
  },
  {
    icon: Zap,
    title: "Gate Automation",
    url: "/gate-automation",
  },
  {
    icon: Wrench,
    title: "Gate Servicing",
    url: "/gate-servicing",
  },
  {
    icon: WrenchOff,
    title: "Repair Service",
    url: "/repair-service",
  },
  {
    icon: SmartphoneNfc,
    title: "Intercom",
    url: "/intercom",
  },
  {
    icon: DoorOpen,
    title: "Gate refurbishment",
    // url: "/gate-refurbishment",
    url: "#",
  },
];

export default function Hero() {
  return (
    <section className="bg-white">
      {/* =========================================
          HERO CONTAINER
      ========================================== */}

      <div className="w-full px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <div className="relative min-h-[650px] w-full overflow-hidden rounded-[28px] bg-[#F8FAFC]">
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
            Your browser does not support the video tag
          </video>

          {/* =====================================
              VIDEO OVERLAY
          ====================================== */}

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 lg:from-white/95 lg:via-white/70 lg:to-transparent" />

          {/* =====================================
              CONTENT
          ====================================== */}

          <div className="relative z-10 flex min-h-[650px] items-center justify-center">
            <div className="w-full px-6 py-14 text-center sm:px-10 lg:px-14 xl:px-20">
              {/* =================================
                  EYEBROW
              ================================== */}

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#415A77]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                  Gate Specialists
                </span>

                <span className="h-px w-8 bg-[#415A77]" />
              </div>

              {/* =================================
                  HEADING
              ================================== */}

              <h1 className="mx-auto max-w-[680px] text-[42px] font-bold leading-[1.04] tracking-[-2px] text-[#182433] sm:text-[50px] lg:text-[62px]">
                Gates Designed
                <br />
                <span className="text-[#415A77]">Around You.</span>
              </h1>

              {/* =================================
                  DESCRIPTION
              ================================== */}

              <p className="mx-auto mt-6 max-w-[600px] text-base leading-7 text-[#182433] sm:text-lg">
                Bespoke gates, intelligent automation and expert servicing for
                homes and businesses across Buckinghamshire and the surrounding
                counties.
                <span className="font-semibold text-[#1F2937]">
                  {" "}
                  Built for security. Designed to last.
                </span>
              </p>

              {/* =================================
                  SERVICES
              ================================== */}

              <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link href={service.url} key={service.title}>
                      <div
                        className="
                          group
                          flex
                          items-center
                          
                          gap-3
                          rounded-xl
                      
                          
                          bg-[#415A77]
                          px-3
                          py-3
                          text-white
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:shadow-sm
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/10
                            text-white
                            transition-all
                            duration-300
                            
                            group-hover:bg-[#EAF0F5]
                            group-hover:text-[#415A77]
                          "
                        >
                          <Icon size={17} strokeWidth={1.8} />
                        </div>

                        {/* Title */}
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-[#1F2937]
                          "
                        >
                          {service.title}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* =================================
                  CTA AREA
              ================================== */}

              <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {/* Call CTA */}

                <a
                  href="tel:+441494578656"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D8E0E7] bg-white px-6 text-sm font-semibold text-[#1F2937] transition hover:border-[#415A77] hover:text-[#415A77]"
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

                {/* WhatsApp CTA */}

                <a
                  href="https://wa.me/447968392240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D8E0E7] bg-white px-6 text-sm font-semibold text-[#1F2937] transition hover:border-[#415A77] hover:text-[#415A77]"
                >
                  <MessageCircleCheck size={16} />
                  WhatsApp Us
                </a>
              </div>

              {/* =================================
                  CONTACT DETAILS
              ================================== */}

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#415A77]" />

                  <span className="text-sm text-[#182433]">01494 578656</span>
                </div>

                <div className="hidden h-4 w-px bg-[#D8E0E7] sm:block" />

                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#415A77]" />

                  <span className="text-sm text-[#182433]">
                    info@gatesmart.co.uk
                  </span>
                </div>
              </div>
            </div>
          </div>

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
    </section>
  );
}
