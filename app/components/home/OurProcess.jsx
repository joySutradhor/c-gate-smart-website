"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  PenTool,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Consultation",
    description:
      "We start by understanding your property, requirements, style and security needs.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Planning",
    description:
      "We help you choose the right gate, materials and automation for your property.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installation",
    description:
      "Our experienced team handles the installation with care and attention to detail.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Support & Aftercare",
    description:
      "We remain available for servicing, maintenance and ongoing support when needed.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="mx-auto max-w-[700px] text-center">
          {/* Small Label - 12px */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              How It Works
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div>

          {/* Section Heading
              Mobile: 30px
              Desktop: 36px
          */}

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">
            From First Conversation
            <span className="text-[#415A77]"> to Finished Gate.</span>
          </h2>

          {/* Normal Description - 16px */}

          <p className="mt-4 text-base leading-7 text-[#667085]">
            A straightforward process designed to make your gate project simple,
            clear and stress-free from start to finish.
          </p>
        </div>

        {/* =========================================
            PROCESS TIMELINE
        ========================================== */}

        <div className="relative mt-14">
          {/* Desktop Connecting Line */}

          <div className="absolute left-[12.5%] right-[12.5%] top-[30px] hidden h-px bg-[#D8E0E7] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {/* =================================
                      NUMBER / ICON
                  ================================== */}

                  <div className="relative z-10 mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#D8E0E7] bg-white shadow-[0_4px_15px_rgba(31,41,55,0.05)]">
                    <Icon size={21} className="text-[#415A77]" />
                  </div>

                  {/* Number */}

                  <span className="mt-4 block text-xs font-semibold tracking-[0.14em] text-[#415A77]">
                    STEP {step.number}
                  </span>

                  {/* Card Title - 16px */}

                  <h3 className="mt-2 text-base font-bold text-[#1F2937]">
                    {step.title}
                  </h3>

                  {/* Service Description - 14px */}

                  <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] px-6 py-6 sm:flex-row sm:px-8">
          <div>
            <p className="text-base font-semibold text-[#1F2937]">
              Ready to discuss your gate project?
            </p>

            <p className="mt-1 text-sm text-[#667085]">
              Speak to our team and get advice for your property.
            </p>
          </div>

          <a
            href="tel:01494578656"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[#415A77] px-5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
          >
            Call Us
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
