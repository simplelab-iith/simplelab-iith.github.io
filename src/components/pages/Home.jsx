import React from "react";
import { team } from "../../data/team";

export default function Home({ t, setPath }) {
  const updates = [
    {
      date: "May 2026",
      text: "Dr. Ashish Mishra joins the SAS 2025 & SAS 2026 Program Committees.",
    },
    {
      date: "January 2026",
      text: "Paper on Liquid Tree Automata submitted to CAV 2026!",
    },
    {
      date: "October 2025",
      text: "Cobalt paper accepted at OOPSLA 2025! Patches incomplete test generators automatically.",
    },
    {
      date: "August 2025",
      text: "Varsha Chebrolu joins Simple Lab as the first PhD Research Scholar in Program Synthesis.",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            {/* Main Lab Branding in Hero */}
            <div className="flex justify-start mb-8">
              <div className="flex items-center gap-4 select-none">
                <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-[#f97316] text-white text-3xl sm:text-4xl font-extrabold shadow-lg shadow-[#f97316]/30">
                  Σλ
                </span>
                <div className="flex flex-col justify-center text-left">
                  <span className="text-iith-blue font-extrabold leading-none tracking-tight text-3xl sm:text-4xl">
                    SIMPLE
                  </span>
                  <span className="text-sm sm:text-base font-bold text-iith-orange uppercase tracking-[0.2em] mt-1">
                    Lab
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-light">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  setPath("#research");
                  window.location.hash = "#research";
                }}
                className="rounded-lg bg-[#f97316] px-8 py-4 text-base font-extrabold text-white shadow-xl hover:bg-[#ea580c] hover:scale-105 transition-all"
              >
                {t.hero.ctaResearch}
              </a>
              <a
                href="#synthesis"
                onClick={(e) => {
                  e.preventDefault();
                  setPath("#synthesis");
                  window.location.hash = "#synthesis";
                }}
                className="rounded px-6 py-3.5 text-sm font-semibold text-iith-blue bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                {t.hero.ctaPlayground}
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Lab Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-iith-blue/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="w-full px-6 lg:px-12">
        <div className="rounded-xl border-2 border-slate-200 bg-white p-8 md:p-12 shadow-sm hover:border-[#f97316] hover:shadow-lg transition-all duration-300">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-iith-blue border-b border-slate-100 pb-4">
              {t.home.visionTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-light">
              {t.home.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Research Pillars Section */}
      <section className="w-full px-6 lg:px-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {t.home.pillarsTitle}
          </h2>
          <div className="h-1 w-16 bg-iith-orange mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.home.pillars.map((pillar, index) => {
            const icons = [
              // Program Synthesis Icon
              <svg
                key="0"
                className="h-8 w-8 stroke-[#f97316] fill-none stroke-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="4" />
              </svg>,
              // Automated Verification Icon
              <svg
                key="1"
                className="h-8 w-8 stroke-[#f97316] fill-none stroke-2"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>,
              // Type Systems Icon
              <svg
                key="2"
                className="h-8 w-8 stroke-[#f97316] fill-none stroke-2"
                viewBox="0 0 24 24"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10M6 10h10M6 14h10" />
              </svg>,
            ];

            return (
              <div
                key={index}
                className="rounded-xl border-2 border-slate-200 bg-white p-6 md:p-8 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded bg-[#f97316]/10 border border-[#f97316]/20">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-iith-blue mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full px-6 lg:px-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Meet the Team
          </h2>
          <div className="h-1 w-16 bg-iith-orange mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border-2 border-slate-200 bg-white p-6 space-y-4 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-1 select-none">
                <h3 className="text-xl font-bold text-iith-blue">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-iith-orange">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 font-light font-sans">
                  {member.affiliation}
                </p>
              </div>

              {member.bio && (
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                  {member.bio}
                </p>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-iith-blue transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>{member.email}</span>
                  </a>
                )}

                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-iith-blue transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                    </svg>
                    <span>Website</span>
                  </a>
                )}

                {member.scholar && (
                  <a
                    href={member.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-iith-blue transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                    <span>Scholar</span>
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-iith-blue transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-iith-blue transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 stroke-current fill-none stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Lab Updates/News Ticker */}
      <section className="w-full px-6 lg:px-12 space-y-8">
        <h3 className="text-2xl font-bold text-center text-iith-blue border-b border-slate-200 pb-4">
          {t.hero.newsTitle}
        </h3>

        <div className="rounded-xl border-2 border-slate-200 bg-white divide-y divide-slate-100 shadow-sm hover:border-[#f97316] hover:shadow-lg transition-all duration-300 overflow-hidden">
          {updates.map((update, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 p-5 hover:bg-slate-50 transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-iith-orange sm:w-32 shrink-0 font-sans">
                {update.date}
              </span>
              <span className="text-sm text-slate-700 leading-relaxed font-sans font-light">
                {update.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
