import Link from "next/link";
import { Navigation } from "../components/navigation";

const services = [
  {
    title: "Preventive Care & Wellness",
    description:
      "Annual physicals, screenings, and proactive lifestyle guidance to keep you vibrant through every season of life.",
    bullets: [
      "Holistic annual wellness visits",
      "Immunizations & tailored screening plans",
      "Personal health coaching & follow-up",
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
        <path d="M12 20s8-4 8-10a5 5 0 0 0-8-4 5 5 0 0 0-8 4c0 6 8 10 8 10Z" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Chronic Condition Management",
    description:
      "Compassionate partnership for diabetes, hypertension, and heart health with evidence-based care plans.",
    bullets: [
      "Precise diagnostics & monitoring",
      "Medication optimization",
      "Co-created care goals",
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Modern imaging and laboratory coordination with swift interpretation and gentle communication.",
    bullets: [
      "On-site diagnostic coordination",
      "Timely, clear results",
      "Technology guided by empathy",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l3 3" />
      </svg>
    ),
  },
  {
    title: "Guided Health Navigation",
    description:
      "A trusted companion for specialist referrals, hospital transitions, and long-term wellness planning.",
    bullets: [
      "Coordinated referral support",
      "Continuity across care teams",
      "Long-view wellness strategies",
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
        <path d="M3 11.5a9 9 0 1 1 9 9" />
        <path d="m3 20 6-6" />
        <path d="M3 20h6" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Dr. Medhanit listens in a way that makes you feel seen. Every visit ends with a plan that actually fits my life.",
    name: "Alem T.",
    title: "Patient since 2021",
  },
  {
    quote:
      "The clinic blends warmth and technology effortlessly. Results are fast, but conversations are never rushed.",
    name: "Samuel K.",
    title: "Hypertension care",
  },
  {
    quote:
      "I finally have a doctor who partners with me. We celebrate small wins together, and that keeps me motivated.",
    name: "Feven A.",
    title: "Diabetes management",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#fafafa] text-[#1a2c3f]">
      <Navigation />

      <main className="flex flex-col gap-32 pb-32 pt-32">
        <section
          id="home"
          data-section="home"
          className="relative overflow-hidden bg-gradient-to-b from-[#e8f1fa] via-[#f9fbff] to-[#fafafa]"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-x-0 top-[-10%] h-[140%] bg-[url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center bg-fixed opacity-70"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1fa]/88 via-[#fafafa]/90 to-white" />
            <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#0072ce]/10 blur-3xl" aria-hidden />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f4ede4]/70 blur-3xl" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-6 pb-28 pt-24 lg:flex-row lg:items-end lg:gap-20 lg:px-8">
            <div className="max-w-2xl space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm font-semibold text-[#0072ce] shadow-lg shadow-sky-100/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#0072ce]" />
                Compassion with clinical clarity
              </span>
              <div className="space-y-6">
                <h1 className="animate-fade-rise font-display text-4xl text-[#003459] sm:text-5xl lg:text-6xl">
                  Where care meets clarity.
                </h1>
                <p className="animate-fade-rise-delayed text-lg leading-relaxed text-[#2f4157]">
                  At Yemedhnat Internal Medicine Specialty Clinic, we listen deeply, diagnose precisely, and guide you with a calm,
                  human touch. From preventive screenings to complex condition management, every plan is tailored to your life.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                <Link
                  href="#services"
                  className="button-glow inline-flex items-center justify-center rounded-full bg-[#0072ce] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#005da7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072ce]"
                >
                  Explore Services
                </Link>
                <a
                  href="tel:+251911000000"
                  className="inline-flex items-center justify-center rounded-full border border-[#0072ce]/30 bg-white/80 px-7 py-3 text-sm font-semibold text-[#003459] shadow-md shadow-sky-100 transition hover:border-[#0072ce]/60 hover:bg-white"
                >
                  Call +251 911 000 000
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Preventive screenings", "Advanced diagnostics", "Long-term partnership"].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-3xl border border-white/70 bg-white/60 px-5 py-4 text-sm font-semibold text-[#003459] shadow-lg shadow-sky-100/50"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-sm">
              <div className="animate-soft-float rounded-[2.5rem] border border-white/40 bg-white/80 p-5 shadow-2xl shadow-sky-100/70 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <div
                    className="h-80 bg-[url('https://images.unsplash.com/photo-1580281657521-3c90737caad3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003459]/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/85 p-5 shadow-lg shadow-sky-100/60">
                    <p className="text-sm text-[#1a2c3f]">
                      &ldquo;Listening deeply is where healing begins.&rdquo; — Dr. Medhanit Aberra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 right-0 h-24 w-full text-[#fafafa]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 0h1440v80c-180 24-360 36-540 36s-360-12-540-36S180 16 0 0Z"
              fill="currentColor"
            />
          </svg>
        </section>

        <section
          id="about"
          data-section="about"
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8"
        >
          <div className="max-w-xl space-y-6">
            <h2 className="font-display text-3xl text-[#003459] sm:text-4xl">Partnering for a lifetime of health.</h2>
            <p className="text-base text-[#2f4157]">
              From our home in Bole Bulbula, Addis Ababa, Yemedhnat has cared for families for more than three years — grounded in
              Dr. Medhanit Aberra&apos;s three decades of internal medicine expertise. We combine advanced diagnostics with attentive
              relationships so you always feel guided, never rushed.
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {[{
                label: "Years of trusted experience",
                value: "30+",
              },
              {
                label: "Modern diagnostic tools",
                value: "On-site",
              },
              {
                label: "Care philosophy",
                value: "Compassion first",
              }].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#d8e2dc] bg-white/80 px-5 py-6 shadow-lg shadow-sky-100/40">
                  <p className="font-display text-3xl text-[#0072ce]">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#2f4157]/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-10 -left-6 h-32 w-32 rounded-full bg-[#e8f1fa] blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#f4ede4] blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 shadow-2xl shadow-sky-100/70">
              <div className="grid gap-1 p-10 sm:grid-cols-2">
                {["Evidence-based medicine", "Whole-person focus", "Warm, modern spaces", "Seamless follow-up"].map((quality) => (
                  <div key={quality} className="rounded-2xl bg-[#e8f1fa]/60 px-5 py-4 text-sm font-semibold text-[#003459]">
                    {quality}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          data-section="services"
          className="bg-[#e8f1fa]/60 py-24"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0072ce] shadow shadow-sky-100">
                Our Services
              </span>
              <h2 className="mt-6 font-display text-3xl text-[#003459] sm:text-4xl">Care that feels personal, precise, and peaceful.</h2>
              <p className="mt-4 text-base text-[#2f4157]">
                Explore how prevention, diagnostics, and long-term partnership come together to support you and your loved ones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col gap-5 rounded-[28px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-sky-100/60 transition duration-300 hover:-translate-y-2 hover:shadow-sky-200"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0072ce]/10 text-[#0072ce] transition duration-300 group-hover:bg-[#0072ce] group-hover:text-white">
                    {service.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-[#003459]">{service.title}</h3>
                    <p className="text-sm text-[#2f4157]">{service.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-[#2f4157]/80">
                    {service.bullets.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0072ce]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-[28px] bg-gradient-to-t from-[#0072ce]/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="founder"
          data-section="founder"
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-[3rem] border border-[#f4ede4] bg-[#f4ede4]/60 shadow-2xl shadow-sky-100/60">
            <div
              className="h-full min-h-[420px] bg-[url('https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003459]/65 via-[#003459]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/85 p-6 shadow-lg shadow-sky-100">
              <p className="text-base italic text-[#2f4157]">
                “Listening deeply is where healing begins.”
              </p>
              <p className="mt-4 font-display text-xl text-[#003459]">
                Dr. Medhanit Aberra
              </p>
              <p className="text-sm uppercase tracking-[0.28em] text-[#0072ce]">Founder & Specialist</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-[#003459] sm:text-4xl">Medicine guided by science, practiced with heart.</h2>
            <p className="text-base text-[#2f4157]">
              Dr. Medhanit Aberra has cared for patients for nearly 30 years. Her philosophy is simple: truly listening is the most
              powerful diagnostic tool. At Yemedhnat, that belief shapes every appointment, every follow-up call, every plan we craft
              together.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Individualized treatment plans", "Warm, modern clinical environment", "Collaborative care teams", "Continuous guidance between visits"].map((item) => (
                <div key={item} className="rounded-3xl border border-[#d8e2dc] bg-white/80 px-5 py-4 text-sm font-semibold text-[#003459]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="testimonials-heading"
          className="bg-white py-24"
          data-section="stories"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="testimonials-heading" className="font-display text-3xl text-[#003459] sm:text-4xl">
                What our patients say
              </h2>
              <p className="mt-4 text-base text-[#2f4157]">
                Gentle encouragement, clear answers, and thoughtful follow-up — it&apos;s how we build trust that lasts.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="group rounded-[28px] border border-[#e8f1fa] bg-[#f9fbff] p-7 shadow-lg shadow-sky-100/50 transition duration-300 hover:-translate-y-2 hover:shadow-sky-200"
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
                        <path d="M9 10h.01" />
                        <path d="M15 10h.01" />
                        <path d="M8 15c1.333 1 2.667 1 4 0" />
                      </svg>
                    </span>
                    <figcaption>
                      <p className="font-display text-lg text-[#003459]">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#0072ce]">{testimonial.title}</p>
                    </figcaption>
                  </div>
                  <blockquote className="mt-5 text-sm italic text-[#2f4157]">“{testimonial.quote}”</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-section="contact"
          className="relative bg-[#f4ede4]/60 py-24"
        >
          <div className="absolute inset-x-0 top-0 -translate-y-1/2">
            <svg className="h-24 w-full text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
              <path d="M0 80c180 24 360 36 540 36s360-12 540-36 360-56 540-80v120H0Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0072ce]">
                Visit Us
              </span>
              <h2 className="font-display text-3xl text-[#003459] sm:text-4xl">Schedule your visit today.</h2>
              <p className="text-base text-[#2f4157]">
                We&apos;re located in Bole Bulbula, Addis Ababa. Call or book an appointment to begin a partnership focused on your
                long-term wellbeing.
              </p>
              <div className="grid gap-4 text-sm text-[#2f4157]">
                <div className="flex items-start gap-3 rounded-3xl bg-white/70 px-5 py-4 shadow-md shadow-sky-100/50">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0072ce]" />
                  <div>
                    <p className="font-semibold text-[#003459]">Address</p>
                    <p>Bole Bulbula, Addis Ababa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-3xl bg-white/70 px-5 py-4 shadow-md shadow-sky-100/50">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0072ce]" />
                  <div>
                    <p className="font-semibold text-[#003459]">Phone</p>
                    <a href="tel:+251911000000" className="transition hover:text-[#0072ce]">
                      +251 911 000 000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-3xl bg-white/70 px-5 py-4 shadow-md shadow-sky-100/50">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0072ce]" />
                  <div>
                    <p className="font-semibold text-[#003459]">Email</p>
                    <a href="mailto:hello@yemedhnat.com" className="transition hover:text-[#0072ce]">
                      hello@yemedhnat.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#home"
                  className="button-glow inline-flex items-center justify-center rounded-full bg-[#0072ce] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#005da7]"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+251911000000"
                  className="inline-flex items-center justify-center rounded-full border border-[#0072ce]/30 bg-white/80 px-6 py-3 text-sm font-semibold text-[#003459] shadow-md shadow-sky-100 transition hover:border-[#0072ce]/60 hover:bg-white"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 shadow-2xl shadow-sky-100/70">
              <iframe
                title="Yemedhnat Internal Medicine Specialty Clinic map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.640701705558!2d38.7923!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f0d4a7b5cd%3A0xa4b7f1bb157ccd1f!2sBole%20Bulbula!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="wave-divider relative bg-[#003459] pt-24 text-[#f1f6fb]">
        <div className="absolute -top-24 left-0 right-0">
          <svg className="h-24 w-full text-[#003459]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0h1440v80c-180 24-360 36-540 36s-360-12-540-36S180 16 0 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 lg:flex-row lg:justify-between lg:px-8">
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#80bfff]">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                >
                  <path
                    d="M18 32c-4-5.5-3.5-12 4-16 4-2.2 8.5.8 10 4.5 2-5.5 8-8 12-6 6 2.7 7.5 10 1.5 17l-13 14-13.5-13.5Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 34c2.5-5 8-6 12-2.5 4 3.5 3.5 9-1 12.5L32 52l-11-8c-5-3.5-5.5-9.5-1.5-12.5 4.5-3.5 10-.5 12.5 3Z"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg">Yemedhnat Clinic</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#c7d9ec]">Internal Medicine Specialty</p>
              </div>
            </div>
            <p className="text-sm text-[#c7d9ec]">
              “Medicine guided by science, practiced with heart.” Step into a space where clarity, compassion, and calm design guide
              every visit.
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-2">
            <div className="space-y-3 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#80bfff]">Visit</p>
              <p>Bole Bulbula, Addis Ababa</p>
              <p>Open Monday – Saturday</p>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#80bfff]">Connect</p>
              <a href="tel:+251911000000" className="block transition hover:text-white">
                +251 911 000 000
              </a>
              <a href="mailto:hello@yemedhnat.com" className="block transition hover:text-white">
                hello@yemedhnat.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-[#c7d9ec]">
          © {new Date().getFullYear()} Yemedhnat Internal Medicine Specialty Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
