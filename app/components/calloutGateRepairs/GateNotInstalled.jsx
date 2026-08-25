import { CheckCircle2, Wrench } from "lucide-react";

export default function GateNotInstalled() {
  return (
    <section className="bg-[#182433]">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#AFC0D2]">
              <Wrench size={21} />
            </div>

            <h2 className="mt-6 text-[30px] font-bold leading-tight tracking-[-1px] text-white sm:text-[38px]">
              Gate Not Installed
              <span className="block text-[#AFC0D2]">
                By Us?
              </span>
            </h2>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">
              Not a problem.
            </p>

            <p className="mt-4 text-base leading-8 text-white/65">
              We can work on gates and automation systems installed by other
              companies. Our engineers can diagnose faults and assess the
              equipment to determine the appropriate repair.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <CheckCircle2
                size={19}
                className="mt-1 shrink-0 text-[#AFC0D2]"
              />

              <p className="text-sm leading-6 text-white/65">
                Our engineers can assess a wide range of gate automation
                systems and help identify the cause of the problem.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}