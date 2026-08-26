import {
  ArrowUpRight,
  CircleDot,
  Columns2,
  PanelsTopLeft,
  Radio,
  KeyRound,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

const gateTypes = [
  {
    icon: Columns2,
    title: "Swing Gates",
    description:
      "Single and double swing gates with above-ground or underground automation.",
  },
  {
    icon: PanelsTopLeft,
    title: "Sliding Gates",
    description:
      "Tracked and cantilever sliding gates, including automated sliding systems.",
  },
  {
    icon: CircleDot,
    title: "Gate Motors",
    description:
      "Faults involving motors, operators, control panels and automation components.",
  },
  {
    icon: Radio,
    title: "Remotes & Receivers",
    description:
      "Problems with remote controls, receivers, transmitters and wireless access.",
  },
  {
    icon: KeyRound,
    title: "Keypads & Access",
    description:
      "Keypads, coded entry systems and other access-control equipment.",
  },
  {
    icon: MonitorCog,
    title: "Intercom Systems",
    description:
      "Faults affecting gate intercoms and communication between the entrance and property.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    description:
      "Photocells, safety edges, emergency stops and related safety devices.",
  },
  {
    icon: PanelsTopLeft,
    title: "Control Systems",
    description:
      "Control boards, wiring and other electronic components within automated gate systems.",
  },
];

export default function RepairGateTypes() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-[720px]">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Gates & Systems
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
              What Can We
              <span className="text-[#415A77]">
                {" "}Repair?
              </span>
            </h2>

          </div>

          <p className="max-w-[500px] text-sm leading-6 text-[#667085] lg:pb-1">
            We work with a wide range of automated gate systems and access
            equipment. If you're unsure what is causing the problem, our
            engineers can help identify it.
          </p>

        </div>


        {/* Gate Types */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {gateTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#E4E9EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CBD7E2] hover:shadow-[0_18px_45px_rgba(24,36,51,0.07)]"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#C0C9D3] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#415A77]"
                  />

                </div>


                {/* Content */}
                <h3 className="mt-6 text-base font-bold text-[#182433]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {item.description}
                </p>


                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#415A77] transition duration-300 group-hover:scale-x-100" />

              </article>
            );
          })}

        </div>


        {/* Bottom Note */}
        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-[#E4E9EE] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-start gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
              <ShieldCheck size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#182433]">
                Not sure what system you have?
              </p>

              <p className="mt-1 text-xs leading-5 text-[#667085]">
                Don't worry. Our team can help you identify the gate,
                automation and equipment before the visit.
              </p>
            </div>

          </div>

          <a
            href="tel:01494578656"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#D5DEE7] px-5 py-3 text-sm font-semibold text-[#415A77] transition hover:border-[#415A77] hover:bg-[#EAF0F5]"
          >
            Call 01494 578656
          </a>

        </div>

      </div>
    </section>
  );
}