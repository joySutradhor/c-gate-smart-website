import {
  ShieldCheck,
  Droplets,
  SlidersHorizontal,
  Zap,
  Settings2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

export default function GateServiceProcess() {
  const serviceSteps = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Full Safety Check",
      text: "We inspect the complete automation system and safety devices to make sure everything is operating correctly.",
    },
    {
      number: "02",
      icon: Droplets,
      title: "Lubrication & Wear Check",
      text: "Moving parts, hinges and mechanical components are checked and lubricated where required.",
    },
    {
      number: "03",
      icon: SlidersHorizontal,
      title: "Gate & Limit Adjustment",
      text: "We check gate movement, alignment and operating limits to ensure smooth and controlled operation.",
    },
    {
      number: "04",
      icon: Zap,
      title: "Electrical Inspection",
      text: "Electrical connections, safety circuits and key components are inspected for signs of faults or wear.",
    },
    {
      number: "05",
      icon: Settings2,
      title: "Control System Check",
      text: "Control panels, settings and access devices are tested and adjusted where necessary.",
    },
    {
      number: "06",
      icon: ClipboardCheck,
      title: "Final Operational Test",
      text: "The complete system is tested before we finish, giving you confidence that your gate is ready to operate safely.",
    },
  ];

  return (
    <section className="bg-[#EAF0F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D5DEE8] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#415A77]" />
              The Service Process
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#182433] md:text-4xl">
              What happens during a
              <span className="text-[#415A77]"> gate service?</span>
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-2xl text-base leading-7 text-[#667085] md:text-[17px]">
              A proper gate service is more than a quick visual check. Our
              engineers inspect, test and fine-tune the key parts of your
              automated gate system to help keep it safe, reliable and
              operating as it should.
            </p>
          </div>
        </div>

        {/* Main Process Card */}
        <div className="mt-14 overflow-hidden rounded-[28px] border border-[#D5DEE8] bg-white shadow-[0_20px_60px_rgba(24,36,51,0.06)]">

          {/* Top Intro */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            <div className="relative overflow-hidden bg-[#182433] p-8 sm:p-10 md:p-12">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck
                    size={23}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Thorough inspection
                </p>

                <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-white md:text-3xl">
                  Every important part gets checked.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
                  From mechanical movement to electrical controls, we work
                  through the system methodically rather than simply looking
                  for obvious faults.
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white/80">
                  <span className="h-px w-8 bg-white/30" />
                  Gate Smart service
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-2">
              {serviceSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`group relative p-7 transition-colors duration-300 hover:bg-[#F8FAFC] sm:p-8 ${
                      index < 4 ? "border-b border-[#E4E9EE]" : ""
                    } ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#E4E9EE]"
                        : ""
                    }`}
                  >
                    {/* Number */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition-all duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <span className="text-[11px] font-semibold tracking-[0.15em] text-[#98A2B3]">
                        {step.number}
                      </span>
                    </div>

                    <h4 className="mt-6 text-[16px] font-semibold text-[#182433]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom reassurance bar */}
          <div className="flex flex-col gap-5 border-t border-[#E4E9EE] bg-[#F8FAFC] px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-sm font-semibold text-[#182433]">
                A service designed around safety and reliability.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#667085]">
                We don't just identify problems — we help prevent them from
                becoming expensive failures.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#415A77] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#344B65]"
            >
              Book a service
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}