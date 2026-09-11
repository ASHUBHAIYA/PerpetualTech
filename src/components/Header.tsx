import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Boxes } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-600 to-cyan-500 flex items-center justify-center">
              <Boxes className="w-5 h-5 text-white" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-dot ring-2 ring-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Authorize<span className="text-sky-600">Tech</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            WhatsApp
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-sm font-medium text-white transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Book Strategy Call
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-700 hover:text-slate-900"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left py-3 text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-100"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4 mb-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                WhatsApp
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-sm font-medium text-white"
              >
                <Phone className="w-4 h-4" />
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
