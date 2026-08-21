import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function GateAutomationCTA() {
  return (
    <section className="bg-[#F8FAFC] pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#182433] px-7 py-12 sm:px-10 lg:px-16 lg:py-14">
          {/* Decorative Element */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-8 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:flex-row sm:gap-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                Gate Automation
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need Help Choosing the Right Gate Automation?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
                Every property is different. We can help you choose a gate
                automation system based on your gate type, available space,
                usage and access requirements.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#F8FAFC]"
                >
                  Get Expert Advice
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={17} />
                  Contact Gate Smart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
