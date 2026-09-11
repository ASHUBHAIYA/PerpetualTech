import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  Activity,
  Container,
  Shield,
  GitBranch,
  Server,
  Cpu,
  HardDrive,
  Wifi,
} from 'lucide-react';

const metrics = [
  { label: 'Uptime', value: '99.99%', icon: Activity, color: 'text-emerald-600' },
  { label: 'Build', value: 'GitHub Actions', icon: GitBranch, color: 'text-sky-600' },
  { label: 'Container', value: 'Docker Active', icon: Container, color: 'text-cyan-600' },
  { label: 'SSL', value: "Let's Encrypt", icon: Shield, color: 'text-emerald-600' },
];

const terminalLines = [
  { text: '$ docker compose up -d --build', type: 'cmd' },
  { text: 'Building frontend... [OK]', type: 'out' },
  { text: 'Building API server... [OK]', type: 'out' },
  { text: 'Provisioning PostgreSQL... [OK]', type: 'out' },
  { text: 'Configuring Nginx reverse proxy... [OK]', type: 'out' },
  { text: 'Deploying to AWS EC2... [OK]', type: 'out' },
  { text: 'SSL certificate verified ✓', type: 'success' },
  { text: 'Health check passed ✓', type: 'success' },
  { text: 'Deployment live at authorizetech.in', type: 'success' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cpuVal, setCpuVal] = useState(23);
  const [memVal, setMemVal] = useState(41);
  const [netVal, setNetVal] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuVal(Math.floor(Math.random() * 30 + 15));
      setMemVal(Math.floor(Math.random() * 25 + 30));
      setNetVal(Math.floor(Math.random() * 40 + 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-200/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-700">
                Enterprise Cloud &amp; Web Engineering
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              We Architect, Deploy &amp; Scale{' '}
              <span className="text-gradient-blue">High-Performance</span>{' '}
              Digital Systems.
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Full-stack Next.js web applications, automated cloud infrastructure
              (Docker, AWS, CI/CD), and ROI-focused digital growth engines built
              for ambitious businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollTo('#contact')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#tech-stack')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition-all duration-300"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                View Architecture &amp; Stack
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '<1s', label: 'Core Web Vitals' },
                { value: '50+', label: 'Projects Shipped' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: DevOps Terminal Dashboard */}
          <div className="animate-slide-up">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
              {/* Terminal header - dark inner window */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 ml-2 font-mono">
                  deploy@Authorizetech: ~
                </span>
              </div>

              {/* Terminal body - dark */}
              <div className="p-4 h-56 overflow-hidden font-mono text-xs space-y-1 bg-slate-900">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.type === 'cmd'
                        ? 'text-sky-400'
                        : line.type === 'success'
                          ? 'text-emerald-400'
                          : 'text-slate-400'
                    }
                  >
                    {line.text}
                  </div>
                ))}
                {visibleLines >= terminalLines.length && (
                  <span className="text-sky-400 animate-blink">▊</span>
                )}
              </div>

              {/* Metrics grid - light */}
              <div className="grid grid-cols-2 gap-px bg-slate-100 border-t border-slate-200">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white p-4 flex items-center gap-3">
                    <m.icon className={`w-5 h-5 ${m.color}`} />
                    <div>
                      <div className="text-xs text-slate-500">{m.label}</div>
                      <div className="text-sm font-semibold text-slate-900">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live gauges - light */}
              <div className="border-t border-slate-200 p-4 space-y-3 bg-white">
                {[
                  { label: 'CPU', val: cpuVal, icon: Cpu, color: 'bg-sky-500' },
                  { label: 'Memory', val: memVal, icon: HardDrive, color: 'bg-cyan-500' },
                  { label: 'Network', val: netVal, icon: Wifi, color: 'bg-emerald-500' },
                ].map((g) => (
                  <div key={g.label} className="flex items-center gap-3">
                    <g.icon className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 w-16">{g.label}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${g.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${g.val}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 font-mono w-10 text-right">
                      {g.val}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-200 bg-emerald-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-emerald-700 font-medium">
                    All systems operational
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Server className="w-3 h-3" />
                  us-east-1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
