import Image from "next/image";
import {
  Wrench,
  Zap,
  KeyRound,
  ShieldCheck,
  Settings2,
  MoveHorizontal,
} from "lucide-react";

const repairProblems = [
  {
    title: "Mechanical Faults",
    description:
      "Worn gears, tracks, hinges and moving components can affect how smoothly your gate operates.",
    image: "/repair-service/MechanicalFaults.jpg",
    icon: Wrench,
  },
  {
    title: "Electrical Issues",
    description:
      "Power problems, blown fuses, wiring faults and electrical failures can stop your system working.",
    image: "/repair-service/ElectricalIssues.jpg",
    icon: Zap,
  },
  {
    title: "Access Control Problems",
    description:
      "Problems with remotes, keypads, fobs, intercoms and receivers can prevent reliable access.",
    image: "/repair-service/AccessControlProblems.jpg",
    icon: KeyRound,
  },
  {
    title: "Safety Device Faults",
    description:
      "We can investigate issues with photocells, safety edges, emergency stops and other safety devices.",
    image: "/repair-service/SafetyDeviceFaults.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Motor & Automation Failures",
    description:
      "Faulty motors, control panels, limits and automation components can affect gate movement.",
    image: "/repair-service/Motor&AutomationFailures.jpg",
    icon: Settings2,
  },
  {
    title: "Gate Alignment Problems",
    description:
      "Misalignment can cause gates to catch, stick or fail to open and close correctly.",
    image: "/repair-service/GateAlignmentProblems.jpg",
    icon: MoveHorizontal,
  },
];

export default function CommonGateProblems() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-[720px]">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                What We Repair
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

              Common Gate Problems
              <span className="text-[#415A77]">
                {" "}We Repair
              </span>

            </h2>

          </div>

          <p className="max-w-[500px] text-sm leading-6 text-[#667085] lg:pb-1">
            From mechanical wear to electrical faults and automation failures,
            our engineers can diagnose a wide range of gate problems and
            recommend the right solution.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {repairProblems.map((problem, index) => {

            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="group overflow-hidden rounded-[26px] border border-[#E4E9EE] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,36,51,0.09)]"
              >

                {/* Image */}
                <div className="relative h-[210px] overflow-hidden bg-[#F8FAFC]">

                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#415A77] shadow-sm">
                    0{index + 1}
                  </div>

                </div>


                {/* Content */}
                <div className="p-5 sm:p-6">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-[17px] font-bold leading-5 text-[#182433]">
                        {problem.title}
                      </h3>

                      <div className="mt-2 h-px w-7 bg-[#415A77] transition-all duration-300 group-hover:w-12" />
                    </div>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#667085]">
                    {problem.description}
                  </p>

                </div>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}