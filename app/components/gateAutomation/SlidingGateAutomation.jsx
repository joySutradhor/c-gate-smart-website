import Image from "next/image";
import {
  ShieldCheck,
  BriefcaseBusiness,
  ArrowLeftRight,
  Settings,
  XCircle,
  Mountain,
  Leaf,
  Building2,
} from "lucide-react";

const trackedFeatures = [
  {
    icon: ShieldCheck,
    title: "Reliable and proven",
  },
  {
    icon: BriefcaseBusiness,
    title: "Suitable for large and heavy gates",
  },
  {
    icon: ArrowLeftRight,
    title: "Requires less space than swing gates",
  },
  {
    icon: Settings,
    title: "Ideal for residential & commercial use",
  },
];

const cantileverFeatures = [
  {
    icon: XCircle,
    title: "No track across the entrance",
  },
  {
    icon: Mountain,
    title: "Works well on uneven or difficult ground",
  },
  {
    icon: Leaf,
    title: "No track to collect dirt or debris",
  },
  {
    icon: Building2,
    title: "Ideal for commercial & industrial sites",
  },
];

export default function SlidingGateAutomation() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#182433] sm:text-4xl">
            SLIDING GATE AUTOMATION
          </h2>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#415A77]" />

          <p className="mt-6 text-base leading-7 text-[#1F2937]">
            Sliding gates move sideways across the entrance. They are ideal
            where there is limited space in front of or behind the gate, where
            swing gates are not suitable.
          </p>
        </div>

        {/* Two Types */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-6">
          {/* Tracked Sliding Gate */}
          <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white ">
            <div className="p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#415A77]">
                Sliding Gate Type
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#182433]">
                TRACKED SLIDING GATES
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#667085]">
                The gate runs on wheels along a ground track, while an electric
                motor opens and closes the gate.
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3 px-7 sm:px-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/p-gate-automation/track-sliding-auto.jpg"
                  alt="Tracked sliding gate automation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/p-gate-automation/tracked-sliding.jpg"
                  alt="Tracked sliding gate motor and track"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Features */}
            <div className="mt-7 grid grid-cols-2 border-t border-[#E4E9EE]">
              {trackedFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-3 p-5 ${
                      index < 2 ? "border-b border-[#E4E9EE]" : ""
                    } ${index % 2 === 0 ? "border-r border-[#E4E9EE]" : ""}`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#415A77]"
                    />

                    <span className="text-xs font-medium leading-5 text-[#1F2937]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* Cantilever Sliding Gate */}
          <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white ">
            <div className="p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#415A77]">
                Sliding Gate Type
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#182433]">
                CANTILEVER SLIDING GATES
                <span className="block text-base font-medium text-[#667085] sm:inline">
                  {" "}
                  (COUNTERBALANCED)
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#667085]">
                The gate is supported by a cantilever system and does not run on
                a track across the driveway opening.
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3 px-7 sm:px-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/p-gate-automation/CANTILEVERSLIDINGGATES.jpg"
                  alt="Cantilever sliding gate"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/p-gate-automation/CANTILEVER.jpg"
                  alt="Cantilever gate automation system"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Features */}
            <div className="mt-7 grid grid-cols-2 border-t border-[#E4E9EE]">
              {cantileverFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-3 p-5 ${
                      index < 2 ? "border-b border-[#E4E9EE]" : ""
                    } ${index % 2 === 0 ? "border-r border-[#E4E9EE]" : ""}`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#415A77]"
                    />

                    <span className="text-xs font-medium leading-5 text-[#1F2937]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
