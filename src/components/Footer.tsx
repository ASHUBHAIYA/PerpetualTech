import { Boxes, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Services: ['Web Engineering', 'Cloud & DevOps', 'Performance Marketing', 'Managed Cloud'],
  Company: ['About', 'Process', 'Pricing', 'Tech Stack'],
  Legal: ['Privacy Policy', 'Terms of Service', 'SOW Portal', 'Refund Policy'],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-sky-100/30 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-14">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center">
                  <Boxes className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-dot ring-2 ring-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Authorize<span className="text-sky-600">Tech</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-sm">
              Resilient Engineering. Cloud-Scale Delivery. We architect, deploy,
              and scale high-performance digital systems for ambitious businesses.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:contact@authorizetech.in"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@authorizetech.in
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4" />
                India | Global Remote Delivery
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const map: Record<string, string> = {
                          About: '#about',
                          Process: '#process',
                          Pricing: '#pricing',
                          'Tech Stack': '#tech-stack',
                          'Web Engineering': '#services',
                          'Cloud & DevOps': '#services',
                          'Performance Marketing': '#services',
                          'Managed Cloud': '#services',
                        };
                        if (map[link]) scrollTo(map[link]);
                      }}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 AuthorizeTech. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-500">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
