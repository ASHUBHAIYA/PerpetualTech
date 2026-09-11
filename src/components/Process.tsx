import {
  ClipboardCheck,
  Hammer,
  ShieldCheck,
  Rocket,
  FileText,
  GitBranch,
  Lock,
  Globe,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Architectural Audit & Scope',
    description:
      'Comprehensive intake and SOW agreement. We audit your existing infrastructure, define success metrics, and architect the roadmap.',
    icon: ClipboardCheck,
    details: ['Intake & Discovery', 'SOW Agreement', 'Architecture Blueprint'],
    detailIcons: [FileText, ClipboardCheck, GitBranch],
  },
  {
    number: '02',
    title: 'Prototype & Build',
    description:
      'Component-driven development with isolated staging builds. Every feature is built modular, tested in isolation, and reviewed before merge.',
    icon: Hammer,
    details: ['Component-Driven Dev', 'Isolated Staging Builds', 'Code Review'],
    detailIcons: [Hammer, GitBranch, ClipboardCheck],
  },
  {
    number: '03',
    title: 'CI/CD & Cloud Hardening',
    description:
      'Dockerizing workflows, SSL configuration, and automated testing pipelines. Security and reliability baked into every deployment.',
    icon: ShieldCheck,
    details: ['Dockerized Workflows', 'SSL Configuration', 'Automated Testing'],
    detailIcons: [GitBranch, Lock, ShieldCheck],
  },
  {
    number: '04',
    title: 'Live Deployment & Scale',
    description:
      'DNS cutover, 14-day warranty, and ongoing performance retainers. We do not just ship — we stand behind every deployment.',
    icon: Rocket,
    details: ['DNS Cutover', '14-Day Warranty', 'Performance Retainers'],
    detailIcons: [Globe, ShieldCheck, Rocket],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative bg-white">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Execution Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            From Scope to Scale in{' '}
            <span className="text-gradient-blue">4 Steps</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A proven, transparent process that de-risks every engagement and
            delivers predictable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="glass-card glass-card-hover p-6 h-full relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, j) => {
                    const DetailIcon = step.detailIcons[j];
                    return (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <DetailIcon className="w-3.5 h-3.5 text-emerald-600" />
                        {detail}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
