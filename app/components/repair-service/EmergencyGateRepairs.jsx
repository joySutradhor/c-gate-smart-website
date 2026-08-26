import Link from "next/link";
import {
  ArrowUpRight,
  AlertCircle,
  Phone,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const emergencyPoints = [
  "Gate stuck open or closed",
  "Automation suddenly stops working",
  "Safety device or photocell fault",
  "Gate damaged or not operating safely",
];

export default function EmergencyGateRepairs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Main Emergency Panel */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#E4E9EE] bg-[#F8FAFC]">

          {/* Subtle emergency glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#EAF0F5] blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* =====================================
                LEFT CONTENT
            ====================================== */}
            <div className="p-7 sm:p-10 lg:p-14">

              {/* Emergency Label */}
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <AlertCircle size={21} />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                    Emergency Repairs
                  </span>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span className="text-xs font-medium text-[#667085]">
                      Priority support available
                    </span>
                  </div>
                </div>

              </div>

              {/* Heading */}
              <h2 className="mt-7 max-w-[620px] text-[32px] font-bold leading-[1.08] tracking-[-1px] text-[#182433] sm:text-[44px]">

                Gate Not Working?

                <span className="block text-[#415A77]">
                  We Can Help Get It Moving Again.
                </span>

              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[600px] text-base leading-7 text-[#667085]">
                A failed automated gate can affect your security, access and
                everyday routine. If your gate has stopped working or is no
                longer operating safely, our engineers can investigate the
                fault and advise on the right repair.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="tel:01494578656"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#415A77] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
                >
                  <Phone size={16} />
                  Call 01494 578656
                </Link>

                <Link
                  href="#repair-process"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E0E7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] transition hover:border-[#415A77] hover:text-[#415A77]"
                >
                  How Repairs Work
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

            {/* =====================================
                RIGHT — EMERGENCY SITUATIONS
            ====================================== */}
            <div className="border-t border-[#E4E9EE] bg-white/70 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">

              {/* Header */}
              <div className="flex items-center justify-between gap-5">

                <div>
                  <div className="flex items-center gap-2">

                    <Clock3
                      size={18}
                      className="text-[#415A77]"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                      When You Need Us
                    </span>

                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.5px] text-[#182433]">
                    Common Emergency Problems
                  </h3>
                </div>

                {/* Warning Icon */}
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:flex">
                  <AlertCircle size={22} />
                </div>

              </div>

              {/* Problems */}
              <div className="mt-7 space-y-3">

                {emergencyPoints.map((point, index) => (
                  <div
                    key={point}
                    className="group flex items-center gap-4 rounded-2xl border border-[#E4E9EE] bg-white p-4 transition duration-300 hover:border-red-200 hover:shadow-[0_8px_25px_rgba(24,36,51,0.06)]"
                  >

                    {/* Number */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-xs font-bold text-[#415A77] transition group-hover:bg-red-50 group-hover:text-red-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Text */}
                    <span className="flex-1 text-sm font-medium leading-5 text-[#4F5D6B]">
                      {point}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#B0BAC5] transition group-hover:text-red-500"
                    />

                  </div>
                ))}

              </div>

              {/* Reassurance Card */}
              <div className="mt-6 rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#182433]">
                      Safety comes first
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                      We focus on identifying the fault properly and checking
                      the system after repair so your gate can operate safely.
                    </p>
                  </div>

                </div>

              </div>

              {/* Availability */}
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#667085]">

                <CheckCircle2
                  size={15}
                  className="text-[#415A77]"
                />

                <span>
                  Professional engineers • Reliable support • Clear advice
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}