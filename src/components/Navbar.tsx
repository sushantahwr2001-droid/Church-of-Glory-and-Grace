"use client";

import { navItems } from "@/data/site";
import { useEffect, useState } from "react";
import { FaBars, FaHandHoldingDollar, FaXmark } from "react-icons/fa6";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        isScrolled || isOpen
          ? "border-b border-[#ffd78a]/[0.13] bg-[#120d16]/[0.92] shadow-[0_8px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/[0.55] bg-gold/[0.14] text-sm font-semibold text-gold-soft shadow-[0_0_35px_rgba(217,162,58,0.18)] sm:h-11 sm:w-11 sm:text-lg">
            CG
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap text-[13px] font-bold text-cream min-[380px]:text-sm sm:text-lg">
              Church of Glory and Grace
            </span>
            <span className="block whitespace-nowrap text-[10px] font-medium tracking-[0.06em] text-gold-soft/[0.88] sm:text-xs">
              Faith. Hope. Love.
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/[0.78] transition hover:text-gold-soft focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#201404] shadow-glow transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft"
          >
            <FaHandHoldingDollar aria-hidden="true" />
            Donate
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] text-cream transition hover:border-gold hover:text-gold lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          title={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-[#ffd78a]/[0.12] bg-[#120d16]/[0.98] px-5 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[34rem] pb-6" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 pt-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-[8px] px-4 py-3 text-base font-medium text-cream/[0.86] transition hover:bg-white/[0.07] hover:text-gold-soft focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={closeMenu}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#201404] transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft"
          >
            <FaHandHoldingDollar aria-hidden="true" />
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}
