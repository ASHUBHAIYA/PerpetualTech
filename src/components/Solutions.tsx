import {
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building2,
  Factory,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const solutions = [
  {
    title: 'E-Commerce Platforms',
    description:
      'High-converting storefronts with sub-second load times, server-side rendering, and integrated payment infrastructure.',
    icon: ShoppingBag,
    tags: ['Next.js', 'Stripe', 'Edge Caching'],
  },
  {
    title: 'SaaS Applications',
    description:
      'Multi-tenant architectures with auth, real-time features, and auto-scaling cloud infrastructure built for growth.',
    icon: Building2,
    tags: ['React', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Healthcare & Clinic Systems',
    description:
      'HIPAA-conscious patient portals, appointment systems, and secure data infrastructure with end-to-end encryption.',
    icon: Stethoscope,
    tags: ['SSL', 'RBAC', 'Automated Backups'],
  },
  {
    title: 'EdTech Platforms',
    description:
      'Interactive learning management systems with video streaming, progress tracking, and scalable content delivery.',
    icon: GraduationCap,
    tags: ['Next.js', 'CDN', 'Analytics'],
  },
  {
    title: 'Enterprise Internal Tools',
    description:
      'Custom dashboards, workflow automation, and internal tooling that replaces spreadsheets with real software.',
    icon: Factory,
    tags: ['React', 'CI/CD', 'PostgreSQL'],
  },
  {
    title: 'Marketing Sites & Landing Pages',
    description:
      'Conversion-optimized landing pages with A/B testing, server-side tracking, and Core Web Vitals under 1 second.',
    icon: Sparkles,
    tags: ['Tailwind', 'GA4', 'Meta Pixel', 'CAPI'],
  },
];

export default function Solutions() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="section-padding relative bg-white">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Solutions for{' '}
            <span className="text-gradient-blue">Every Industry</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We have shipped systems across industries. Here is where our engineering
            creates the most leverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="glass-card glass-card-hover p-6 group cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-all duration-300">
                <sol.icon className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-base font-bold mb-2 text-slate-900">{sol.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {sol.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-1 text-xs text-sky-600 hover:text-sky-700 transition-colors group/cta"
              >
                Learn more
                <ArrowRight className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
