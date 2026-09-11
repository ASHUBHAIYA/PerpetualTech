import { useState } from 'react';
import {
  Code2,
  Cloud,
  BarChart3,
  Layers,
  Container,
  Server,
  Database,
  GitBranch,
  Network,
  Gauge,
  Tag,
} from 'lucide-react';

type Category = 'all' | 'frontend' | 'cloud' | 'tracking';

const techItems: {
  name: string;
  category: Exclude<Category, 'all'>;
  icon: typeof Code2;
  color: string;
}[] = [
  { name: 'Next.js', category: 'frontend', icon: Layers, color: 'text-slate-900' },
  { name: 'React', category: 'frontend', icon: Code2, color: 'text-sky-600' },
  { name: 'TypeScript', category: 'frontend', icon: Code2, color: 'text-blue-600' },
  { name: 'Tailwind CSS', category: 'frontend', icon: Layers, color: 'text-cyan-600' },
  { name: 'Docker', category: 'cloud', icon: Container, color: 'text-sky-600' },
  { name: 'Nginx', category: 'cloud', icon: Network, color: 'text-emerald-600' },
  { name: 'AWS', category: 'cloud', icon: Server, color: 'text-orange-600' },
  { name: 'GitHub Actions', category: 'cloud', icon: GitBranch, color: 'text-slate-700' },
  { name: 'PostgreSQL', category: 'cloud', icon: Database, color: 'text-sky-600' },
  { name: 'Cloudflare', category: 'cloud', icon: Network, color: 'text-orange-600' },
  { name: 'Google Tag Manager', category: 'tracking', icon: Tag, color: 'text-amber-600' },
  { name: 'GA4', category: 'tracking', icon: BarChart3, color: 'text-orange-600' },
  { name: 'Meta Pixel', category: 'tracking', icon: BarChart3, color: 'text-sky-600' },
  { name: 'Server-Side CAPI', category: 'tracking', icon: Gauge, color: 'text-emerald-600' },
];

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'tracking', label: 'Tracking & Analytics' },
];

export default function TechStack() {
  const [filter, setFilter] = useState<Category>('all');

  const filtered =
    filter === 'all'
      ? techItems
      : techItems.filter((t) => t.category === filter);

  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            Enterprise Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Built with{' '}
            <span className="text-gradient-blue">Industry-Leading</span> Tools
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A curated stack chosen for performance, reliability, and developer
            velocity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="glass-card glass-card-hover p-5 flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-all duration-300">
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
