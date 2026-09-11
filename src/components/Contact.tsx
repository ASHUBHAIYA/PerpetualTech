import { useState } from 'react';
import {
  User,
  Mail,
  Building2,
  Wallet,
  CheckCircle2,
  X,
  Loader2,
  Send,
  AlertCircle,
} from 'lucide-react';

const budgetRanges = [
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹3,00,000',
  '₹3,00,000 - ₹5,00,000',
  '₹5,00,000+',
];

const serviceOptions = [
  { key: 'web', label: 'Web Development' },
  { key: 'cloud', label: 'Cloud / DevOps' },
  { key: 'marketing', label: 'Ads / Marketing' },
];

export default function Contact() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    company: '',
    budget_range: '',
    services: [] as string[],
    project_description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const toggleService = (key: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(key)
        ? prev.services.filter((s) => s !== key)
        : [...prev.services, key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const text = await response.text();
      let data: { error?: string } = {};

      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = { error: text };
        }
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            (response.status === 404
              ? 'API route not found. Make sure Wrangler is serving the API.'
              : `Server error: HTTP ${response.status}`)
        );
      }

      setStatus('success');
      setForm({
        full_name: '',
        email: '',
        company: '',
        budget_range: '',
        services: [],
        project_description: '',
      });
    } catch (error: unknown) {
      setStatus('error');
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }
    }
  };

  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500/30 transition-all duration-200';

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-100/40 rounded-full blur-[120px]" />

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-xs text-slate-600 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              Project Intake
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
              Let us Build{' '}
              <span className="text-gradient-blue">Something Resilient</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Tell us about your project and we will get back to you within 24 hours
              with a tailored proposal. No templates, no fluff — just a clear path
              forward.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email us at</div>
                  <a
                    href="mailto:contact@perpetualtech.in"
                    className="text-sm text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    contact@perpetualtech.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Response time</div>
                  <div className="text-sm text-slate-900">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Full Name <span className="text-sky-600">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    placeholder="John Doe"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Work Email <span className="text-sky-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Company / Brand Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc."
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <Wallet className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={form.budget_range}
                    onChange={(e) => setForm({ ...form, budget_range: e.target.value })}
                    className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Service Requirements <span className="text-sky-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((s) => {
                    const active = form.services.includes(s.key);
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => toggleService(s.key)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          active
                            ? 'bg-sky-50 border border-sky-300 text-sky-700'
                            : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center ${
                            active
                              ? 'bg-sky-600 text-white'
                              : 'border border-slate-300'
                          }`}
                        >
                          {active && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  value={form.project_description}
                  onChange={(e) => setForm({ ...form, project_description: e.target.value })}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Project Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success modal */}
      {status === 'success' && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setStatus('idle')}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl shadow-xl max-w-md w-full p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setStatus('idle')}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Inquiry Received!</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you for reaching out. Our team will review your project
              requirements and get back to you within 24 hours with a tailored
              proposal.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
