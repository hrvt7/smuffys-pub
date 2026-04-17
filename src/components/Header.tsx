"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";

const nav = [
  { href: "#menu", label: "Menü" },
  { href: "#about", label: "Rólunk" },
  { href: "#hours", label: "Nyitvatartás" },
  { href: "#contact", label: "Kapcsolat" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight leading-none">
              <span className="text-black">Sm</span>
              <span
                className="brand-text-gradient"
                style={{ fontFamily: "var(--font-display)" }}
              >
                uffy&apos;s
              </span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 hidden sm:block font-semibold">
              Pub
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-zinc-700 hover:text-pink transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+36305252336"
              className="inline-flex items-center gap-2 brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink/20 hover:shadow-pink/40 transition-shadow"
            >
              <Phone className="w-4 h-4" />
              +36 30 525 2336
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-black"
            aria-label="Menü"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-zinc-100">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+36305252336"
                className="mt-2 inline-flex items-center justify-center gap-2 brand-gradient text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                +36 30 525 2336
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
