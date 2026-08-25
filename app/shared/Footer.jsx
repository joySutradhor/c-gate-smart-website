"use client";

import { ArrowUpRight, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    label: "Bespoke Gates",
    href: "/bespoke-gates",
  },
  {
    label: "Gate Automation",
    href: "/gate-automation",
  },
  {
    label: "Gate Servicing",
    href: "/gate-servicing",
  },
  {
    label: "Repair Service",
    href: "/repair-service",
  },
  {
    label: "Intercom",
    href: "/intercom",
  },
  {
    label: "Gate refurbishment",
    href: "/gate-refurbishment",
  },
];

const quickLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/gate-gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export default function Footer() {
  const [showMore, setShowMore] = useState(false);
  return (
    <footer className="bg-[#182433] text-white">
      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10">
          {/* =====================================
              BRAND
          ====================================== */}

          <div className="max-w-[380px]">
            {/* Logo */}

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/gate-smart-footer-logo.png"
                alt="GateSmart"
                width={150}
                height={45}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Description - 14px */}

            <div className="mt-5 max-w-[350px] text-sm leading-6 text-[#AAB6C2]">
              <p className="font-medium text-base text-white/80">
                Gate Smart Branding & Trading Information
              </p>

              <p className="mt-3 ">
                The Gate Smart name, logo and associated branding are used for
                marketing and promotional purposes.
              </p>

              {showMore && (
                <>
                  <p className="mt-3">
                    Gate Smart may operate as a trading or marketing name, and
                    the legal name shown on quotations, invoices, contracts or
                    bank/payment details may therefore be different from the
                    Gate Smart brand name.
                  </p>

                  <p className="mt-3">
                    Where applicable, the legal entity or individual responsible
                    for the work will be clearly identified on your quotation or
                    invoice.
                  </p>

                  <p className="mt-3">
                    Please ensure that payments are made only to the bank or
                    payment details shown on an official quotation or invoice
                    issued to you.
                  </p>

                  <p className="mt-3">
                    If you are unsure about any payment details or the identity
                    of the business providing your services, please contact us
                    before making payment.
                  </p>
                </>
              )}

              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="mt-3 font-medium text-white underline underline-offset-4 transition hover:text-[#AAB6C2] cursor-pointer"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Social Icons */}

            {/* <div className="mt-6 flex items-center gap-2">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#AFC0D0] transition hover:bg-white/10 hover:text-white"
              >
                <Share2  size={16} />
              </a>


              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#AFC0D0] transition hover:bg-white/10 hover:text-white"
              >
                <Share2 size={16} />
              </a>

            </div> */}
          </div>

          {/* =====================================
              SERVICES
          ====================================== */}

          <div>
            {/* Small Label - 12px */}

            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D0]">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-[#C4CDD6] transition hover:text-white"
                  >
                    {service.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================
              QUICK LINKS
          ====================================== */}

          <div>
            {/* Small Label - 12px */}

            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D0]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#C4CDD6] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <div>
            {/* Small Label - 12px */}

            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D0]">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Phone */}

              <a
                href="tel:01494578656"
                className="group flex items-start gap-3"
              >
                <Phone size={16} className="mt-1 shrink-0 text-[#AFC0D0]" />

                <div>
                  <p className="text-xs text-[#8795A4]">Call us</p>

                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#AFC0D0]">
                    01494 578656
                  </p>
                </div>
              </a>

              {/* Email */}

              <a
                href="mailto:info@gatesmart.co.uk"
                className="group flex items-start gap-3"
              >
                <Mail size={16} className="mt-1 shrink-0 text-[#AFC0D0]" />

                <div>
                  <p className="text-xs text-[#8795A4]">Email us</p>

                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#AFC0D0]">
                    info@gatesmart.co.uk
                  </p>
                </div>
              </a>

              {/* Location */}

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-[#AFC0D0]" />

                <div>
                  <p className="text-xs text-[#8795A4]">Serving</p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    Local & surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CTA STRIP
        ========================================== */}

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-base font-semibold text-white">
              Ready to discuss your gate project?
            </p>

            <p className="mt-1 text-sm text-[#AAB6C2]">
              Speak to our team today.
            </p>
          </div>

          <a
            href="tel:01494578656"
            className="group inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
          >
            Call Us
            <span className="text-[#667085]">01494 578656</span>
            <ArrowUpRight
              size={15}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#8795A4]">
            © {new Date().getFullYear()} GateSmart. All rights reserved. Developed
            by{" "}
            <a
              href="https://resolveidea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#AFC0D2] transition hover:text-white"
            >
              Resolve Idea
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
