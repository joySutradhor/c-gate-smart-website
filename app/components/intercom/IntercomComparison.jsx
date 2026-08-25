"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const rows = [
  {
    type: "Wireless",
    best: "When new cabling is difficult",
    connection: "Radio",
    remote: "Limited",
  },
  {
    type: "Wired",
    best: "Reliable long-term installation",
    connection: "Cable",
    remote: "System dependent",
  },
  {
    type: "GSM / Mobile",
    best: "Long-distance entrances",
    connection: "Mobile network",
    remote: "Yes",
  },
  {
    type: "GSM Video",
    best: "Remote video access",
    connection: "Mobile data",
    remote: "Yes",
  },
  {
    type: "IP / Wi-Fi",
    best: "Connected smart properties",
    connection: "Internet / Wi-Fi",
    remote: "Yes",
  },
];

export default function IntercomComparison() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="max-w-2xl">

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#415A77]">
            Make The Right Choice
          </span>

          <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#182433] sm:text-[38px]">
            Which intercom is
            <span className="block text-[#98A2B3]">
              right for your property?
            </span>
          </h2>

        </div>


        <div className="mt-10 overflow-x-auto rounded-3xl border border-[#E4E9EE] bg-white">

          <table className="w-full min-w-[720px] border-collapse text-left">

            <thead>
              <tr className="border-b border-[#E4E9EE]">

                <th className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                  System
                </th>

                <th className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                  Best For
                </th>

                <th className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                  Connection
                </th>

                <th className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                  Remote Access
                </th>

              </tr>
            </thead>

            <tbody>

              {rows.map((row) => (
                <tr
                  key={row.type}
                  className="border-b border-[#E4E9EE] last:border-0"
                >

                  <td className="px-6 py-5 text-[14px] font-semibold text-[#182433]">
                    {row.type}
                  </td>

                  <td className="px-6 py-5 text-[13px] text-[#667085]">
                    {row.best}
                  </td>

                  <td className="px-6 py-5 text-[13px] text-[#667085]">
                    {row.connection}
                  </td>

                  <td className="px-6 py-5">

                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#415A77]">
                      <Check size={13} />
                      {row.remote}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-[#E4E9EE] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

          <div>

            <p className="text-[14px] font-semibold text-[#182433]">
              Still not sure which system you need?
            </p>

            <p className="mt-1 text-[13px] text-[#667085]">
              We can assess your gate, property and connectivity requirements.
            </p>

          </div>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#415A77] px-5 text-[13px] font-semibold text-white transition hover:bg-[#344B65]"
          >
            Get Advice
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>
    </section>
  );
}