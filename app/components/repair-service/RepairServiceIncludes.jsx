import {
  Check,
  ShieldCheck,
  Wrench,
  Settings2,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Full Fault Diagnosis",
    description:
      "We inspect the gate, automation and safety equipment to identify the cause of the problem.",
  },
  {
    icon: Settings2,
    title: "Automated Gate Repairs",
    description:
      "Repairs for swing gates, sliding gates and a wide range of automated gate systems.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Testing",
    description:
      "Safety devices, photocells, edges and emergency controls are checked after every repair.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Replacement Parts",
    description:
      "Where replacement parts are required, we use suitable quality components for the system.",
  },
];

const included = [
  "Full inspection and fault diagnosis",
  "Repairs to automated gates",
  "Support for major automation brands",
  "On-site repairs with equipped service vans",
  "Genuine and high-quality replacement parts",
  "Safety testing after every repair",
  "Clear explanation of the fault and solution",
  "Advice to help prevent future problems",
];

export default function RepairServiceIncludes() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="max-w-[720px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Our Repair Service
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            A Complete Repair Service,
            <span className="text-[#415A77]"> From Diagnosis to Testing.</span>
          </h2>

          <p className="mt-5 max-w-[650px] text-base leading-7 text-[#667085]">
            Our engineers don't just repair the immediate fault. We inspect the
            system, identify the cause, carry out the required work and test the
            gate to make sure it is operating safely.
          </p>
        </div>

        {/* =========================================
            MAIN FEATURE + CHECKLIST
        ========================================== */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =====================================
              FEATURE CARD
          ====================================== */}
          <div className="relative overflow-hidden rounded-[32px] border border-[#E4E9EE] bg-white p-7 shadow-[0_12px_40px_rgba(24,36,51,0.05)] sm:p-9">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#EAF0F5] blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                <Wrench size={24} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                What We Do
              </p>

              <h3 className="mt-3 max-w-[420px] text-2xl font-bold leading-tight text-[#182433] sm:text-3xl">
                Getting your gate back to safe, reliable operation.
              </h3>

              <p className="mt-5 max-w-[440px] text-sm leading-6 text-[#667085]">
                From mechanical faults and electrical problems to access control
                and automation failures, our engineers work through the system
                carefully to find the right solution.
              </p>

              {/* Process */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#415A77] shadow-sm">
                    01
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#182433]">
                    Diagnose
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667085]">
                    Identify the cause of the fault.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#415A77] shadow-sm">
                    02
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#182433]">
                    Repair & Test
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667085]">
                    Complete the repair and test safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              INCLUDED CHECKLIST
          ====================================== */}
          <div className="rounded-[32px] border border-[#E4E9EE] bg-white p-7 shadow-[0_12px_40px_rgba(24,36,51,0.04)] sm:p-9">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                  Included
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#182433]">
                  What our repair visit covers
                </h3>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77] sm:flex">
                <ShieldCheck size={22} />
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-4 transition duration-300 hover:border-[#C9D5E1] hover:bg-white"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm font-medium leading-5 text-[#4F5D6B]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            SERVICE CARDS
        ========================================== */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#E4E9EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9D5E1] hover:shadow-[0_16px_40px_rgba(24,36,51,0.07)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                  <Icon size={19} />
                </div>

                <h3 className="mt-5 text-base font-bold text-[#182433]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
