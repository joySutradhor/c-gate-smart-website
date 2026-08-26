import {
  Ruler,
  MoveHorizontal,
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
    title: "Exact Entrance Dimensions",
    text: "Designed around the precise width, height and layout of your entrance.",
  },
  {
    icon: MoveHorizontal,
    title: "Gate Configuration",
    text: "Single or double swing, sliding or cantilever systems.",
  },
  {
    icon: Layers3,
    title: "Gate Materials",
    text: "Steel, aluminium or timber designs to suit your property.",
  },
  {
    icon: Palette,
    title: "Style & Finish",
    text: "Traditional, contemporary or completely individual designs.",
  },
  {
    icon: Settings2,
    title: "Automation Type",
    text: "Above-ground or underground automation depending on the gate.",
  },
  {
    icon: Building2,
    title: "Property Use",
    text: "Solutions designed for residential, commercial or industrial entrances.",
  },
  {
    icon: ShieldCheck,
    title: "Access & Security",
    text: "Intercoms, access control and safety equipment can be integrated.",
  },
  {
    icon: Activity,
    title: "Frequency of Operation",
    text: "Automation is selected around how frequently your gates will operate.",
  },
];

export default function DesignedAroundProperty() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Designed Around Your Property
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
              Bespoke Means
              <span className="text-[#415A77]">
                {" "}Made For You
              </span>
            </h2>

          </div>


          <div className="max-w-[650px] lg:ml-auto">

            <p className="text-base leading-7 text-[#667085]">
              A bespoke automated gate isn't an off-the-shelf product.
              It is designed and manufactured around your entrance,
              property and individual requirements.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#8795A4]">
              We consider everything from the dimensions and style of your
              entrance to the automation, access control and frequency of use.
            </p>

          </div>

        </div>


        {/* SPECIFICATION GRID */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {considerations.map((item) => {

            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-[24px] border border-[#E2E8ED] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#CBD7E1] hover:shadow-[0_14px_35px_rgba(24,36,51,0.07)]"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#182433]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085]">
                  {item.text}
                </p>

              </article>
            );

          })}

        </div>


        {/* Bottom Statement */}
        <div className="mt-5 rounded-[24px] border border-[#DCE5EC] bg-white px-6 py-5 sm:flex sm:items-center sm:justify-between">

          <div>

            <p className="text-sm font-bold text-[#182433]">
              One entrance. One considered solution.
            </p>

            <p className="mt-1 text-xs leading-5 text-[#667085]">
              Every element is selected to work together as one complete gate system.
            </p>

          </div>

          <span className="mt-4 inline-flex rounded-full bg-[#EAF0F5] px-4 py-2 text-xs font-semibold text-[#415A77] sm:mt-0">
            Fully Bespoke
          </span>

        </div>

      </div>
    </section>
  );
}