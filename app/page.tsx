import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Preventive & Wellness Care",
    description:
      "Comprehensive physicals, risk assessments, and screenings tailored to keep you thriving at every stage of life.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-10 w-10 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Chronic Condition Management",
    description:
      "Expert guidance for diabetes, hypertension, and heart disease with treatment plans built around your daily realities.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-10 w-10 text-sky-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.105 0 2-.672 2-1.5S13.105 5 12 5s-2 .672-2 1.5S10.895 8 12 8zm0 8c-1.105 0-2 .672-2 1.5S10.895 19 12 19s2-.672 2-1.5S13.105 16 12 16z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12c0 3.314 2.686 6 6 6m0-12c3.314 0 6 2.686 6 6"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description:
      "On-site access to modern tools that deliver clarity quickly, so you can move forward with confidence.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-10 w-10 text-emerald-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10a1 1 0 001 1h14a1 1 0 001-1V7M8 7V5a4 4 0 118 0v2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 11a2 2 0 104 0 2 2 0 00-4 0zm0 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Care Navigation",
    description:
      "We coordinate referrals, follow-ups, and long-term plans to ensure you always feel supported and heard.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-10 w-10 text-sky-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5c2.485 0 4.5 2.015 4.5 4.5S12 19 12 19s-4.5-7.015-4.5-9.5S9.515 5 12 5z"
        />
        <circle cx="12" cy="9.5" r="1.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div
        aria-hidden="true"
        className="gradient-orb pointer-events-none absolute -top-32 -left-28 h-72 w-72 bg-emerald-200/80 blur-3xl soft-shimmer"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.6), rgba(250, 255, 255, 0))",
        }}
      />
      <div
        aria-hidden="true"
        className="gradient-orb gradient-orb--reverse pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 bg-sky-200/60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.45), rgba(250, 255, 255, 0))",
        }}
      />
      <div
        aria-hidden="true"
        className="gradient-orb gradient-orb--delay pointer-events-none absolute -right-32 top-24 h-96 w-96 bg-emerald-100/60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(45, 212, 191, 0.55), rgba(255, 255, 255, 0))",
        }}
      />

      <header className="relative z-20">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white shadow-[0_18px_45px_-20px_rgba(16,185,129,0.45)]">
              <span className="text-xl font-semibold">Y</span>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-emerald-600">
                Yemedhnat Clinic
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Internal Medicine Specialty
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative transition-all duration-300 hover:text-emerald-600"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_25px_50px_-20px_rgba(59,130,246,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
          >
            Book an Appointment
          </a>
        </nav>
      </header>

      <main className="relative z-20">
        <section
          id="home"
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 md:flex-row md:items-center md:px-10 md:pt-16"
        >
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-[0_12px_30px_-20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Compassionate Internal Medicine
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
              Navigating your health with clarity, compassion, and expertise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Yemedhnat Internal Medicine Specialty Clinic partners with you for prevention, accurate diagnosis, and the mindful management of complex conditions—all within a serene, supportive environment in Bole Bulbula, Addis Ababa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-3 text-base font-semibold text-white shadow-[0_30px_60px_-25px_rgba(16,185,129,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Schedule a Visit
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="tel:+251900000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-8 py-3 text-base font-semibold text-emerald-600 shadow-[0_20px_45px_-25px_rgba(16,185,129,0.45)] ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Call +251 90 000 0000
              </a>
            </div>
            <div className="mt-12 grid gap-6 rounded-3xl bg-white/80 p-6 shadow-[0_45px_90px_-40px_rgba(16,185,129,0.45)] ring-1 ring-emerald-100/60 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  Founder
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Dr. Medhanit Aberra
                </p>
                <p className="mt-3 text-sm italic text-slate-600">
                  "For me, medicine has always been about caring for the whole person. Listening deeply is where healing begins."
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-sky-400/10 p-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-[0_18px_45px_-25px_rgba(16,185,129,0.4)]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l2.5 2.5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">30+ years of expertise</p>
                    <p className="text-xs text-slate-500">Evidence-based care rooted in compassion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-[0_18px_45px_-25px_rgba(56,189,248,0.4)]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 00-8 0v2H6v10h12V9h-2V7z"
                      />
                      <path d="M10 13h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Modern diagnostics on-site</p>
                    <p className="text-xs text-slate-500">Accurate answers without the wait</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_60px_120px_-45px_rgba(16,185,129,0.45)] ring-1 ring-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=1200&q=80"
                alt="Physician consulting with a patient"
                width={1200}
                height={1600}
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 -bottom-6 hidden max-w-[240px] rounded-3xl bg-white/80 p-5 shadow-[0_45px_90px_-40px_rgba(16,185,129,0.5)] ring-1 ring-emerald-100 md:block">
              <p className="text-sm font-semibold text-slate-900">Patients feel heard</p>
              <p className="mt-2 text-sm text-slate-500">
                "I finally found a clinic where my concerns are met with patience and clarity."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-[0_25px_60px_-30px_rgba(16,185,129,0.5)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    Personalized Journeys
                  </p>
                  <p className="text-xs text-slate-500">Care plans crafted for your life</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative z-10 mx-auto w-full max-w-6xl rounded-[2.5rem] bg-white/90 px-6 py-16 shadow-[0_35px_120px_-50px_rgba(16,185,129,0.45)] ring-1 ring-emerald-100/60 backdrop-blur-sm md:px-10 md:py-20"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Our Services
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Whole-person internal medicine for every season of health.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We combine deep expertise with attentive listening and advanced diagnostics, ensuring every treatment plan is built around your goals, values, and life story.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex h-full flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-[0_35px_80px_-40px_rgba(16,185,129,0.4)] ring-1 ring-emerald-50 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_45px_100px_-45px_rgba(16,185,129,0.55)]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-sky-500/10 text-emerald-600 shadow-inner transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-auto text-sm font-semibold text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto mt-14 w-full max-w-5xl rounded-3xl bg-gradient-to-br from-emerald-500 to-sky-500 px-6 py-10 text-white shadow-[0_50px_110px_-45px_rgba(16,185,129,0.6)] md:px-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Visit Us in Bole Bulbula
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Ready for a more personal healthcare experience?
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Call us or visit our serene clinic in Addis Ababa to begin a lasting partnership for your health.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+251900000000"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/25"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5a2 2 0 012-2h1.5a1 1 0 01.95.684l1.2 3.59a1 1 0 01-.245 1.022l-1.12 1.12a16 16 0 007.585 7.585l1.12-1.12a1 1 0 011.022-.245l3.59 1.2a1 1 0 01.684.95V20a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 6V5z"
                  />
                </svg>
                +251 90 000 0000
              </a>
              <a
                href="mailto:care@yemedhnatclinic.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/25"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16v12H4V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7l8 5 8-5"
                  />
                </svg>
                care@yemedhnatclinic.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
