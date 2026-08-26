import {
  ClipboardCheck,
  PenTool,
  Settings2,
  KeyRound,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const process = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Site Survey",
    description:
      "We assess your entrance, available space, existing structures and how the gates will be used.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Gate Design",
    description:
      "Your gate style, dimensions, material and overall appearance are considered around the property.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Automation",
    description:
      "We select the appropriate automation based on the gate design, entrance and frequency of use.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Access Control",
    description:
      "Intercoms, keypads, remotes, fobs or mobile access can be integrated into the system.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Installation",
    description:
      "Our engineers install the gates, automation and associated equipment as one complete system.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Commissioning",
    description:
      "The completed system is checked and tested before being handed over for use.",
  },
];

export default function BespokeDesignToInstallation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="mx-auto max-w-[780px] text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              From Design to Installation
            </span>

            <span className="h-px w-8 bg-[#415A77]" />

          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            One Complete Process,
            <span className="text-[#415A77]">
              {" "}From Start to Finish
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-[#667085]">
            Gate Smart can help throughout the complete process, from the
            initial site survey and gate design through to automation,
            access control, installation and commissioning.
          </p>

        </div>


        {/* Process */}
        <div className="relative mt-12">

          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[8.33%] right-[8.33%] top-6 hidden h-px bg-[#DCE3E9] lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">

            {process.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative rounded-[24px] border border-[#E4E9EE] bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_35px_rgba(24,36,51,0.07)]"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E4E9EE] bg-white text-[#415A77] shadow-sm transition duration-300 group-hover:border-[#415A77] group-hover:bg-[#415A77] group-hover:text-white">
                    <Icon size={19} />
                  </div>


                  {/* Number */}
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#AAB5C0]">
                    Step {item.number}
                  </p>


                  {/* Title */}
                  <h3 className="mt-2 text-base font-bold text-[#182433]">
                    {item.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {item.description}
                  </p>

                </article>
              );

            })}

          </div>

        </div>


        {/* Ongoing Support */}
        <div className="mt-6 rounded-[28px] border border-[#E4E9EE] bg-[#F8FAFC] p-6 sm:p-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-[800px]">

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                Ongoing Support
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#182433] sm:text-2xl">
                Support doesn't stop after installation.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Once installed, we can provide ongoing servicing, maintenance
                and repairs to help keep your automated gates operating safely
                and reliably for years to come.
              </p>

            </div>


            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#E4E9EE] bg-white px-4 py-3">

              <CheckCircle2
                size={17}
                className="text-[#415A77]"
              />

              <span className="text-sm font-semibold text-[#4F5D6B]">
                Long-term support
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}