import Link from "next/link";
import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactNode;
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-8rem] h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-9rem] right-[-6rem] h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-6 pt-8 sm:px-10">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-full bg-white/80 px-6 py-4 shadow-lg shadow-emerald-100/60 backdrop-blur-xl transition duration-300 hover:shadow-emerald-200/70 lg:px-8">
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
                <span className="text-lg font-semibold tracking-tight text-emerald-900">Yemedhnat</span>
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                  Internal Medicine Clinic
                </span>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
              <a className="transition hover:text-emerald-600" href="#about">
                About
              </a>
              <a className="transition hover:text-emerald-600" href="#services">
                Services
              </a>
              <a className="transition hover:text-emerald-600" href="#philosophy">
                Philosophy
              </a>
            </div>
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <a
                className="rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                href="tel:+251911000000"
              >
                Call us
              </a>
              <Link
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                href="#services"
              >
                Book a visit
              </Link>
            </div>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 md:hidden"
              aria-label="Open navigation menu"
              type="button"
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
          </nav>
          <div className="mx-auto mt-4 flex w-full max-w-6xl items-center gap-3 md:hidden">
            <a
              className="flex-1 rounded-full border border-emerald-200 bg-white/70 px-5 py-2 text-center text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
              href="tel:+251911000000"
            >
              Call us
            </a>
            <Link
              className="flex-1 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
              href="#services"
            >
              Book a visit
            </Link>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-24 pt-16 sm:px-10">
          <section id="about" className="grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
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
                  Personalized care, powered by clarity and compassion.
                </h1>
                <p className="text-lg leading-8 text-slate-600">
                  Navigating your health journey deserves a trusted partner. At Yemedhnat Internal Medicine Specialty Clinic, we listen deeply, diagnose precisely, and guide you toward lasting wellbeing with evidence-based care.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                  href="#services"
                >
                  Explore our services
                </Link>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-white/80 px-7 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-100 transition hover:border-emerald-200 hover:bg-white"
                  href="tel:+251911000000"
                >
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
                    className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm shadow-emerald-100/60 backdrop-blur"
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
                    <span className="font-medium text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              <figure
                id="philosophy"
                className="rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-xl shadow-emerald-100/70 backdrop-blur"
              >
                <blockquote className="text-lg italic text-slate-600">
                  “For me, medicine has always been about more than treating an illness; it's about caring for the whole person. Listening is the foundation upon which I've built my practice.”
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
                    <p className="text-base font-semibold text-slate-800">Dr. Medhanit Aberra</p>
                    <p className="text-sm text-slate-500">Founder • Internal Medicine Specialist</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="relative h-full min-h-[420px] rounded-[2.5rem] bg-white/60 p-6 shadow-2xl shadow-emerald-200/70 backdrop-blur-xl animate-float-slow">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                <div
                  className="absolute inset-0 animate-soft-pulse bg-[url('https://images.unsplash.com/photo-1580281657521-3c90737caad3?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center"
                />
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
                    Dr. Medhanit Aberra blends decades of clinical experience with modern diagnostics to craft individualized care plans for every patient.
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
                        <path d="M2 8h20" />
                        <path d="M6 4h12" />
                        <path d="M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                        <path d="M10 12h4" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-emerald-800">Bole Bulbula, Addis Ababa</p>
                      <p className="text-xs text-emerald-600">Modern diagnostic tools within our clinic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="space-y-12">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Our Services
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive internal medicine designed around you.
              </h2>
              <p className="text-base text-slate-600">
                From preventive care to long-term management of complex conditions, we bring together compassionate listening, advanced diagnostics, and tailored guidance at every step.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-emerald-100 bg-white/85 p-8 shadow-lg shadow-emerald-100/60 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-emerald-200/70"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    {service.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                  <ul className="mt-auto space-y-2 text-sm text-slate-600">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-3xl bg-gradient-to-t from-emerald-100/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
