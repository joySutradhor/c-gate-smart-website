import {
  Ruler,
  GitBranch,
  Layers3,
  Palette,
  Settings2,
  Building2,
  ShieldCheck,
  Activity,
} from "lucide-react";

const considerations = [
  {
    icon: Ruler,
    title: "Exact Dimensions",
    description:
      "The precise width and height of your entrance are considered when designing your gate.",
  },
  {
    icon: GitBranch,
    title: "Gate Configuration",
    description:
      "Single or double swing gates, sliding gates or cantilever systems.",
  },
  {
    icon: Layers3,
    title: "Materials",
    description:
      "Steel, aluminium or timber gate designs selected to suit your property.",
  },
  {
    icon: Palette,
    title: "Style & Finish",
    description:
      "Traditional, contemporary or individual designs to complement your property.",
  },
  {
    icon: Settings2,
    title: "Automation",
    description:
      "Above-ground or underground automation selected around the gate design.",
  },
  {
    icon: Building2,
    title: "Property Use",
    description:
      "Solutions for residential, commercial and industrial applications.",
  },
  {
    icon: ShieldCheck,
    title: "Access & Safety",
    description:
      "Intercoms, access control and safety equipment can be integrated.",
  },
  {
    icon: Activity,
    title: "Frequency of Operation",
    description:
      "Automation is selected according to how often the gates will be used.",
  },
];

export default function DesignedAroundYourProperty() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="mx-auto max-w-[760px] text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Designed Around Your Property
            </span>

            <span className="h-px w-8 bg-[#415A77]" />

          </div>


          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">

            Every Detail Has
            <span className="text-[#415A77]">
              {" "}A Purpose
            </span>

          </h2>


          <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-[#667085]">
            We consider the entrance, property, gate style, automation and
            how the system will be used before recommending the right solution.
          </p>

        </div>


        {/* GRID */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {considerations.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-[26px] border border-[#E4E9EE] bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(24,36,51,0.07)]"
              >

                {/* Number + Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition group-hover:bg-[#415A77] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-semibold text-[#C4CDD6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Content */}
                <h3 className="mt-6 text-base font-bold text-[#182433]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {item.description}
                </p>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}