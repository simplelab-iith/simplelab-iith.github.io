import React, { useState, useMemo } from "react";
import { publications } from "../../data/publications";

export default function Publications({ t }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPaperId, setExpandedPaperId] = useState(null);
  const [expandedSection, setExpandedSection] = useState({}); // 'abstract' or 'bibtex'

  const categories = [
    "All",
    "Program Synthesis",
    "Program Verification",
    "Type Systems",
  ];

  // Filter and search publications
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesCategory =
        selectedCategory === "All" || pub.category === selectedCategory;
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.year.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id) => {
    if (expandedPaperId === id) {
      setExpandedPaperId(null);
    } else {
      setExpandedPaperId(id);
      // default section to abstract when opened
      setExpandedSection((prev) => ({ ...prev, [id]: "abstract" }));
    }
  };

  const handleCopyBibtex = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    alert("BibTeX citation copied to clipboard!");
  };

  return (
    <div className="space-y-12 pb-20 pt-10">
      {/* Header Info */}
      <section className="w-full px-6 lg:px-12 text-center space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl font-heading text-slate-900 ">
          {t.publications.title}
        </h1>
        <p className="text-lg text-slate-600  max-w-2xl mx-auto font-sans font-light">
          {t.publications.subtitle}
        </p>
        <div className="h-1 w-16 bg-iith-orange mx-auto rounded animate-pulse" />
      </section>

      {/* Publications Engine Section */}
      <section className="w-full px-6 lg:px-12 space-y-8">
        {/* Controls Container */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-slate-200  pb-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[#f97316] text-white font-bold shadow-md shadow-[#f97316]/30"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
                }`}
              >
                {cat === "All" ? t.publications.filterAll : cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative md:w-96 w-full shrink-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-5 w-5 stroke-slate-400 fill-none stroke-[2.5]"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.publications.searchPlaceholder}
              className="block w-full rounded-2xl bg-white py-3.5 pl-12 pr-10 text-base font-medium text-slate-900 placeholder-slate-400 border-2 border-slate-200 focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/20 bg-none focus:outline-none transition-all shadow-sm hover:border-slate-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-[#f97316] transition-colors"
              >
                <svg className="h-5 w-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => {
              const isExpanded = expandedPaperId === pub.id;
              const section = expandedSection[pub.id] || "abstract";

              return (
                <div
                  key={pub.id}
                  onClick={() => toggleExpand(pub.id)}
                  className={`rounded-xl border-2 bg-white p-6 hover:border-[#f97316] hover:shadow-lg cursor-pointer transition-all duration-300 ${
                    isExpanded
                      ? "border-[#f97316] shadow-md bg-slate-50"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top Row: Year and Category */}
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-iith-orange/10 px-2 py-0.5 text-xs font-semibold text-iith-orange border border-iith-orange/20 font-sans">
                        {pub.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500  font-sans">
                        {pub.year}
                      </span>
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-lg font-bold font-heading text-slate-900  leading-snug group-hover:text-iith-orange transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors and Venue */}
                    <p className="text-sm text-slate-700  font-sans font-light">
                      {pub.authors}
                    </p>
                    <p className="text-sm font-medium italic text-slate-500  font-sans">
                      {pub.venue}
                    </p>

                    {/* Links Buttons */}
                    <div
                      className="flex items-center gap-4 pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-iith-orange hover:text-iith-gold transition-colors font-sans"
                      >
                        {t.publications.viewPaper}
                        <svg
                          className="h-3.5 w-3.5 stroke-current fill-none stroke-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>

                      {pub.preprint && (
                        <a
                          href={pub.preprint}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-iith-orange hover:text-iith-gold transition-colors font-sans"
                        >
                          {t.publications.viewPreprint}
                          <svg
                            className="h-3.5 w-3.5 stroke-current fill-none stroke-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expandable abstract and bibtex */}
                  {isExpanded && (
                    <div
                      className="mt-6 pt-6 border-t border-slate-200  space-y-4 animate-[fadeIn_0.2s_ease-out]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Section Tabs */}
                      <div className="flex items-center border-b border-slate-200  pb-2 gap-4">
                        <button
                          onClick={() =>
                            setExpandedSection((prev) => ({
                              ...prev,
                              [pub.id]: "abstract",
                            }))
                          }
                          className={`text-xs font-bold uppercase tracking-wider ${
                            section === "abstract"
                              ? "text-iith-orange border-b-2 border-iith-orange"
                              : "text-slate-500  hover:text-slate-800 :text-slate-300"
                          }`}
                        >
                          {t.publications.abstract}
                        </button>
                        <button
                          onClick={() =>
                            setExpandedSection((prev) => ({
                              ...prev,
                              [pub.id]: "bibtex",
                            }))
                          }
                          className={`text-xs font-bold uppercase tracking-wider ${
                            section === "bibtex"
                              ? "text-iith-orange border-b-2 border-iith-orange"
                              : "text-slate-500  hover:text-slate-800 :text-slate-300"
                          }`}
                        >
                          {t.publications.bibtex}
                        </button>
                      </div>

                      {/* Content Panel */}
                      {section === "abstract" ? (
                        <p className="text-sm text-slate-700  leading-relaxed font-sans font-light bg-slate-50  p-4 rounded-xl border border-slate-200 ">
                          {pub.abstract}
                        </p>
                      ) : (
                        <div className="relative">
                          <pre className="overflow-x-auto text-xs text-amber-800  bg-amber-50/50  p-4 rounded-xl border border-slate-200  font-mono leading-relaxed">
                            {pub.bibtex}
                          </pre>
                          <button
                            onClick={(e) => handleCopyBibtex(pub.bibtex, e)}
                            className="absolute top-2 right-2 rounded-lg bg-white  p-2 text-slate-550  hover:text-iith-orange hover:bg-slate-100 :bg-slate-800 transition-colors border border-slate-200  shadow-sm"
                            title="Copy BibTeX"
                          >
                            <svg
                              className="h-4 w-4 stroke-current fill-none stroke-2"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                              />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 border border-dashed border-slate-200  rounded-2xl bg-white  shadow-sm ">
              <p className="text-slate-500 text-sm font-sans font-light">
                No publications found matching search filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
