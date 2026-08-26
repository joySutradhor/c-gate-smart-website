import {
  Tag,
  Zap,
  GitBranch,
  Settings2,
  HelpCircle,
  CheckCircle2,
  Phone,
} from "lucide-react";

const information = [
  {
    icon: Tag,
    title: "Make & Model",
    description:
      "If known, let us know the manufacturer and model of your gate automation system.",
  },
  {
    icon: Zap,
    title: "Voltage",
    description:
      "The operating voltage can help our engineer understand which equipment may be required.",
  },
  {
    icon: GitBranch,
    title: "Gate Type",
    description:
      "Tell us whether you have a sliding gate, single swing gate or pair of swing gates.",
  },
  {
    icon: Settings2,
    title: "Motor Position",
    description:
      "Let us know whether the motors are above ground or installed underground.",
  },
];

export default function RepairVisitInformation() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* =====================================
              LEFT INTRO
          ====================================== */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Before Your Visit
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

              A Little Information
              <span className="text-[#415A77]">
                {" "}Helps Us Prepare.
              </span>

            </h2>

            <p className="mt-5 max-w-[520px] text-base leading-7 text-[#667085]">
              When booking a repair, we'll ask for a few details about your
              gate and automation system. This helps our office team and
              engineer understand what equipment may be needed for the visit.
            </p>


            {/* Reassurance */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#DCE5ED] bg-white p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                <HelpCircle size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#182433]">
                  Don't know the details?
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                  Don't worry. If you're unsure, our office staff and engineer
                  will help you identify the relevant information.
                </p>
              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT INFORMATION GRID
          ====================================== */}
          <div className="grid gap-3 sm:grid-cols-2">

            {information.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[26px] border border-[#E4E9EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CBD7E2] hover:shadow-[0_16px_40px_rgba(24,36,51,0.06)]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition group-hover:bg-[#415A77] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <span className="text-xs font-bold text-[#D5DDE5]">
                      0{index + 1}
                    </span>

                  </div>


                  <h3 className="mt-6 text-base font-bold text-[#182433]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#415A77]">

                    <CheckCircle2 size={14} />

                    Information requested

                  </div>

                </article>
              );
            })}

          </div>

        </div>


        {/* Bottom contact strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#E4E9EE] sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#182433]">
                Need help describing the problem?
              </p>

              <p className="mt-1 text-xs text-[#667085]">
                Our team can help before arranging the visit.
              </p>
            </div>

          </div>

          <a
            href="tel:01494578656"
            className="inline-flex items-center justify-center rounded-full border border-[#D5DEE7] px-5 py-3 text-sm font-semibold text-[#415A77] transition hover:border-[#415A77] hover:bg-[#EAF0F5]"
          >
            01494 578656
          </a>

        </div>

      </div>
    </section>
  );
}