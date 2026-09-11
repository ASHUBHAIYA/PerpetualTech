import { Globe, Award, Clock, Zap, Shield } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects Shipped', icon: Award },
  { value: '99.99%', label: 'Uptime SLA', icon: Clock },
  { value: '5+', label: 'Years Experience', icon: Zap },
  { value: '24/7', label: 'Monitoring & Support', icon: Shield },
];

const values = [
  {
    title: 'Resilience First',
    description:
      'Every system we build is designed for failure recovery, graceful degradation, and zero-downtime scaling.',
    icon: Shield,
  },
  {
    title: 'Global Delivery',
    description:
      'Based in India, delivering worldwide. We work across time zones to keep your projects moving.',
    icon: Globe,
  },
  {
    title: 'Engineering Excellence',
    description:
      'We write code we are proud of — typed, tested, documented, and built to last for years.',
    icon: Zap,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              About PerpetualTech
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-slate-900">
              Engineering Partners for{' '}
              <span className="text-gradient-blue">Ambitious Teams</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              PerpetualTech is a cloud engineering and web development agency
              that helps businesses architect, deploy, and scale
              high-performance digital systems. We combine deep technical
              expertise with a product mindset to deliver infrastructure that
              does not just work — it thrives under pressure.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From custom Next.js applications to AWS cloud architecture to
              performance marketing infrastructure, we are the engineering partner
              that treats your systems like our own.
            </p>

            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card glass-card-hover p-6 lg:p-8 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-sky-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-1 text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
