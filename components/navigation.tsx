"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "founder", label: "About Dr. Medhanit" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handler = () => setIsMenuOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/40 bg-white/80 px-5 py-3 shadow-xl shadow-sky-100/40 backdrop-blur-xl transition duration-300 supports-[backdrop-filter]:bg-white/65">
        <Link href="#home" className="flex items-center gap-3" aria-label="Yemedhnat home">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce] shadow-inner shadow-sky-200/60">
            <svg
              aria-hidden
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
            >
              <path
                d="M18 32c-4-5.5-3.5-12 4-16 4-2.2 8.5.8 10 4.5 2-5.5 8-8 12-6 6 2.7 7.5 10 1.5 17l-13 14-13.5-13.5Z"
                stroke="#0072ce"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 34c2.5-5 8-6 12-2.5 4 3.5 3.5 9-1 12.5L32 52l-11-8c-5-3.5-5.5-9.5-1.5-12.5 4.5-3.5 10-.5 12.5 3Z"
                stroke="#003459"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="leading-tight">
            <span className="font-display text-lg text-[#003459]">Yemedhnat</span>
            <p className="text-xs uppercase tracking-[0.32em] text-[#0072ce]">Internal Medicine Clinic</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#003459]/70 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-colors duration-200 ${isActive ? "text-[#003459]" : "hover:text-[#003459]"}`}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-2 mx-auto h-0.5 w-7 rounded-full bg-[#0072ce]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full border border-[#0072ce]/20 px-4 py-2 text-sm font-semibold text-[#003459] transition hover:border-[#0072ce]/40 hover:bg-white/70"
            href="tel:+251911000000"
          >
            Call Now
          </a>
          <Link
            href="#contact"
            className="button-glow rounded-full bg-[#0072ce] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#005da7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072ce]"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0072ce]/20 bg-white text-[#003459] shadow-sm transition hover:border-[#0072ce]/35 hover:text-[#0072ce] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="absolute top-[84px] w-full max-w-6xl rounded-3xl border border-white/50 bg-white/90 p-6 shadow-2xl shadow-sky-100/60 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#003459]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-2xl px-4 py-3 transition ${isActive ? "bg-[#e8f1fa] text-[#003459]" : "hover:bg-[#f4ede4]/60"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-3">
              <a
                className="rounded-full border border-[#0072ce]/20 px-5 py-3 text-center text-sm font-semibold text-[#003459] transition hover:border-[#0072ce]/40 hover:bg-white"
                href="tel:+251911000000"
              >
                Call Now
              </a>
              <Link
                href="#contact"
                className="rounded-full bg-[#0072ce] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#005da7]"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
