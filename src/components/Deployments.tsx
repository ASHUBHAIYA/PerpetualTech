import {
  ExternalLink,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Globe,
  Zap,
  TrendingUp,
  Lock,
  BarChart3,
} from 'lucide-react';

type Client = {
  name: string;
  domain: string;
  url: string;
  badge: string;
  title: string;
  summary: string;
  tags: string[];
  highlights: { label: string; icon: typeof Gauge }[];
  featured: boolean;
};

const clients: Client[] = [
  {
    name: 'Accountinger',
    domain: 'accountinger.in',
    url: 'https://accountinger.in',
    badge: 'Financial & Tax Services',
    title: 'Accountinger — Accounting, Tax & Advisory Digital Platform',
    summary:
      'Designed and engineered a high-conversion digital web platform and lead-generation infrastructure for tax, audit, and accounting compliance services.',
    tags: ['Next.js / React', 'Tailwind CSS', 'Cloudflare DNS', 'WhatsApp API', 'SEO Schema'],
    highlights: [
      { label: 'Load Speed: Sub-second (99/100 Mobile Score)', icon: Gauge },
      { label: 'Lead Gen: Direct WhatsApp & automated inquiry pipeline', icon: MessageCircle },
      { label: 'Uptime: 99.9% Cloud Hosted', icon: ShieldCheck },
    ],
    featured: true,
  },
  {
    name: 'Client Platform 2',
    domain: 'your-domain.com',
    url: '#',
    badge: 'Your Industry Here',
    title: 'Your Next Production Deployment',
    summary:
      'Swap in your second live client domain, screenshot, and tech stack. We will showcase real metrics, uptime, and business outcomes — just like Accountinger.',
    tags: ['Next.js', 'Docker', 'AWS', 'CI/CD', 'PostgreSQL'],
    highlights: [
      { label: 'Load Speed: Sub-second Core Web Vitals', icon: Zap },
      { label: 'Conversion: Optimized landing & inquiry flow', icon: TrendingUp },
      { label: 'Uptime: 99.9% with 24/7 monitoring', icon: ShieldCheck },
    ],
    featured: false,
  },
  {
    name: 'Client Platform 3',
    domain: 'your-domain.com',
    url: '#',
    badge: 'Your Industry Here',
    title: 'Your Third Production Deployment',
    summary:
      'Replace with your third live client engagement. Show off real performance scores, tech stack, and the business impact your engineering delivered.',
    tags: ['React', 'Tailwind CSS', 'Cloudflare', 'GA4', 'Meta Pixel'],
    highlights: [
      { label: 'Performance: 95+ Lighthouse score', icon: BarChart3 },
      { label: 'Tracking: Server-side GA4 + CAPI', icon: TrendingUp },
      { label: 'Security: SSL + automated backups', icon: Lock },
    ],
    featured: false,
  },
];

function BrowserMockup({ domain }: { domain: string }) {
  return (
    <div className="rounded-t-xl overflow-hidden border-b border-slate-200 bg-slate-100">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-500 font-mono">
            <Lock className="w-2.5 h-2.5 text-emerald-500" />
            {domain}
          </div>
        </div>
      </div>
      {/* Mock page content */}
      <div className="bg-white px-6 py-5">
        {/* Mock nav */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-sky-600" />
            <div className="h-2 w-16 rounded bg-slate-800" />
          </div>
          <div className="flex gap-3">
            <div className="h-1.5 w-8 rounded bg-slate-200" />
            <div className="h-1.5 w-8 rounded bg-slate-200" />
            <div className="h-1.5 w-8 rounded bg-slate-200" />
            <div className="h-1.5 w-10 rounded bg-sky-200" />
          </div>
        </div>
        {/* Mock hero */}
        <div className="space-y-2 mb-4">
          <div className="h-3 w-3/4 rounded bg-slate-800" />
          <div className="h-3 w-2/3 rounded bg-slate-700" />
          <div className="h-2 w-full rounded bg-slate-100 mt-3" />
          <div className="h-2 w-5/6 rounded bg-slate-100" />
        </div>
        <div className="flex gap-2 mb-5">
          <div className="h-7 w-24 rounded-lg bg-sky-600" />
          <div className="h-7 w-20 rounded-lg border border-slate-200" />
        </div>
        {/* Mock cards */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-2.5 space-y-1.5">
              <div className="w-6 h-6 rounded bg-sky-50 border border-sky-100" />
              <div className="h-1.5 w-full rounded bg-slate-200" />
              <div className="h-1.5 w-2/3 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Deployments() {
  return (
    <section id="deployments" className="section-padding relative bg-white">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Client Deliveries &amp; Live Deployments
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Real Client Systems{' '}
            <span className="text-gradient-blue">Running in Production</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We do not just build demos. Every engagement ships to production with
            measurable performance, uptime, and business outcomes.
          </p>
        </div>

        {/* Featured client - large card with browser mockup */}
        {clients.filter((c) => c.featured).map((client) => (
          <div
            key={client.name}
            className="glass-card overflow-hidden mb-8"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: browser mockup */}
              <div className="p-6 lg:p-8 bg-slate-50 border-r border-slate-200">
                <BrowserMockup domain={client.domain} />
              </div>

              {/* Right: details */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-xs font-medium text-sky-700 mb-4 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  {client.badge}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  {client.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {client.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {client.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <h.icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm text-slate-700">{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* External link button */}
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all duration-300 w-fit"
                >
                  <Globe className="w-4 h-4" />
                  Explore Live Production Site
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {clients.filter((c) => !c.featured).map((client) => (
            <div
              key={client.name}
              className="glass-card glass-card-hover p-6 flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs font-medium text-slate-600 mb-4 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                {client.badge}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {client.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {client.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {client.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-5 flex-1">
                {client.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2.5 text-xs text-slate-700"
                  >
                    <h.icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {h.label}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                <Globe className="w-4 h-4" />
                <span className="font-mono text-xs">{client.domain}</span>
                <span className="ml-auto text-xs">Awaiting deployment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
