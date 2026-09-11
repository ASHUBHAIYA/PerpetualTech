import { useState } from 'react';
import {
  Code2,
  Cloud,
  Megaphone,
  ShieldCheck,
  Monitor,
  Gauge,
  GitMerge,
  Server,
  Network,
  Search,
  BarChart3,
  Mail,
  Target,
  Zap,
  RefreshCw,
  Lock,
  HardDriveDownload,
  Bell,
  ArrowUpRight,
  Container,
} from 'lucide-react';

type ServiceKey = 'web' | 'cloud' | 'marketing' | 'managed';

const services: Record<
  ServiceKey,
  {
    title: string;
    icon: typeof Code2;
    description: string;
    features: { label: string; icon: typeof Monitor }[];
  }
> = {
  web: {
    title: 'Modern Web & Frontend Engineering',
    icon: Code2,
    description:
      'Custom Next.js & React applications engineered for speed, scalability, and conversion.',
    features: [
      { label: 'Custom Next.js & React Applications', icon: Code2 },
      { label: 'Performance Optimization', icon: Gauge },
      { label: 'Core Web Vitals < 1s', icon: Zap },
      { label: 'API Integrations', icon: GitMerge },
    ],
  },
  cloud: {
    title: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    description:
      'Production-grade cloud architecture with zero-downtime deployments and enterprise security.',
    features: [
      { label: 'AWS / VPS Architectures', icon: Server },
      { label: 'Docker Containerization', icon: Container },
      { label: 'Zero-Downtime GitHub Actions CI/CD', icon: GitMerge },
      { label: 'Nginx Reverse Proxy', icon: Network },
      { label: 'Cloudflare Enterprise Caching', icon: ShieldCheck },
    ],
  },
  marketing: {
    title: 'Performance Marketing & Conversion Infrastructure',
    icon: Megaphone,
    description:
      'Data-driven ad campaigns and tracking infrastructure built for measurable ROI.',
    features: [
      { label: 'Google Search Ads (PPC)', icon: Search },
      { label: 'Meta Ads Management', icon: BarChart3 },
      { label: 'High-Converting Landing Pages', icon: Target },
      { label: 'Meta Pixel + GA4 Server-Side Tracking (CAPI)', icon: Mail },
    ],
  },
  managed: {
    title: 'Managed Cloud & Retainers',
    icon: ShieldCheck,
    description:
      'Ongoing maintenance, monitoring, and iteration to keep your systems running flawlessly.',
    features: [
      { label: '24/7 Uptime Monitoring', icon: Bell },
      { label: 'Automated Offsite Database Backups', icon: HardDriveDownload },
      { label: 'Security Patches', icon: Lock },
      { label: 'Monthly Feature Iteration Retainers', icon: RefreshCw },
    ],
  },
};

const tabs: { key: ServiceKey; label: string; icon: typeof Code2 }[] = [
  { key: 'web', label: 'Web & Frontend', icon: Code2 },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { key: 'marketing', label: 'Marketing & Conversion', icon: Megaphone },
  { key: 'managed', label: 'Managed Cloud', icon: ShieldCheck },
];

export default function Services() {
  const [active, setActive] = useState<ServiceKey>('web');
  const current = services[active];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            Core Service Pillars
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Everything You Need to{' '}
            <span className="text-gradient-blue">Build &amp; Scale</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Four pillars of engineering excellence — from frontend craftsmanship
            to cloud infrastructure to growth marketing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === tab.key
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-card p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
              <current.icon className="w-7 h-7 text-sky-600" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-slate-900">
                {current.title}
              </h3>
              <p className="text-slate-600">{current.description}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {current.features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white transition-all duration-200"
              >
                <feature.icon className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm text-slate-700">{feature.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
