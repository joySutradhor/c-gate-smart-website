"use client";

import Link from "next/link";
import {
  Radio,
  Cable,
  Smartphone,
  Video,
  Wifi,
  ArrowUpRight,
} from "lucide-react";

const systems = [
  {
    number: "01",
    title: "Wireless",
    short: "Simple communication without extensive cabling.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Wired",
    short: "Reliable connection through physical cabling.",
    icon: Cable,
  },
  {
    number: "03",
    title: "GSM / Mobile",
    short: "Answer your gate using your mobile phone.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "GSM Video",
    short: "See, speak to and control access remotely.",
    icon: Video,
  },
  {
    number: "05",
    title: "IP / Wi-Fi",
    short: "Connected communication through your network.",
    icon: Wifi,
  },
];

export default function IntercomTypes() {
  return (
    <section id="intercom-types" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="max-w-2xl">

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#415A77]">
            Intercom Options
          </span>

          <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#182433] sm:text-[38px]">
            Which type of intercom
            <span className="block text-[#98A2B3]">
              suits your property?
            </span>
          </h2>

          <p className="mt-5 text-[14px] leading-7 text-[#667085]">
            There are several ways to connect your entrance to your
            property. The right option depends on distance, cabling,
            connectivity and how you want to answer visitors.
          </p>

        </div>


        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#E4E9EE] bg-[#E4E9EE] sm:grid-cols-2 lg:grid-cols-5">

          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <Link
                href={`/contact?intercom=${system.title.toLowerCase()}`}
                key={system.number}
                className="group bg-white p-6 transition hover:bg-[#F8FAFC]"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[10px] font-semibold text-[#98A2B3]">
                    {system.number}
                  </span>

                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#415A77]"
                  />

                </div>

                <h3 className="mt-8 text-[17px] font-semibold text-[#182433]">
                  {system.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-[#667085]">
                  {system.short}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold text-[#415A77]">
                  Find out more
                  <ArrowUpRight size={13} />
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}