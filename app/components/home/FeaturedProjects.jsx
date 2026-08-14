"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Modern Automated Driveway",
    category: "Gate Automation",
    image:
      "/h-gate-soluations/ModernAutomatedDriveway.jpg",
    href: "/projects/modern-automated-driveway",
  },
  {
    title: "Bespoke Entrance Gates",
    category: "Bespoke Gates",
    image:
      "/h-gate-soluations/bespoke-gate.avif",
    href: "/projects/bespoke-entrance-gates",
  },
  {
    title: "Contemporary Property",
    category: "Aluminium Gates",
    image:
      "/h-gate-soluations/aluminium-driveway.jpg",
    href: "/projects/contemporary-property",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#F8FAFC]">

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-[680px]">

            {/* Small Label - 12px */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
                Our Work
              </span>

            </div>


            {/* Section Heading
                Mobile: 30px
                Desktop: 36px
            */}

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

              Gates That Make an

              <span className="text-[#415A77]">
                {" "}Entrance.
              </span>

            </h2>


            {/* Normal Description - 16px */}

            <p className="mt-4 max-w-[620px] text-base leading-7 text-[#667085]">

              Take a look at some of our recent projects and see how
              thoughtful design, quality materials and expert
              installation come together.

            </p>

          </div>


          {/* View Projects */}

          <Link
            href="/projects"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-[#415A77]"
          >

            View all projects

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />

          </Link>

        </div>


        {/* =========================================
            PROJECT GRID
        ========================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">

          {/* =====================================
              FEATURED PROJECT
          ====================================== */}

          <Link
            href={projects[0].href}
            className="group relative min-h-[480px] overflow-hidden rounded-[24px] sm:min-h-[560px]"
          >

            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />


            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-[#101820]/10 to-transparent" />


            {/* Content */}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

              {/* Category - 12px */}

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8E3EC]">
                {projects[0].category}
              </span>


              {/* Title */}

              <h3 className="mt-2 max-w-[600px] text-[28px] font-bold leading-tight tracking-[-0.8px] text-white sm:text-[32px]">
                {projects[0].title}
              </h3>


              {/* CTA */}

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">

                View project

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">

                  <ArrowUpRight size={15} />

                </div>

              </div>

            </div>

          </Link>


          {/* =====================================
              SMALL PROJECTS
          ====================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {projects.slice(1).map((project) => (

              <Link
                key={project.title}
                href={project.href}
                className="group relative min-h-[270px] overflow-hidden rounded-[24px] sm:min-h-[300px] lg:min-h-0"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />


                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/75 via-transparent to-transparent" />


                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  {/* Category - 12px */}

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8E3EC]">
                    {project.category}
                  </span>


                  {/* Card Title - 16px */}

                  <h3 className="mt-1.5 text-base font-bold text-white">
                    {project.title}
                  </h3>


                  {/* Link - 14px */}

                  <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-white">

                    View project

                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E4E9EE] bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <p className="max-w-[650px] text-base leading-7 text-[#667085]">

            Have a property in mind? Let's create a gate solution
            that's made specifically for you.

          </p>


          <a
            href="tel:01494578656"
            className="inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-xl bg-[#415A77] px-5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
          >

            Call Us

            <ArrowRight size={15} />

          </a>

        </div>

      </div>

    </section>
  );
}