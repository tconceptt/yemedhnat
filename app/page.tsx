"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  highlights: string[];
  icon: JSX.Element;
};

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "visit", label: "Contact" },
];

const services: Service[] = [
  {
    title: "Preventive Care",
    description:
      "Proactive screenings, annual wellness visits, and lifestyle coaching that keep you in front of emerging concerns.",
    highlights: [
      "Comprehensive physical examinations",
      "Personalized prevention roadmaps",
      "Vaccinations & screenings",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 2v6" />
        <path d="M9 5h6" />
        <path d="M4 12a8 8 0 0 1 16 0v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Chronic Condition Guidance",
    description:
      "Evidence-based management for diabetes, hypertension, heart and kidney disease with attentive follow up.",
    highlights: [
      "Medication optimization",
      "Continuous monitoring",
      "Collaborative care plans",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h6" />
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Modern laboratory and imaging coordination that delivers clarity quickly, all from our specialty clinic.",
    highlights: [
      "On-site diagnostic tools",
      "Rapid lab coordination",
      "Precise interpretation",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Lifelong Partnership",
    description:
      "A trusted relationship that evolves with you, centered on listening deeply and planning proactively together.",
    highlights: [
      "Whole-person focus",
      "Care navigation",
      "Long-term wellbeing",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 21c5-3.1 8-6.7 8-10.2A4.8 4.8 0 0 0 12 7a4.8 4.8 0 0 0-8 3.8C4 14.3 7 17.9 12 21Z" />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Medhanit sees the whole of me. Every visit feels like a conversation with someone who truly understands my journey.",
    name: "Rahel G.",
    detail: "Patient since 2021",
  },
  {
    quote:
      "The clinic guided me through managing hypertension with clarity and empathy. I always leave feeling calmer and empowered.",
    name: "Samuel T.",
    detail: "Patient since 2020",
  },
  {
    quote:
      "From the serene environment to the attentive follow-up, Yemedhnat delivers medicine that feels deeply human.",
    name: "Lulit M.",
    detail: "Patient since 2022",
  },
];

const contactHighlights = [
  {
    title: "Visit our clinic",
    detail: "Bole Bulbula, Addis Ababa",
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
        <path d="M12 21c-4.2-4.4-7-8.3-7-11.5a7 7 0 0 1 14 0c0 3.2-2.8 7.1-7 11.5Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Call us directly",
    detail: "+251 911 000 000",
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
        <path d="m22 16-5-1.5a3 3 0 0 0-3.2 1l-1 1.2a15 15 0 0 1-6.5-6.5l1.2-1a3 3 0 0 0 1-3.2L7 2" />
        <path d="M16 22a14 14 0 0 1-14-14" />
      </svg>
    ),
  },
  {
    title: "Clinic hours",
    detail: "Mon–Sat: 8:00 – 18:00",
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
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    ),
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    const currentRefs = sectionRefs.current;
    const observedElements = sections
      .map((section) => currentRefs[section.id])
      .filter((element): element is HTMLElement => Boolean(element));

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [mobileOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden text-[#0b2c4b]">
      <div className="pointer-events-none fixed inset-x-0 top-[-30rem] -z-10 flex justify-center opacity-80">
        <div className="h-[50rem] w-[60rem] rounded-full bg-[#cfe3f6] blur-3xl" />
      </div>
      <div className="pointer-events-none fixed inset-y-0 left-[-20rem] -z-10 hidden lg:block">
        <div className="h-[36rem] w-[36rem] rounded-full bg-[#f4ede4] blur-3xl" />
      </div>
      <div className="pointer-events-none fixed bottom-[-24rem] right-[-12rem] -z-10">
        <div className="h-[38rem] w-[38rem] rounded-full bg-[#e8f1fa] blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-6 sm:px-8">
        <nav className="flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-white/60 bg-white/70 px-6 py-4 shadow-lg shadow-[#dbe8f6] backdrop-blur-xl transition duration-300">
          <Link
            href="#home"
            className="flex items-center gap-3"
            onClick={() => setActiveSection("home")}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0072ce] text-white shadow-md shadow-[#9fc7eb] animate-gentle-glow">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M16 28c6-3.6 10-8.4 10-13.2A6.8 6.8 0 0 0 16 8a6.8 6.8 0 0 0-10 6.8C6 19.6 10 24.4 16 28Z" />
                <path d="M11 12c0-2.2 2.2-4 5-4s5 1.8 5 4" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-medium text-[#003459]">Yemedhnat</span>
              <span className="text-xs uppercase tracking-[0.32em] text-[#4c8dc6]">
                Internal Medicine Clinic
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8d9eb] bg-white text-[#0072ce] shadow-sm transition hover:border-[#9fc7eb] hover:text-[#004a8f] lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
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
          </button>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#38658a] lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition duration-300 hover:text-[#0072ce] ${
                  activeSection === section.id ? "text-[#0072ce]" : ""
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href="tel:+251911000000"
              className="rounded-full border border-[#c8d9eb] px-5 py-2 text-sm font-semibold text-[#003459] transition hover:border-[#9fc7eb] hover:bg-white/80"
            >
              Call Now
            </a>
            <Link
              href="#visit"
              className="rounded-full bg-[#0072ce] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#9fc7eb]/70 transition hover:bg-[#005fa8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072ce]"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
        {mobileOpen ? (
          <div className="absolute inset-x-6 top-[5.5rem] z-40 rounded-3xl border border-white/60 bg-white/95 p-6 text-base shadow-2xl shadow-[#cbdff4] backdrop-blur">
            <div className="flex flex-col gap-5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center justify-between text-[#38658a] transition hover:text-[#0072ce]"
                  onClick={() => setMobileOpen(false)}
                >
                  {section.label}
                  <span className={`h-2 w-2 rounded-full ${activeSection === section.id ? "bg-[#0072ce]" : "bg-[#c8d9eb]"}`} />
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="#visit"
                  className="inline-flex items-center justify-center rounded-full bg-[#0072ce] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#9fc7eb]/60 transition hover:bg-[#005fa8]"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+251911000000"
                  className="inline-flex items-center justify-center rounded-full border border-[#c8d9eb] px-5 py-2 text-sm font-semibold text-[#003459] transition hover:border-[#9fc7eb] hover:bg-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-32 pt-40 sm:px-10">
        <section
          id="home"
          ref={(element) => {
            sectionRefs.current.home = element;
          }}
          className="relative grid gap-16 rounded-[3rem] bg-gradient-to-br from-[#e8f1fa] via-white to-[#f4ede4] px-10 pb-14 pt-16 shadow-2xl shadow-[#d9e6f5] lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1fa]/95 via-white/85 to-[#f4ede4]/90" />
            <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-10">
            <span className="inline-flex max-w-max items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#4c8dc6] shadow-md shadow-white/60 animate-fade-in">
              Where Care Meets Clarity
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight text-[#0b2c4b] sm:text-5xl lg:text-6xl">
                Partnering with you for health that feels personal, calm, and deeply informed.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#3f627f]">
                Yemedhnat Internal Medicine Specialty Clinic is a sanctuary for compassionate diagnostics and ongoing support. We blend modern insight with attentive listening to chart a clear, confident path for every stage of life.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[#0072ce] px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-[#9fc7eb]/70 transition hover:-translate-y-0.5 hover:bg-[#005fa8]"
              >
                Explore Services
              </Link>
              <a
                href="tel:+251911000000"
                className="inline-flex items-center justify-center rounded-full border border-[#c8d9eb] bg-white/80 px-8 py-3 text-sm font-semibold text-[#003459] shadow-md shadow-white/60 transition hover:border-[#9fc7eb] hover:bg-white"
              >
                Call +251 911 000 000
              </a>
            </div>
            <div className="grid gap-4 text-sm text-[#3f627f] sm:grid-cols-3">
              {["Preventive care & screenings", "Management of complex conditions", "On-site diagnostics & follow-up"].map(
                (highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-white/75 p-4 shadow-sm shadow-[#dbe8f6]"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
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
                    <span className="font-medium">{highlight}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative flex flex-col justify-end gap-8">
            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(12,55,88,0.18)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003459]/65 via-[#0072ce]/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white">
                <div className="flex w-fit items-center gap-3 self-end rounded-full bg-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em]">
                  Trusted Expertise
                </div>
                <div className="space-y-4">
                  <p className="text-lg leading-7">
                    “Listening deeply is where healing begins.”
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12Z" />
                        <path d="M5 20c.4-3.3 3.3-6 7-6s6.6 2.7 7 6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-base font-medium">Dr. Medhanit Aberra</p>
                      <p className="text-xs uppercase tracking-[0.32em] text-white/70">
                        Founder & Internal Medicine Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg shadow-[#dbe8f6] backdrop-blur">
              <p className="text-sm uppercase tracking-[0.32em] text-[#4c8dc6]">Our Promise</p>
              <p className="mt-3 text-base leading-7 text-[#3f627f]">
                Modern diagnostics and compassionate conversations come together in one calming space. Every treatment plan is crafted around your story, your goals, and your pace.
              </p>
            </div>
          </div>
        </section>

        <div className="relative -mt-24 w-full">
          <svg
            viewBox="0 0 1440 140"
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-full text-[#e8f1fa]"
          >
            <path
              fill="currentColor"
              d="M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,186.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        <section
          id="about"
          ref={(element) => {
            sectionRefs.current.about = element;
          }}
          className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f4ede4] p-8 shadow-lg shadow-[#e0d3c8]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4ede4]/95 via-[#fafafa]/90 to-white/80" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl text-[#0b2c4b] sm:text-4xl">Medicine guided by science, practiced with heart.</h2>
                <p className="text-base leading-7 text-[#3f627f]">
                  Founded by Dr. Medhanit Aberra, Yemedhnat Internal Medicine Specialty Clinic has provided attentive internal medicine care to Addis Ababa for over three years. We treat each visit as a chance to listen deeply, collaborate, and illuminate the next best step for your wellbeing.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-[#3f627f]">
                {[
                  "Founded in 2021 in Bole Bulbula",
                  "30+ years of medical expertise",
                  "Integrated diagnostics within our clinic",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 text-[#0072ce]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="m5 12 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-10">
            <article className="rounded-[2.5rem] border border-[#d7e5f4] bg-white/80 p-8 shadow-lg shadow-[#dbe8f6] backdrop-blur">
              <h3 className="text-2xl text-[#0b2c4b]">Our philosophy</h3>
              <p className="mt-4 text-base leading-7 text-[#3f627f]">
                Every patient deserves a clear roadmap. We take the time to understand your story, align our diagnostics with your goals, and share every insight in plain language so you feel empowered, never overwhelmed.
              </p>
            </article>
            <article className="rounded-[2.5rem] border border-[#f1d7c6] bg-[#fff7f0]/90 p-8 shadow-lg shadow-[#f3dfd0]">
              <h3 className="text-2xl text-[#0b2c4b]">Modern tools, calming space</h3>
              <p className="mt-4 text-base leading-7 text-[#4f718d]">
                Our clinic combines state-of-the-art diagnostic technology with serene, human-centered design. From the moment you step inside, the environment is designed to steady your breath and clarify your next step.
              </p>
            </article>
          </div>
        </section>

        <section
          id="services"
          ref={(element) => {
            sectionRefs.current.services = element;
          }}
          className="space-y-12"
        >
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e8f1fa] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#4c8dc6]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl">
              Clarity, compassion, and continuity at every stage of care.
            </h2>
            <p className="text-base leading-7 text-[#3f627f]">
              From proactive prevention to chronic condition management, our team integrates precise diagnostics, evidence-based treatment, and unwavering partnership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex h-full flex-col gap-6 rounded-[2.2rem] border border-[#d7e5f4] bg-white/85 p-8 text-left shadow-xl shadow-[#dbe8f6] transition duration-300 hover:-translate-y-2 hover:shadow-[#b6d0ea]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0072ce]/10 text-[#0072ce] transition duration-300 group-hover:bg-[#0072ce] group-hover:text-white">
                  {service.icon}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl text-[#0b2c4b]">{service.title}</h3>
                  <p className="text-sm leading-6 text-[#3f627f]">{service.description}</p>
                </div>
                <ul className="mt-auto space-y-2 text-sm text-[#3f627f]">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0072ce]/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-x-4 bottom-4 h-1/2 rounded-[2rem] bg-gradient-to-t from-[#e8f1fa]/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          ref={(element) => {
            sectionRefs.current.testimonials = element;
          }}
          className="space-y-12"
        >
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#f4ede4] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#b48a6a]">
              What Our Patients Say
            </span>
            <h2 className="text-3xl sm:text-4xl">Stories of trust, calm, and clarity.</h2>
            <p className="text-base leading-7 text-[#3f627f]">
              Gentle feedback from the people who inspire our work every day.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-[#d7e5f4] bg-white/85 p-8 shadow-lg shadow-[#dbe8f6] transition duration-300 hover:-translate-y-1.5 hover:shadow-[#c6daf0]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M7.5 6h9" />
                      <path d="M7 12h6" />
                      <path d="M7.5 18H10" />
                    </svg>
                  </span>
                  <div className="flex flex-col text-sm text-[#3f627f]">
                    <span className="font-semibold text-[#0b2c4b]">{testimonial.name}</span>
                    <span>{testimonial.detail}</span>
                  </div>
                </div>
                <blockquote className="text-base leading-7 text-[#3f627f]">
                  “{testimonial.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="visit"
          ref={(element) => {
            sectionRefs.current.visit = element;
          }}
          className="grid gap-12 rounded-[3rem] bg-gradient-to-br from-[#e8f1fa] via-white to-[#f4ede4] p-10 shadow-2xl shadow-[#dbe8f6] lg:grid-cols-[0.9fr,1.1fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#4c8dc6]">
              Visit Us
            </span>
            <h2 className="text-3xl sm:text-4xl">Schedule your visit today.</h2>
            <p className="text-base leading-7 text-[#3f627f]">
              We are ready to welcome you with calm surroundings, advanced diagnostics, and a care team focused on clarity and trust. Reach out to plan your visit or schedule a same-week appointment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl bg-white/80 p-5 shadow-md shadow-[#dbe8f6]"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0b2c4b]">{item.title}</p>
                    <p className="text-sm text-[#3f627f]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:care@yemedhnatclinic.com"
                className="inline-flex items-center justify-center rounded-full bg-[#0072ce] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9fc7eb]/70 transition hover:-translate-y-0.5 hover:bg-[#005fa8]"
              >
                Email Us
              </a>
              <a
                href="tel:+251911000000"
                className="inline-flex items-center justify-center rounded-full border border-[#c8d9eb] bg-white/80 px-7 py-3 text-sm font-semibold text-[#003459] shadow-md shadow-white/60 transition hover:border-[#9fc7eb] hover:bg-white"
              >
                Call +251 911 000 000
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 shadow-xl shadow-[#dbe8f6]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-[#e8f1fa]/80 to-transparent" />
            <iframe
              title="Yemedhnat Internal Medicine Specialty Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6077871151813!2d38.81355651538025!3d8.985255492081319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f658f624eb%3A0xd2fa2a3434a6c0de!2sBole%20Bulbula%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              className="relative h-full min-h-[320px] w-full rounded-[2.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="relative mt-24 bg-[#003459] py-16 text-[#e8f1fa]">
        <div className="absolute -top-16 left-0 right-0">
          <svg
            viewBox="0 0 1440 220"
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-full text-[#003459]"
          >
            <path
              fill="currentColor"
              d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,149.3C560,139,640,85,720,90.7C800,96,880,160,960,176C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
          </svg>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <path d="M16 28c6-3.6 10-8.4 10-13.2A6.8 6.8 0 0 0 16 8a6.8 6.8 0 0 0-10 6.8C6 19.6 10 24.4 16 28Z" />
                  <path d="M11 12c0-2.2 2.2-4 5-4s5 1.8 5 4" />
                </svg>
              </span>
              <div>
                <p className="text-lg font-medium text-white">Yemedhnat Internal Medicine Clinic</p>
                <p className="text-sm text-[#9fc7eb]">
                  Medicine guided by science, practiced with heart.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9fc7eb]">
              <a href="tel:+251911000000" className="transition hover:text-white">
                +251 911 000 000
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-[#9fc7eb] sm:inline-block" />
              <a href="mailto:care@yemedhnatclinic.com" className="transition hover:text-white">
                care@yemedhnatclinic.com
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-[#9fc7eb] sm:inline-block" />
              <span>Bole Bulbula, Addis Ababa</span>
            </div>
            <Link
              href="#visit"
              className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-white/25"
            >
              Book Appointment
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm text-[#9fc7eb] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Yemedhnat Internal Medicine Specialty Clinic. All rights reserved.</p>
            <p className="italic text-white/70">“Medicine guided by science, practiced with heart.”</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
