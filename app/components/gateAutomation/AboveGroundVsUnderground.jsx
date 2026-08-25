import Image from "next/image";
import { EyeOff, Wrench } from "lucide-react";

const automationOptions = [
  {
    title: "Above-Ground Operators",
    description:
      "Above-ground operators are fitted directly to the gates and posts. They are generally easier to install, maintain and repair.",
    image: "/p-gate-automation/Aphrodite-Aluminium-Gate.jpg",
    icon: Wrench,
  },
  {
    title: "Underground Operators",
    description:
      "Underground operators are installed beneath the gates, providing a discreet finish with most of the automation hidden from view.",
    image: "/p-gate-automation/Underground-gate-automation.jpg",
    icon: EyeOff,
  },
];

function AutomationOption({ option }) {
  const Icon = option.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      {/* Image */}
      <div className="relative h-[230px] overflow-hidden sm:h-[280px]">
        <Image
          src={option.image}
          alt={option.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#415A77] shadow-sm">
          <Icon size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-[#415A77]" />

          <h3 className="text-[22px] font-bold tracking-[-0.5px] text-[#1F2937] sm:text-[24px]">
            {option.title}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#667085]">
          {option.description}
        </p>
      </div>
    </article>
  );
}

export default function AboveGroundVsUnderground() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Section Header */}
        <div className="max-w-[720px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Automation Options
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">
            Choose the Right{" "}
            <span className="text-[#415A77]">Automation System</span>
          </h2>

          <p className="mt-4 max-w-[650px] text-base leading-7 text-[#667085]">
            Gate automation can be installed above ground or underground. Each
            approach has different benefits depending on the gate, property and
            desired appearance.
          </p>
        </div>

        {/* Swing Gate Automation */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC]">
          {/* Parent Header */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="text-[26px] font-bold tracking-[-0.6px] text-[#1F2937] sm:text-[30px]">
              Swing Gate Automation
            </h3>

            <p className="mt-3 max-w-[760px] text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
              Swing gate automation can be installed either above ground or
              underground.
            </p>
          </div>

          {/* Automation Types */}
          <div className="grid gap-5 px-5 pb-5 sm:px-6 sm:pb-6 lg:grid-cols-2">
            {automationOptions.map((option) => (
              <AutomationOption key={option.title} option={option} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
