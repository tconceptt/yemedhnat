import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

type Service = {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactElement;
};

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#visit" },
];

const services: Service[] = [
  {
    title: "Preventive Care",
    description:
      "Annual physicals, screenings, and wellness coaching that keep you ahead of potential concerns.",
    highlights: [
      "Routine exams & lab work",
      "Immunizations & travel prep",
      "Lifestyle and nutrition guidance",
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
        <path d="M12 22s8-4.5 8-11a8 8 0 0 0-16 0c0 6.5 8 11 8 11Z" />
        <path d="M12 11v5" />
        <path d="M9.5 13H14" />
      </svg>
    ),
  },
  {
    title: "Chronic Condition Management",
    description:
      "Structured support for diabetes, hypertension, heart and kidney disease, and other long-term conditions.",
    highlights: [
      "Evidence-based treatment pathways",
      "Medication coordination & monitoring",
      "Shared goal setting with you and your family",
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 22l8.84-8.61a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description:
      "On-site access to modern tools for timely answers, interpreted with clarity and empathy.",
    highlights: [
      "Lab coordination & imaging",
      "Specialist referrals when needed",
      "Fast, clear communication of results",
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
        <path d="M3 4h18" />
        <path d="M8 4v16a3 3 0 1 0 6 0V4" />
        <path d="M5 8h14" />
      </svg>
    ),
  },
  {
    title: "Health Navigation",
    description:
      "We partner with you through every step, coordinating care and clarifying decisions so you feel confident.",
    highlights: [
      "Personalized care roadmaps",
      "Holistic support for every life stage",
      "Direct access to your care team",
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
        <path d="M12 22s8-4 8-10-3.5-8-8-8-8 2-8 8 8 10 8 10Z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Medhanit took the time to understand my story. I left with a clear plan and the assurance that I was in caring hands.",
    name: "Lulit A.",
    detail: "Patient for 3 years",
  },
  {
    quote:
      "The clinic blends modern diagnostics with the warmth of a family doctor. Every visit feels purposeful and calm.",
    name: "Samuel T.",
    detail: "Hypertension management",
  },
  {
    quote:
      "I appreciate how the team explains each step. They make complex conditions feel manageable and hopeful.",
    name: "Hanna G.",
    detail: "Diabetes care partner",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#fafafa] text-[#10243b]">
      <div className="pointer-events-none absolute -top-56 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#c6dcf5]/60 blur-3xl" />
      <div className="pointer-events-none absolute top-[38%] left-[-12rem] h-96 w-96 rounded-full bg-[#d8e2dc]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#f4ede4]/70 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col" id="hero">
        <header className="sticky top-6 z-40 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between rounded-full border border-white/60 bg-white/80 px-5 py-4 shadow-xl shadow-[#d6e6f8] backdrop-blur-xl transition duration-300">
            <div className="flex items-center gap-3 animate-logo-reveal">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#0072ce]/10">
                <Image
                  src="/logo.svg"
                  alt="Yemedhnat logo"
                  fill
                  priority
                  sizes="44px"
                  className="object-contain p-2"
                />
              </span>
              <div className="leading-tight">
                <span className="font-serif text-lg text-[#003459]">Yemedhnat</span>
                <p className="text-xs uppercase tracking-[0.35em] text-[#4f6c8c]">Internal Medicine Clinic</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-[#516074] md:flex">
              {navigation.map((item) => (
                <a key={item.label} className="transition hover:text-[#0072ce]" href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="tel:+251911000000"
                className="rounded-full border border-[#c6dcf5] bg-white/70 px-5 py-2 text-sm font-semibold text-[#003459] transition hover:border-[#0072ce] hover:bg-white"
              >
                Call Now
              </a>
              <Link
                href="#visit"
                className="rounded-full bg-[#0072ce] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#8ab8e6] transition hover:bg-[#005da8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072ce]"
              >
                Book Appointment
              </Link>
            </div>
            <Link
              href="#visit"
              className="sm:hidden rounded-full bg-[#0072ce] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-[#a4c6ec]"
            >
              Book
            </Link>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <section
            id="about"
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#e8f1fa] via-white to-white px-6 py-16 scroll-mt-32 sm:px-10 sm:py-20"
          >
            <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c6dcf5]/60 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] right-[8%] h-72 w-72 rounded-full bg-[#d8e2dc]/70 blur-3xl" />
            <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <div className="relative z-10 space-y-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm font-semibold text-[#003459] shadow-md shadow-white/60">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#0072ce]"
                  >
                    <path d="M12 4v16" />
                    <path d="M4 12h16" />
                  </svg>
                  Where care meets clarity
                </span>
                <div className="space-y-6">
                  <h1 className="font-serif text-4xl text-[#0d2742] sm:text-5xl lg:text-6xl">
                    Partnering with you for health that feels personal.
                  </h1>
                  <p className="max-w-xl text-lg text-[#516074]">
                    Navigating your health journey requires a trusted partner. At Yemedhnat Internal Medicine Specialty Clinic, we listen deeply, diagnose precisely, and accompany you with compassion through every chapter of your wellbeing.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full bg-[#0072ce] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8ab8e6] transition hover:bg-[#005da8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072ce]"
                  >
                    Explore Our Services
                  </Link>
                  <a
                    href="tel:+251911000000"
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-white/80 px-8 py-3 text-sm font-semibold text-[#003459] shadow-lg shadow-white/60 transition hover:border-[#c6dcf5] hover:bg-white"
                  >
                    +251 911 000 000
                  </a>
                </div>
                <ul className="grid gap-4 text-sm text-[#516074] sm:grid-cols-3">
                  {["Preventive & primary care", "Management of complex conditions", "Modern diagnostics on-site"].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm shadow-[#dbe8f8] backdrop-blur"
                    >
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      <span className="font-semibold text-[#3b536d]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 h-full min-h-[440px] rounded-[2.75rem] bg-white/70 p-6 shadow-2xl shadow-[#c4d8ef] backdrop-blur-xl">
                <div className="absolute inset-0 overflow-hidden rounded-[2.25rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0072ce22,transparent_65%)]" />
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1100&q=80"
                    alt="Doctor comforting a patient"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1280px) 540px, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#003459]/40 via-[#0d2742]/10 to-transparent" />
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="self-end rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#003459] shadow-lg shadow-white/60">
                    Compassion in every conversation
                  </div>
                  <div className="mt-auto w-full max-w-xs rounded-3xl bg-white/85 p-6 shadow-xl shadow-[#cbdff5] backdrop-blur">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0072ce]">
                      30 Years of Expertise
                    </span>
                    <p className="mt-3 text-sm text-[#516074]">
                      Dr. Medhanit Aberra blends decades of internal medicine excellence with cutting-edge diagnostics for tailored care plans.
                    </p>
                    <div className="mt-5 flex items-center gap-4 rounded-2xl bg-[#e8f1fa] p-4 text-sm text-[#003459]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0072ce] shadow-md shadow-[#c6dcf5]">
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
                        <p className="text-sm font-semibold text-[#0d2742]">Bole Bulbula, Addis Ababa</p>
                        <p className="text-xs text-[#516074]">Modern diagnostic tools within our clinic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-20 bg-[radial-gradient(circle_at_top,#e8f1fa,transparent_70%)]" />
          </section>

          <section
            id="services"
            className="relative space-y-12 rounded-[3rem] bg-[#e8f1fa]/70 px-6 py-16 scroll-mt-32 sm:px-10 sm:py-20"
          >
            <div className="absolute inset-x-12 top-12 hidden h-24 rounded-full bg-white/60 blur-3xl lg:block" />
            <div className="relative mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0072ce] shadow-sm shadow-white/50">
                Our Services
              </span>
              <h2 className="font-serif text-3xl text-[#0d2742] sm:text-4xl">
                Comprehensive internal medicine designed around you.
              </h2>
              <p className="text-base text-[#516074]">
                From preventive care to long-term management of complex conditions, we combine attentive listening, advanced diagnostics, and personalized follow-up so you can thrive at every stage of life.
              </p>
            </div>
            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-[#d0e2f6] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c0d8f5]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0072ce]/10 text-[#0072ce] transition duration-300 group-hover:bg-[#0072ce] group-hover:text-white">
                    {service.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl text-[#0d2742]">{service.title}</h3>
                    <p className="text-sm text-[#516074]">{service.description}</p>
                  </div>
                  <ul className="mt-auto space-y-2 text-sm text-[#516074]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0072ce]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 h-28 rounded-3xl bg-gradient-to-t from-[#0072ce]/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </section>

          <section
            id="founder"
            className="relative grid gap-10 rounded-[3rem] bg-[#f4ede4] px-6 py-16 scroll-mt-32 sm:grid-cols-[0.9fr,1.1fr] sm:px-10 sm:py-20"
          >
            <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,#ffffff70,transparent_70%)] sm:block" />
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2.5rem] bg-[#e5d8ce] shadow-2xl shadow-[#d4c2b4]">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80"
                alt="Dr. Medhanit Aberra"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2b38]/50 via-transparent to-transparent" />
            </div>
            <div className="relative flex flex-col justify-center space-y-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-[#a67f68]">
                Our Founder
              </span>
              <blockquote className="space-y-6">
                <p className="font-serif text-3xl leading-relaxed text-[#3d2f28]">
                  “Listening deeply is where healing begins. Compassion and knowledge are partners in every treatment journey.”
                </p>
                <p className="text-base text-[#5c4a3f]">
                  Dr. Medhanit Aberra brings nearly three decades of experience in internal medicine, building enduring relationships that honor the whole person behind every diagnosis.
                </p>
              </blockquote>
              <div className="space-y-1 text-[#3d2f28]">
                <p className="font-serif text-xl italic">Dr. Medhanit Aberra</p>
                <p className="text-sm uppercase tracking-[0.3em] text-[#816553]">Founder & Medical Director</p>
              </div>
              <div className="grid gap-3 text-sm text-[#5c4a3f] sm:grid-cols-2">
                {["Comprehensive internal medicine", "Evidence-based and person-centered", "Modern diagnostics on-site", "Trusted in Bole Bulbula for 3 years"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/70 p-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a67f68]/15 text-[#a67f68]">
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            className="space-y-12 rounded-[3rem] bg-white px-6 py-16 shadow-[0_40px_80px_rgba(16,36,59,0.08)] scroll-mt-32 sm:px-10 sm:py-20"
          >
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-[#e8f1fa] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0072ce]">
                What Our Patients Say
              </span>
              <h2 className="font-serif text-3xl text-[#0d2742] sm:text-4xl">
                Care that feels calm, clear, and deeply human.
              </h2>
              <p className="text-base text-[#516074]">
                Every conversation begins with listening. These stories reflect the relationships we cultivate with every visit.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="relative flex h-full flex-col gap-6 rounded-3xl border border-[#e8f1fa] bg-[#fafdff] p-8 text-left shadow-lg shadow-[#dbe8f8] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c6dcf5]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M21 8a6 6 0 0 0-6-6" />
                        <path d="M3 10a6 6 0 0 1 6 6" />
                        <path d="M21 14a6 6 0 0 1-6 6" />
                        <path d="M3 16a6 6 0 0 0 6-6" />
                      </svg>
                    </span>
                    <div>
                      <figcaption className="font-semibold text-[#0d2742]">{testimonial.name}</figcaption>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#7a8ca1]">{testimonial.detail}</p>
                    </div>
                  </div>
                  <blockquote className="text-base italic text-[#3b536d]">
                    “{testimonial.quote}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </section>

          <section
            id="visit"
            className="relative grid gap-10 rounded-[3rem] bg-[#e8f1fa] px-6 py-16 scroll-mt-32 sm:grid-cols-[0.85fr,1.15fr] sm:px-10 sm:py-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff70,transparent_70%)]" />
            <div className="relative space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#0072ce]">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl text-[#0d2742] sm:text-4xl">
                Schedule your visit today.
              </h2>
              <p className="text-base text-[#516074]">
                We’re located in Bole Bulbula, Addis Ababa, in a calming space designed to support meaningful conversations about your health.
              </p>
              <div className="space-y-5 text-sm text-[#516074]">
                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-md shadow-[#dbe8f8]">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0d2742]">Bole Bulbula, Addis Ababa</p>
                    <p>Modern internal medicine clinic with on-site diagnostics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-md shadow-[#dbe8f8]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0072ce]/10 text-[#0072ce]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M6.5 3h11" />
                      <path d="M18 3v18l-6-4-6 4V3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0d2742]">Clinic Hours</p>
                    <p>Monday – Saturday, 8:00 – 18:00</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+251911000000"
                    className="inline-flex flex-1 min-w-[160px] items-center justify-center rounded-full border border-transparent bg-white px-6 py-3 text-sm font-semibold text-[#003459] shadow-lg shadow-white/70 transition hover:border-[#c6dcf5] hover:bg-[#f6fbff]"
                  >
                    Call +251 911 000 000
                  </a>
                  <a
                    href="mailto:care@yemedhnat.com"
                    className="inline-flex flex-1 min-w-[160px] items-center justify-center rounded-full bg-[#0072ce] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8ab8e6] transition hover:bg-[#005da8]"
                  >
                    Email the Clinic
                  </a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 shadow-2xl shadow-[#c4d8ef]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0072ce22,transparent_70%)]" />
              <iframe
                title="Yemedhnat Internal Medicine Specialty Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.2190277849917!2d38.81088323699206!3d8.967717796083093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f823dfdcd7%3A0xb1f3d31a58a3487d!2sBole%20Bulbula!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                className="relative h-[420px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </section>
        </main>

        <footer className="relative mt-20 bg-[#003459] text-[#e8f1fa]">
          <div className="absolute inset-x-0 top-0 -translate-y-1/2">
            <svg className="h-16 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#003459" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z" />
            </svg>
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-12 pt-20 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
            <div className="space-y-5 max-w-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Image src="/logo.svg" alt="Yemedhnat logo" fill sizes="48px" className="object-contain p-2" />
                </span>
                <div>
                  <p className="font-serif text-lg">Yemedhnat Clinic</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#b7d0e9]">Internal Medicine</p>
                </div>
              </div>
              <p className="text-sm text-[#c5d9ef]">
                Medicine guided by science, practiced with heart. Discover a sanctuary of calm, compassionate internal medicine care in Bole Bulbula.
              </p>
            </div>
            <div className="grid flex-1 gap-6 text-sm text-[#c5d9ef] sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#8fb4d9]">Visit</p>
                <p>Bole Bulbula, Addis Ababa</p>
                <p>Monday – Saturday, 8:00 – 18:00</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#8fb4d9]">Contact</p>
                <a href="tel:+251911000000" className="block transition hover:text-white">
                  +251 911 000 000
                </a>
                <a href="mailto:care@yemedhnat.com" className="block transition hover:text-white">
                  care@yemedhnat.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.35em] text-[#8fb4d9]">
            © {new Date().getFullYear()} Yemedhnat Internal Medicine Specialty Clinic
          </div>
        </footer>
      </div>
    </div>
  );
}
