import { Clock3, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Availability",
    text: "Dedicated service engineers are available around the clock, 365 days a year.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    text: "Our engineers have specialist knowledge in gate automation, repairs and servicing.",
  },
  {
    icon: ShieldCheck,
    title: "Manufacturer Support",
    text: "We have direct communication with manufacturer technical departments and keep up to date with current technology.",
  },
];

export default function RepairsServiceIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Heading */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Reliable Support
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[38px]">
              Repairs & Callouts —
              <span className="text-[#415A77]">
                {" "}When You Need Us
              </span>
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="text-base leading-8 text-[#667085]">
              We have dedicated service engineers on call 24 hours a day,
              365 days a year, giving you peace of mind that someone is
              always there when you need help.
            </p>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              With specialist expertise in gate automation and full technical
              support from manufacturers, we can diagnose problems efficiently
              and provide a knowledgeable, first-class service. Our engineers
              maintain direct communication with manufacturer technical
              departments and stay up to date with current technology.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#1F2937]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}