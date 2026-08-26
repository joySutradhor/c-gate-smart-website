import {
  ArrowUpRight,
  Check,
  EyeOff,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const automationOptions = [
  {
    icon: Settings2,
    title: "Above-Ground Automation",
    description:
      "Operators are fitted directly to the gate and posts, providing a practical and accessible automation solution.",
    points: [
      "Straightforward installation",
      "Easy access for maintenance",
      "Suitable for many existing gate designs",
    ],
  },
  {
    icon: EyeOff,
    title: "Underground Automation",
    description:
      "Automation is installed beneath the gates, keeping the mechanism discreet and maintaining a clean gate design.",
    points: [
      "Minimal visible equipment",
      "Clean and discreet appearance",
      "Ideal for premium gate designs",
    ],
  },
];

export default function GateAutomation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-[780px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Gate Automation
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            The Automation Is Just
            <span className="text-[#415A77]"> As Important</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-[#667085]">
            The right automation should work seamlessly with the gate itself.
            Gate Smart can recommend a system based on the gate design, entrance
            and how frequently it will be used.
          </p>
        </div>

        {/* CAME Highlight */}
        <div className="mx-auto mt-10 max-w-[1100px] rounded-[30px] border border-[#E4E9EE] bg-[#F8FAFC] p-6 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                  <Zap size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                    Gate Smart Automation
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#182433]">
                    Reliable systems with long-term support
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-[760px] text-sm leading-6 text-[#667085]">
                For new installations, Gate Smart predominantly uses
                <strong className="font-semibold text-[#182433]">
                  {" "}
                  CAME automation
                </strong>
                , allowing our engineers to provide a reliable system they know
                extremely well and can continue to support in the future.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E9EE] bg-white px-5 py-4 text-center">
              <p className="text-xs text-[#8795A4]">Automation</p>

              <p className="mt-1 text-lg font-bold text-[#415A77]">CAME</p>
            </div>
          </div>
        </div>

        {/* Automation Options */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {automationOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="rounded-[30px] border border-[#E4E9EE] bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF0F5] text-[#415A77]">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#182433]">
                      {option.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {option.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77]">
                        <Check size={13} strokeWidth={2.5} />
                      </span>

                      <span className="text-sm font-medium text-[#4F5D6B]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-6 flex max-w-[1100px] items-start gap-3 rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] p-5">
          <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#415A77]" />

          <p className="text-sm leading-6 text-[#667085]">
            The most suitable automation depends on the gate, entrance,
            available space and expected frequency of use. Our team can
            recommend the appropriate system during the design process.
          </p>
        </div>
      </div>
    </section>
  );
}
