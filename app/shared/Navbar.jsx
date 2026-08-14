"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";

const menuItems = [
  {
    title: "Gates",
    items: [
      {
        title: "Metal Gates",
        description: "Bespoke metal and wrought iron gates",
        href: "/metal-gates",
        image: "/h-nav-assets/Garden-Metal-Gate.avif",
      },
      {
        title: "Wooden Gates",
        description: "Beautiful timber gates designed to last",
        href: "/wooden-gates",
        image: "/h-nav-assets/Garden-Gates.webp",
      },
      {
        title: "Aluminium Gates",
        description: "Lightweight, strong and low maintenance",
        href: "/aluminium-gates",
        image: "/h-nav-assets/Aluminium-gate.jfif",
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        title: "Gate Automation",
        description: "Reliable electric gate automation",
        href: "/gate-automation",
        image: "/h-nav-assets/automation/GateAutomation.jpg",
      },
      {
        title: "Access Control",
        description: "Smart access and entry solutions",
        href: "/access-control",
        image: "/h-nav-assets/automation/GateAccessControl.jpg",
      },
      {
        title: "Remote Controls",
        description: "Convenient control for your automated gates",
        href: "/remote-controls",
        image: "/h-nav-assets/automation/RemoteControls.jfif",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const toggleDesktopMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const toggleMobileSubmenu = (title) => {
    setMobileSubmenu(mobileSubmenu === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <nav className="flex h-[78px] items-center justify-between">
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo/gate-smart.png"
              alt="GateSmart"
              width={150}
              height={45}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-8 lg:flex cursor-pointer">
            {/* Home */}
            <Link
              href="/"
              className="text-base font-bold text-gray-800 transition hover:text-gray-500"
            >
              Home
            </Link>

            {/* Mega Menus */}
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.title)}
              >
                <button
                  onClick={() => toggleDesktopMenu(menu.title)}
                  className="flex items-center gap-1.5 text-base font-bold text-gray-800 transition hover:text-gray-500 cursor-pointer"
                >
                  {menu.title}

                  <ChevronDown
                    size={16}
                    strokeWidth={1.8}
                    className={`transition-transform duration-200 ${
                      openMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ================= MEGA MENU ================= */}
                {openMenu === menu.title && (
                  <div
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute left-1/2 top-[48px] w-[760px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {menu.items.map((item) => (
                        <Link
                          href={item.href}
                          key={item.title}
                          className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:border-gray-200 hover:shadow-md"
                        >
                          {/* Image */}
                          <div className="relative h-[145px] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="250px"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <div className="mb-1 flex items-center justify-between">
                              <h3 className="text-[15px] font-semibold text-gray-950">
                                {item.title}
                              </h3>

                              <ArrowUpRight
                                size={16}
                                className="text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900"
                              />
                            </div>

                            <p className="text-[13px] leading-5 text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom link */}
                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <p className="text-sm text-gray-500">
                        Explore our complete range of gate solutions
                      </p>

                      <Link
                        href="/gates"
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-950 hover:underline"
                      >
                        View all
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Simple links */}
            <Link
              href="/gate-servicing"
              className="text-base font-bold text-gray-800 transition hover:text-gray-500"
            >
              Servicing
            </Link>

            <Link
              href="/about"
              className="text-base font-bold text-gray-800 transition hover:text-gray-500"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-base font-bold text-gray-800 transition hover:text-gray-500"
            >
              Contact
            </Link>
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+441494611111"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-black"
            >
              <Phone size={16} />
              01494 578656
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-2  rounded-xl bg-[#415A77] px-6 text-sm font-semibold transition   py-3  text-white  hover:bg-gray-800"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-900 border  border-gray-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-3 sm:px-8">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex border-b border-gray-100 py-4 text-[16px] font-medium text-gray-900"
            >
              Home
            </Link>

            {/* Mobile dropdowns */}
            {menuItems.map((menu) => (
              <div key={menu.title} className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileSubmenu(menu.title)}
                  className="flex w-full items-center justify-between py-4 text-left text-[16px] font-medium text-gray-900"
                >
                  {menu.title}

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileSubmenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileSubmenu === menu.title && (
                  <div className="pb-4">
                    {menu.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-4 rounded-xl p-2.5 transition hover:bg-gray-50"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-[58px] w-[72px] shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 line-clamp-2 text-xs leading-4 text-gray-500">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="ml-auto shrink-0 text-gray-400"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Normal mobile links */}
            <Link
              href="/gate-servicing"
              onClick={() => setMobileOpen(false)}
              className="flex border-b border-gray-100 py-4 text-[16px] font-medium text-gray-900"
            >
              Servicing
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex border-b border-gray-100 py-4 text-[16px] font-medium text-gray-900"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex py-4 text-[16px] font-medium text-gray-900"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="mt-4 grid gap-3">
              <a
                href="tel:+441494611111"
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-900"
              >
                <Phone size={16} />
                01494 611111
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-gray-950 text-sm font-semibold text-white"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
