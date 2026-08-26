import {
  PhoneCall,
  SearchCheck,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const repairSteps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contact Our Team",
    description:
      "Tell us what is happening with your gate and provide any information you have about the system.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Fault Diagnosis",
    description:
      "Our engineer examines the gate, automation and relevant safety equipment to identify the fault.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Repair & Restore",
    description:
      "Once the fault is identified, the required repair work or replacement parts can be carried out.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Test & Check",
    description:
      "The system is tested after the repair to ensure the gate is operating correctly and safely.",
  },
];

export default function RepairProcess() {
  return (
    <section
      id="repair-process"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Our Process
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            A Straightforward Approach
            <span className="text-[#415A77]">
              {" "}to Gate Repairs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[#667085]">
            From your first call through to the final safety check, we keep
            the repair process clear, practical and focused on getting your
            gate working properly again.
          </p>

        </div>


        {/* Process */}
        <div className="relative mt-12">

          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-[#DDE4EB] lg:block" />

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {repairSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-[28px] border border-[#E4E9EE] bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(24,36,51,0.07)]"
                >

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#DCE5ED] bg-white text-[#415A77] shadow-sm">
                      <Icon size={21} />
                    </div>

                    <span className="text-[32px] font-bold tracking-[-1px] text-[#DDE5EC]">
                      {step.number}
                    </span>

                  </div>


                  {/* Content */}
                  <h3 className="mt-7 text-lg font-bold text-[#182433]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {step.description}
                  </p>


                  {/* Arrow */}
                  {index < repairSteps.length - 1 && (
                    <div className="mt-6 hidden items-center gap-2 text-xs font-semibold text-[#415A77] lg:flex">
                      Next step
                      <ArrowRight size={14} />
                    </div>
                  )}

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}