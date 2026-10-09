import React from 'react';

export default function Footer({ currentLang }) {
  const currentYear = new Date().getFullYear();

  const footerI18n = {
    en: {
      tagline: "Deductive synthesis & verified computation.",
      addressTitle: "Contact Details",
      addressText: "CS-606, Computer Science block, IIT Hyderabad, Kandi, Sangareddy, Telangana 502284",
      linksTitle: "Quick Resources",
      deptLink: "CSE Department, IITH",
      instituteLink: "IIT Hyderabad Portal",
      copyText: `© ${currentYear} ΣλMPL∃ Lab, CSE Department, IIT Hyderabad. All rights reserved.`
    },
    hi: {
      tagline: "डिडक्टिव सिंथेसिस और सत्यापित कम्प्यूटेशन।",
      addressTitle: "संपर्क विवरण",
      addressText: "CS-606, कंप्यूटर विज्ञान विभाग, आईआईटी हैदराबाद, कंडी, संगारेड्डी, तेलंगाना 502284",
      linksTitle: "त्वरित लिंक",
      deptLink: "कंप्यूटर विज्ञान विभाग, आईआईटीएच",
      instituteLink: "आईआईटी हैदराबाद पोर्टल",
      copyText: `© ${currentYear} ΣλMPL∃ लैब, कंप्यूटर विज्ञान विभाग, आईआईटी हैदराबाद। सर्वाधिकार सुरक्षित।`
    },
    te: {
      tagline: "డిడక్టివ్ సింథసిస్ & వెరిఫైడ్ కంప్యూటేషన్.",
      addressTitle: "సంప్రదించండి",
      addressText: "CS-606, కంప్యూటర్ సైన్స్ బ్లాక్, ఐఐటీ హైదరాబాద్, కంది, సంగారెడ్డి, తెలంగాణ 502284",
      linksTitle: "ముఖ్యమైన లింకులు",
      deptLink: "సీఎస్‌ఈ విభాగం, ఐఐటీహెచ్",
      instituteLink: "ఐఐటీ హైదరాబాద్ వెబ్ పోర్టల్",
      copyText: `© ${currentYear} ΣλMPL∃ ల్యాబ్, కంప్యూటర్ సైన్స్ విభాగం, ఐఐటీ హైదరాబాద్. సర్వ హక్కులు ప్రత్యేకించబడినవి.`
    }
  };

  const f = footerI18n[currentLang] || footerI18n.en;

  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-16 mt-20 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] via-orange-400 to-[#f97316]" />

      <div className="w-full px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Section (Wider) */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316] text-white text-lg font-bold shadow-lg shadow-[#f97316]/20">
              Σλ
            </span>
            <span>SIMPLE Lab</span>
          </div>
          <p className="text-base text-slate-400 max-w-sm leading-relaxed font-sans font-light">
            {f.tagline}
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-[#f97316] hover:text-white transition-all text-slate-300">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-[#f97316] hover:text-white transition-all text-slate-300">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="text-sm font-bold tracking-widest uppercase text-white">
            {f.linksTitle}
          </h3>
          <ul className="space-y-4 text-sm font-sans font-light">
            <li>
              <a href="https://cse.iith.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#f97316] transition-colors group">
                <span className="h-px w-4 bg-slate-700 group-hover:bg-[#f97316] group-hover:w-6 transition-all duration-300"></span>
                <span>{f.deptLink}</span>
              </a>
            </li>
            <li>
              <a href="https://iith.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#f97316] transition-colors group">
                <span className="h-px w-4 bg-slate-700 group-hover:bg-[#f97316] group-hover:w-6 transition-all duration-300"></span>
                <span>{f.instituteLink}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="text-sm font-bold tracking-widest uppercase text-white">
            {f.addressTitle}
          </h3>
          <div className="space-y-4 text-sm font-sans font-light">
            <p className="flex items-start gap-3">
              <svg className="mt-1 h-4 w-4 shrink-0 stroke-[#f97316] fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="leading-relaxed">{f.addressText}</span>
            </p>
            <p className="flex items-center gap-3">
              <svg className="h-4 w-4 shrink-0 stroke-[#f97316] fill-none stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:mishraashish@cse.iith.ac.in" className="hover:text-[#f97316] transition-colors font-medium text-white">
                mishraashish@cse.iith.ac.in
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
        <p className="text-slate-500">{f.copyText}</p>
        <p className="flex items-center gap-2">
          <span className="text-slate-500">Built with precision by</span>
          <span className="font-bold text-[#f97316] tracking-wide">IITH SIMPLE LAB</span>
        </p>
      </div>
    </footer>
  );
}
