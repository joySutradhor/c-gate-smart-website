import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function GateAutomationHero() {
  return (
    <section className="bg-[#F8FAFC] py-[10vh] sm:py-[12vmin] lg:py-[3vmin]">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* =====================================
            HERO WRAPPER
        ====================================== */}

        <div className="relative overflow-hidden rounded-3xl border-x border-b border-[#E4E9EE] bg-white">

          {/* =================================
              TOP CONTENT
          ================================== */}

          <div className="px-6 pb-10 pt-12 sm:px-10 sm:pb-12 sm:pt-14 lg:px-16 lg:pb-14 lg:pt-16">

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-16">

              {/* LEFT */}

              <div>

                {/* Breadcrumb */}

                <div className="mb-6 flex items-center gap-2 text-xs text-[#667085]">

                  <Link
                    href="/"
                    className="transition hover:text-[#415A77]"
                  >
                    Home
                  </Link>

                  <span className="text-[#B8C1CA]">
                    /
                  </span>

                  <span className="font-medium text-[#415A77]">
                    Gate Automation 
                  </span>

                </div>


                {/* Label */}

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-px w-8 bg-[#415A77]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                    Gate Automation
                  </span>

                </div>


                {/* Heading */}

                <h1 className="max-w-[780px] text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-[#1F2937] sm:text-[50px] lg:text-[56px]">

                  Types of Gate Automation

                </h1>

              </div>


              {/* RIGHT INTRO */}

              <div className="max-w-[520px] lg:justify-self-end">

                <p className="text-base leading-7 text-[#667085]">

                  Automated gates generally fall into two main types:

                  <span className="font-semibold text-[#1F2937]">
                    {" "}swing gates and sliding gates.
                  </span>

                </p>

                <p className="mt-3 text-base leading-7 text-[#667085]">

                  The right system depends on the entrance, available
                  space, gate size and weight, frequency of use and
                  the requirements of your property.

                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              IMAGE STRIP
          ====================================== */}

          <div className="relative h-[280px] overflow-hidden sm:h-[360px] lg:h-[430px]">

            <Image
              src="/p-gate-automation/SLIDING-GATE.jpg"
              alt="Automated driveway gates"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />


            {/* Soft Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/65 via-[#182433]/10 to-transparent" />


            {/* =================================
                BOTTOM INFORMATION
            ================================== */}

            <div className="absolute bottom-0 left-0 right-0">

              <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 pb-6 sm:px-10 sm:pb-8 lg:flex-row lg:items-end lg:justify-between lg:px-16">

                {/* Manufacturer Notice */}

                <div className="max-w-[650px]">

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8E2EB]">
                    GateSmart Automation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white sm:text-base">

                    We predominantly install CAME automation, while also
                    servicing, repairing and maintaining systems from other
                    leading manufacturers.

                  </p>

                </div>


                {/* Scroll Indicator */}

                <div className="hidden items-center gap-3 text-xs font-medium text-white/80 lg:flex">

                  <span>
                    Explore automation types
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">

                    <ArrowDown size={15} />

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}