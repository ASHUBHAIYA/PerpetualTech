import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, CheckCircle2, Receipt } from 'lucide-react';

const upcoming = [
  {
    icon: FileText,
    title: 'View your Statement of Work',
    description: 'See agreed scope, deliverables, and milestones in one place.',
  },
  {
    icon: Clock,
    title: 'Track project timelines',
    description: 'Follow progress against the schedule laid out in your SOW.',
  },
  {
    icon: CheckCircle2,
    title: 'Approve deliverables',
    description: 'Review and sign off on milestones as they are completed.',
  },
  {
    icon: Receipt,
    title: 'Access invoices',
    description: 'Download invoices and payment history tied to your project.',
  },
];

export default function SOWPortal() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
      <div className="container-max max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
          Client Portal
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          SOW Portal
        </h1>
        <p className="text-slate-600 leading-relaxed max-w-xl mb-10">
          A dedicated space for active clients to track their Statement of
          Work, project milestones, and invoices. This portal is currently
          being rolled out to clients on a per-project basis.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {upcoming.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
            >
              <item.icon className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Existing client?
            </p>
            <p className="text-sm text-slate-600">
              Reach out to your project contact and we'll get you portal
              access for your active engagement.
            </p>
          </div>
          <a
            href="mailto:contact@authorizetech.in"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-sm font-medium text-white transition-all duration-200"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}
