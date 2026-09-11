import { Check, Star, Rocket, Cloud, TrendingUp, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Launch & Deploy',
    tagline: 'For SMEs & local businesses',
    description:
      'High-speed custom web presence + Cloudflare setup for businesses that need to stand out.',
    icon: Rocket,
    price: '₹49,999',
    period: 'one-time',
    features: [
      'Custom Next.js website (up to 8 pages)',
      'Core Web Vitals < 1s optimization',
      'Cloudflare CDN & caching setup',
      'SSL certificate configuration',
      'Mobile-responsive design',
      'Basic SEO foundation',
      '14-day post-launch warranty',
    ],
    highlighted: false,
    cta: 'Start with Launch',
  },
  {
    name: 'Cloud & DevOps Scale',
    tagline: 'For startups & scaling teams',
    description:
      'Next.js apps, Docker, AWS infrastructure, and CI/CD pipelines for products that need to scale.',
    icon: Cloud,
    price: '₹1,49,999',
    period: 'one-time',
    features: [
      'Full-stack Next.js application',
      'Docker containerization',
      'AWS infrastructure setup',
      'GitHub Actions CI/CD pipelines',
      'Nginx reverse proxy config',
      'PostgreSQL database setup',
      'Zero-downtime deployment',
      '24/7 uptime monitoring (3 months)',
      'Monthly performance report',
    ],
    highlighted: true,
    cta: 'Scale with DevOps',
  },
  {
    name: 'Full-Funnel Growth Partner',
    tagline: 'End-to-end partnership',
    description:
      'Web engineering + Cloud management + Google/Meta Ads lead gen for maximum ROI.',
    icon: TrendingUp,
    price: '₹75,000',
    period: '/month',
    features: [
      'Everything in Cloud & DevOps Scale',
      'Google Search Ads (PPC) management',
      'Meta Ads management & creative',
      'High-converting landing pages',
      'Meta Pixel + GA4 server-side CAPI',
      'Monthly feature iteration',
      'Dedicated Slack channel',
      'Quarterly strategy sessions',
      'Priority support & SLA',
    ],
    highlighted: false,
    cta: 'Become a Partner',
  },
];

export default function Pricing() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Packages Built for{' '}
            <span className="text-gradient-blue">Every Stage</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            No hidden fees, no surprises. Pick the tier that matches your
            ambition and scale up when you are ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card p-7 flex flex-col ${
                plan.highlighted
                  ? 'border-sky-300 ring-1 ring-sky-200 shadow-md lg:scale-[1.03]'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600 text-xs font-medium text-white">
                  <Star className="w-3 h-3 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    plan.highlighted
                      ? 'bg-sky-100 border border-sky-200'
                      : 'bg-slate-100 border border-slate-200'
                  }`}
                >
                  <plan.icon
                    className={`w-5 h-5 ${
                      plan.highlighted ? 'text-sky-600' : 'text-slate-600'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500">{plan.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500 ml-1">
                  {plan.period}
                </span>
              </div>

              <button
                onClick={() => scrollTo('#contact')}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 mb-6 ${
                  plan.highlighted
                    ? 'bg-slate-900 hover:bg-slate-800 text-white'
                    : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlighted
                          ? 'bg-sky-100'
                          : 'bg-emerald-50'
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 ${
                          plan.highlighted ? 'text-sky-600' : 'text-emerald-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          Need a custom package?{' '}
          <button
            onClick={() => scrollTo('#contact')}
            className="text-sky-600 hover:text-sky-700 transition-colors"
          >
            Let us talk
          </button>
          .
        </p>
      </div>
    </section>
  );
}
