"use client";

import Link from "next/link";
import {
  Wrench,
  RefreshCw,
  Search,
  Settings,
  Smartphone,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "New installations",
  },
  {
    icon: RefreshCw,
    title: "Replacement intercoms",
  },
  {
    icon: Search,
    title: "Fault finding",
  },
  {
    icon: Settings,
    title: "Access-control integration",
  },
  {
    icon: Smartphone,
    title: "SIM & connectivity issues",
  },
  {
    icon: KeyRound,
    title: "Keypads, fobs & remote access",
  },
];

export default function IntercomInstallation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Intro */}

          <div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Installation & Support
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#182433] sm:text-[38px]">
              More than just
              <span className="block text-[#98A2B3]">
                a new installation.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#667085]">
              Whether you're installing a completely new automated entrance
              or upgrading an existing intercom, GateSmart can help with
              installation, repairs, faults and system upgrades.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#415A77]"
            >
              Talk to GateSmart
              <ArrowUpRight size={15} />
            </Link>

          </div>


          {/* Services */}

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#E4E9EE] bg-[#E4E9EE] sm:grid-cols-2">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="bg-[#F8FAFC] p-6 transition hover:bg-white"
                >

                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#415A77]"
                  />

                  <p className="mt-7 text-[14px] font-semibold text-[#182433]">
                    {service.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}