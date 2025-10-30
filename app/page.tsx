"use client";

import Link from "next/link";
import { useState, useEffect, type ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactNode;
};

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

type TeamMember = {
  name: string;
  title: string;
  specialization: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Preventive & Primary Care",
    description:
      "Thoughtful annual visits, screenings, and lifestyle guidance that keep you feeling your best from one season of life to the next.",
    highlights: [
      "Comprehensive physical examinations",
      "Preventive screenings & immunizations",
      "Personalized wellness roadmaps",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 3a5 5 0 0 0-5 5v2.5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5Z" />
        <path d="M12 15v2a4 4 0 0 0 8 0v-2" />
        <path d="M6 18h6" />
        <circle cx="18" cy="5" r="2" />
      </svg>
    ),
  },
  {
    title: "Chronic Disease Management",
    description:
      "Precise diagnostics and ongoing support for complex conditions such as diabetes, hypertension, heart and kidney disease.",
    highlights: [
      "Evidence-based treatment pathways",
      "Coordinated medication optimization",
      "Lifestyle coaching & monitoring",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
        <path d="M6.34 6.34 9.17 9.17" />
        <path d="M14.83 14.83 17.66 17.66" />
        <path d="M6.34 17.66 9.17 14.83" />
        <path d="M14.83 9.17 17.66 6.34" />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Modern on-site investigations that deliver clarity quickly, so treatment plans can be tailored to your precise needs.",
    highlights: [
      "Laboratory and imaging coordination",
      "State-of-the-art diagnostic equipment",
      "Rapid, compassionate follow-up",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" />
        <path d="m15 15-3-3V7" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    description:
      "Care that evolves with you, grounded in attentive listening, trusted relationships, and a focus on whole-person wellbeing.",
    highlights: [
      "Deep relationships built over time",
      "Collaborative goal setting",
      "Proactive health planning",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 20c4-2.5 7-5.5 7-9a5 5 0 0 0-9-3A5 5 0 0 0 5 11c0 3.5 3 6.5 7 9Z" />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Aster Bekele",
    role: "Patient since 2020",
    content:
      "Dr. Medhanit's thorough approach and genuine care transformed my health journey. She takes time to listen and explain everything clearly. I finally feel like I have a doctor who truly cares about my wellbeing.",
    rating: 5,
  },
  {
    name: "Solomon Tesfaye",
    role: "Patient since 2019",
    content:
      "After years of struggling with diabetes management, I found exceptional care at Yemedhnat. The personalized treatment plan and ongoing support have made all the difference in my life.",
    rating: 5,
  },
  {
    name: "Rahel Alemayehu",
    role: "Patient since 2021",
    content:
      "The clinic combines modern facilities with compassionate care. Dr. Medhanit's expertise and dedication are unmatched. I recommend this clinic to all my family and friends.",
    rating: 5,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Medhanit Aberra",
    title: "Founder & Lead Physician",
    specialization: "Internal Medicine Specialist",
    description:
      "With over 30 years of clinical excellence, Dr. Medhanit brings deep expertise in managing complex internal medicine cases with compassion and precision.",
  },
];

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "5000+", label: "Patients Treated" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Emergency Support" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
      {/* Background Elements */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-8rem] h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-9rem] right-[-6rem] h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 px-6 pt-4 transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg" : ""
          } sm:px-10`}
        >
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full bg-white/80 px-6 py-4 shadow-lg shadow-emerald-100/60 backdrop-blur-xl transition duration-300 hover:shadow-emerald-200/70 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7v10" />
                  <path d="M7 12h10" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight text-emerald-900">
                  Yemedhnat
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                  Internal Medicine Clinic
                </span>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
              <a
                className="transition hover:text-emerald-600"
                href="#about"
                aria-label="Navigate to About section"
              >
                About
              </a>
              <a
                className="transition hover:text-emerald-600"
                href="#services"
                aria-label="Navigate to Services section"
              >
                Services
              </a>
              <a
                className="transition hover:text-emerald-600"
                href="#testimonials"
                aria-label="Navigate to Testimonials section"
              >
                Testimonials
              </a>
              <a
                className="transition hover:text-emerald-600"
                href="#team"
                aria-label="Navigate to Team section"
              >
                Team
              </a>
              <a
                className="transition hover:text-emerald-600"
                href="#contact"
                aria-label="Navigate to Contact section"
              >
                Contact
              </a>
            </div>
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <a
                className="rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                href="tel:+251911000000"
                aria-label="Call the clinic"
              >
                Call us
              </a>
              <Link
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                href="#contact"
                aria-label="Book a visit"
              >
                Book a visit
              </Link>
            </div>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-3xl bg-white/95 shadow-2xl shadow-emerald-100 backdrop-blur-xl animate-fade-in md:hidden">
              <div className="flex flex-col gap-1 p-4">
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  href="#about"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  href="#services"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  href="#testimonials"
                  onClick={closeMobileMenu}
                >
                  Testimonials
                </a>
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  href="#team"
                  onClick={closeMobileMenu}
                >
                  Team
                </a>
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                  href="#contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          )}

          <div className="mx-auto mt-4 flex w-full max-w-7xl items-center gap-3 md:hidden">
            <a
              className="flex-1 rounded-full border border-emerald-200 bg-white/70 px-5 py-2 text-center text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
              href="tel:+251911000000"
            >
              Call us
            </a>
            <Link
              className="flex-1 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
              href="#contact"
            >
              Book a visit
            </Link>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-24 px-6 pb-24 pt-16 sm:px-10">
          {/* Hero Section */}
          <section
            id="about"
            className="grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]"
          >
            <div className="space-y-10 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-md shadow-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 4v16" />
                  <path d="M4 12h16" />
                </svg>
                Trusted Internal Medicine in Addis Ababa
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Personalized care,{" "}
                  <span className="gradient-text">
                    powered by clarity and compassion
                  </span>
                  .
                </h1>
                <p className="text-lg leading-8 text-slate-600">
                  Navigating your health journey deserves a trusted partner. At
                  Yemedhnat Internal Medicine Specialty Clinic, we listen
                  deeply, diagnose precisely, and guide you toward lasting
                  wellbeing with evidence-based care.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 hover:shadow-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                  href="#services"
                >
                  Explore our services
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-white/80 px-7 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-100 transition hover:border-emerald-200 hover:bg-white"
                  href="tel:+251911000000"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +251 911 000 000
                </a>
              </div>
              <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                {[
                  "Preventive care & screenings",
                  "Management of complex conditions",
                  "On-site diagnostics & follow-up",
                ].map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm shadow-emerald-100/60 backdrop-blur hover-lift"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
              <figure
                id="philosophy"
                className="rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-xl shadow-emerald-100/70 backdrop-blur hover-lift"
              >
                <blockquote className="text-lg italic text-slate-600">
                  "For me, medicine has always been about more than treating an
                  illness; it's about caring for the whole person. Listening is
                  the foundation upon which I've built my practice."
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" />
                      <path d="M5.2 19.4a7 7 0 0 1 13.6 0" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-800">
                      Dr. Medhanit Aberra
                    </p>
                    <p className="text-sm text-slate-500">
                      Founder • Internal Medicine Specialist
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="relative h-full min-h-[420px] rounded-[2.5rem] bg-white/60 p-6 shadow-2xl shadow-emerald-200/70 backdrop-blur-xl animate-float-slow">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 animate-soft-pulse bg-[url('https://images.unsplash.com/photo-1580281657521-3c90737caad3?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/35 via-slate-900/10 to-transparent" />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex w-fit items-center gap-3 self-end rounded-full bg-white/85 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-100/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M4 17a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  Accredited Care
                </div>
                <div className="relative mt-auto flex w-full max-w-sm flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-2xl shadow-emerald-200 backdrop-blur-xl">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    30+ Years of Expertise
                  </span>
                  <p className="text-base text-slate-600">
                    Dr. Medhanit Aberra blends decades of clinical experience
                    with modern diagnostics to craft individualized care plans
                    for every patient.
                  </p>
                  <div className="flex items-center gap-4 rounded-2xl bg-emerald-50/80 p-4 text-sm text-emerald-700">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-500 shadow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                        <path d="m2 17 10 5 10-5" />
                        <path d="m2 12 10 5 10-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-emerald-800">
                        Bole Bulbula, Addis Ababa
                      </p>
                      <p className="text-xs text-emerald-600">
                        Modern diagnostic tools within our clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 px-8 py-16 shadow-2xl shadow-emerald-200/50 sm:px-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-white sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-emerald-50 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="space-y-12">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Our Services
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive internal medicine{" "}
                <span className="gradient-text">designed around you</span>.
              </h2>
              <p className="text-base text-slate-600">
                From preventive care to long-term management of complex
                conditions, we bring together compassionate listening, advanced
                diagnostics, and tailored guidance at every step.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-emerald-100 bg-white/85 p-8 shadow-lg shadow-emerald-100/60 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-200/70 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200">
                    {service.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900 transition duration-300 group-hover:text-emerald-600">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <ul className="mt-auto space-y-2 text-sm text-slate-600">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 transition duration-300 group-hover:scale-125" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-3xl bg-gradient-to-t from-emerald-100/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="space-y-12">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Patient Testimonials
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                What our{" "}
                <span className="gradient-text">patients say</span>
              </h2>
              <p className="text-base text-slate-600">
                Don't just take our word for it. Hear from those who have
                experienced our compassionate care firsthand.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-emerald-50/80 p-8 shadow-2xl shadow-emerald-100 backdrop-blur-xl sm:p-12">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className={`transition-opacity duration-500 ${
                      index === activeTestimonial
                        ? "opacity-100"
                        : "hidden opacity-0"
                    }`}
                  >
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                      <div className="flex justify-center gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <svg
                              key={i}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-6 w-6 text-yellow-400"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          )
                        )}
                      </div>
                      <blockquote className="text-xl italic leading-relaxed text-slate-700 sm:text-2xl">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-emerald-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "w-8 bg-emerald-500"
                        : "w-2 bg-emerald-200 hover:bg-emerald-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="space-y-12">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Our Team
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Meet our{" "}
                <span className="gradient-text">expert physician</span>
              </h2>
              <p className="text-base text-slate-600">
                Dedicated professionals committed to providing exceptional care
                with compassion and expertise.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-1">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group mx-auto flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-100/60 backdrop-blur transition duration-300 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-200/70 sm:flex-row sm:p-12"
                >
                  <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl shadow-emerald-200/50 transition duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-24 w-24 text-white"
                    >
                      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" />
                      <path d="M5.2 19.4a7 7 0 0 1 13.6 0" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-emerald-600">
                        {member.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {member.specialization}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-slate-600">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {[
                        "Internal Medicine",
                        "Diabetes Care",
                        "Hypertension",
                        "Heart Disease",
                      ].map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-medium text-emerald-700"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-12">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Get in Touch
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Ready to <span className="gradient-text">start your journey</span> to
                better health?
              </h2>
              <p className="text-base text-slate-600">
                Schedule a consultation or reach out with any questions. We're
                here to help you every step of the way.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6 rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-100/60 backdrop-blur sm:p-10">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <p className="mt-1 text-slate-600">+251 911 000 000</p>
                      <p className="text-sm text-slate-500">
                        Mon-Fri: 8AM-6PM, Sat: 9AM-2PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 10 7 10-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="mt-1 text-slate-600">
                        info@yemedhnat.clinic
                      </p>
                      <p className="text-sm text-slate-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Location
                      </h4>
                      <p className="mt-1 text-slate-600">
                        Bole Bulbula, Addis Ababa
                      </p>
                      <p className="text-sm text-slate-500">Ethiopia</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Link
                    href="tel:+251911000000"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 hover:shadow-emerald-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                    </svg>
                    Call Now to Book
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/50 shadow-xl shadow-emerald-100/60">
                <div className="aspect-square w-full bg-gradient-to-br from-emerald-100 to-teal-100 sm:aspect-auto sm:h-full">
                  <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-emerald-200/50">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-12 w-12 text-emerald-600"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                      Visit Our Clinic
                    </h3>
                    <p className="mb-6 text-lg text-slate-600">
                      Bole Bulbula, Addis Ababa
                      <br />
                      Ethiopia
                    </p>
                    <p className="text-sm text-slate-500">
                      Convenient location with modern facilities and ample
                      parking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative border-t border-emerald-100 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M12 7v10" />
                      <path d="M7 12h10" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold tracking-tight text-emerald-900">
                      Yemedhnat
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                      Internal Medicine Clinic
                    </span>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm text-slate-600">
                  Providing compassionate, evidence-based internal medicine care
                  in Addis Ababa. Your trusted partner in health and wellness.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a
                      href="#about"
                      className="transition hover:text-emerald-600"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="transition hover:text-emerald-600"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="transition hover:text-emerald-600"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="transition hover:text-emerald-600"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition hover:text-emerald-600"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  Office Hours
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li className="pt-2 text-emerald-600">
                    Emergency support available 24/7
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-emerald-100 pt-8 text-center text-sm text-slate-500">
              <p>
                &copy; {new Date().getFullYear()} Yemedhnat Internal Medicine
                Specialty Clinic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
