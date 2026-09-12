import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
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

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          {title}
        </h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="glass-card p-8 lg:p-10 space-y-8 legal-content">
          {children}
        </div>
      </div>
    </section>
  );
}
