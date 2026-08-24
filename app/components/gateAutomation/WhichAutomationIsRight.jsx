import {
  MoveHorizontal,
  Weight,
  Construction,
  RefreshCw,
  Home,
  Wind,
  ShieldCheck,
  KeyRound,
  Palette,
  Settings,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const factors = [
  {
    icon: MoveHorizontal,
    title: "Entrance width & space",
    description: "Available space around the entrance",
  },
  {
    icon: Weight,
    title: "Gate size & weight",
    description: "The dimensions and overall gate weight",
  },
  {
    icon: Construction,
    title: "Ground conditions",
    description: "Surface, slope and surrounding ground",
  },
  {
    icon: RefreshCw,
    title: "Frequency of use",
    description: "How often the gate will operate",
  },
  {
    icon: Home,
    title: "Property type",
    description: "Residential, commercial or industrial",
  },
  {
    icon: Wind,
    title: "Wind loading",
    description: "Exposure and wind pressure on the gate",
  },
  {
    icon: ShieldCheck,
    title: "Safety requirements",
    description: "Protection for people and vehicles",
  },
  {
    icon: KeyRound,
    title: "Access control",
    description: "Keypads, remotes and smart access",
  },
  {
    icon: Palette,
    title: "Appearance & design",
    description: "Gate style and visual requirements",
  },
  {
    icon: Settings,
    title: "Future servicing",
    description: "Maintenance and long-term support",
  },
];

export default function WhichAutomationIsRight() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#E4E9EE] bg-white shadow-[0_12px_40px_rgba(24,36,51,0.06)]">
          <div 
          // className="grid lg:grid-cols-[0.8fr_1.5fr]"
          >
            {/* Left Content */}
            {/* <div className="relative overflow-hidden bg-[#182433] px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
             
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.08]" />
              <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/[0.06]" />

              <div className="relative z-10">
              
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7EA4C8]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    Our Assessment
                  </span>
                </div>

                <h2 className="mt-7 max-w-md text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                  Which Gate Automation
                  <span className="block text-[#8DB1D2]">
                    Is Right for You?
                  </span>
                </h2>

         
                <div className="mt-6 h-px w-16 bg-[#7EA4C8]" />

          
                <p className="mt-6 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                  Choosing the right automation system depends on more than just
                  the type of gate. We assess your property and requirements
                  before recommending a suitable solution.
                </p>

             
                <div className="mt-10 flex items-start gap-3 border-t border-white/10 pt-6">
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.6}
                    className="mt-0.5 shrink-0 text-[#8DB1D2]"
                  />

                  <p className="text-xs leading-5 text-white/55">
                    Our recommendations are based on practical site
                    requirements, safety, usability and long-term reliability.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Right Content */}
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              {/* Header */}
              <div className="flex flex-col justify-between gap-3 border-b border-[#E4E9EE] pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
                    What We Consider
                  </p>

                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#182433] sm:text-4xl">
                    10 factors we assess
                  </h3>
                </div>

                <span className="text-xs font-medium text-[#98A2B3]">
                  Before recommending a system
                </span>
              </div>

              {/* Factors Grid */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {factors.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-2xl border border-[#E8EDF2] bg-[#FAFBFC] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9D7E4] hover:bg-white hover:shadow-[0_8px_24px_rgba(24,36,51,0.06)]"
                    >
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition-colors duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.6} />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold leading-5 text-[#182433]">
                            {item.title}
                          </h4>

                          <span className="text-[10px] font-medium text-[#B0B8C2]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-[#667085]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Hint */}
              <div className="mt-7 flex items-center justify-between rounded-2xl bg-[#F2F6F9] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#415A77]" />

                  <p className="text-xs font-medium text-[#475467] sm:text-sm">
                    Not sure which system suits your property?
                  </p>
                </div>

                <div className="flex items-center gap-1.5 rounded-lg  px-3 py-2 text-sm font-medium  transition-colors duration-300 bg-[#415A77] text-white ">
                  <Link href="/contact" className="flex items-center gap-1.5">
                    <p>Contact Us</p>
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.7}
                      className="shrink-0 "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
