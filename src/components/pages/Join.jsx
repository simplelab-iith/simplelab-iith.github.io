import React from "react";

export default function Join({ t }) {
  return (
    <div className="space-y-16 pb-20 pt-10">
      {/* Header Info */}
      <section className="w-full px-6 lg:px-12 text-center space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl font-heading text-slate-900 ">
          {t.join.title}
        </h1>
        <p className="text-lg text-slate-600  max-w-2xl mx-auto leading-relaxed font-sans font-light">
          {t.join.subtitle}
        </p>
        <div className="h-1 w-16 bg-[#f97316] mx-auto rounded animate-pulse" />
      </section>

      {/* Main Content Layout */}
      <section className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight font-heading text-slate-800  border-b border-slate-200  pb-3 flex items-center gap-2">
            <svg
              className="h-5 w-5 stroke-[#f97316] fill-none stroke-2"
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {t.join.positionsTitle}
          </h2>

          <div className="space-y-6">
            {t.join.positions.map((pos, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl bg-white p-5 md:p-6 border-2 border-slate-200 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold font-heading text-slate-900  group-hover:text-[#f97316] transition-colors">
                  {pos.role}
                </h3>
                <p className="text-sm text-slate-600  leading-relaxed font-sans font-light mt-3">
                  {pos.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
