import {
  AlertTriangle,
  CircleX,
  PoundSterling,
  Clock3,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

const risks = [
  {
    icon: CircleX,
    title: "Increased Risk of Mechanical Failure",
    description:
      "Regular servicing helps identify worn or damaged components before they become major problems.",
  },
  {
    icon: AlertTriangle,
    title: "Potential Safety Hazards",
    description:
      "Faulty gates can create unnecessary safety risks for people, vehicles and property.",
  },
  {
    icon: PoundSterling,
    title: "Expensive Emergency Repairs",
    description:
      "Small maintenance issues can quickly turn into costly emergency repairs when left unchecked.",
  },
  {
    icon: Clock3,
    title: "Unexpected Downtime",
    description:
      "A failed gate can leave your property inaccessible and cause unnecessary disruption.",
  },
  {
    icon: ShieldAlert,
    title: "Your Warranty May Be Affected",
    description:
      "Some manufacturers require regular servicing to keep your automation warranty valid.",
  },
];

const riskImages = [
  {
    src: "/images/gate-wear.jpg",
    alt: "Worn gate mechanism",
    label: "Wear & tear",
    text: "Components can deteriorate gradually without regular maintenance.",
  },
  {
    src: "/images/gate-repair.jpg",
    alt: "Damaged gate component",
    label: "Small issues",
    text: "Minor faults can develop into expensive problems over time.",
  },
  {
    src: "/images/gate-engineer.jpg",
    alt: "Gate Smart engineer servicing an automated gate",
    label: "Stay protected",
    text: "Regular servicing keeps your gate safe, reliable and ready to use.",
  },
];

export default function GateServicingRisks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#415A77]">
            <span className="h-px w-8 bg-[#415A77]" />
            Why regular servicing matters
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#182433] md:text-[36px]">
            The Risks of Not Servicing
            <span className="block">Your Gate</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[#667085]">
            Skipping regular maintenance can allow small faults to develop
            into safety issues, unexpected breakdowns and expensive repairs.
          </p>
        </div>

        {/* Main Risk Area */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr]">

          {/* Risks List */}
          <div className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-6 md:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#415A77]">
                  What could happen?
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#182433]">
                  Common risks
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#415A77] shadow-sm ring-1 ring-[#E4E9EE]">
                <ShieldAlert size={25} strokeWidth={1.8} />
              </div>
            </div>

            <div className="space-y-2">
              {risks.map((risk, index) => {
                const Icon = risk.icon;

                return (
                  <div
                    key={risk.title}
                    className="group flex gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:border-[#E4E9EE] hover:shadow-sm"
                  >
                    {/* Icon */}
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        index === 1 || index === 2
                          ? "bg-[#FFF7F5] text-[#B54747]"
                          : "bg-[#EAF0F5] text-[#415A77]"
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-semibold leading-6 text-[#1F2937]">
                        {risk.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-[#667085]">
                        {risk.description}
                      </p>
                    </div>

                    {/* Number */}
                    <span className="ml-auto hidden shrink-0 pt-1 text-xs font-semibold text-[#98A2B3] sm:block">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image / Visual Side */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {/* Featured Image */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-3xl bg-[#EAF0F5] lg:min-h-[250px]">
              <img
                src={riskImages[0].src}
                alt={riskImages[0].alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/85 via-[#182433]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#415A77]">
                  {riskImages[0].label}
                </span>

                <p className="mt-3 max-w-md text-base font-medium leading-6 text-white">
                  {riskImages[0].text}
                </p>
              </div>
            </div>

            {/* Two Smaller Images */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {riskImages.slice(1).map((image) => (
                <div
                  key={image.label}
                  className="group relative min-h-[230px] overflow-hidden rounded-3xl bg-[#EAF0F5]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#182433]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      {image.label}
                    </span>

                    <p className="mt-2 text-sm font-medium leading-5 text-white">
                      {image.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E4E9EE] bg-[#EAF0F5] p-6 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-7">
          <div className="max-w-2xl">
            <p className="text-lg font-bold text-[#182433]">
              Regular servicing is a small investment compared with an
              unexpected gate failure.
            </p>

            <p className="mt-1 text-sm leading-6 text-[#667085]">
              Keep your automated gate safe, reliable and operating as it
              should throughout the year.
            </p>
          </div>

          <a
            href="tel:01494578656"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#415A77] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#182433]"
          >
            Talk to Gate Smart
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}