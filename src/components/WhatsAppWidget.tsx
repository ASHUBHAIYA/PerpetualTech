import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

function WhatsAppIcon({ className, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.257.59 4.446 1.71 6.374L3.2 28.8l6.6-1.678a12.74 12.74 0 0 0 6.2 1.578h.001c7.07 0 12.8-5.73 12.8-12.8s-5.731-12.7-12.8-12.7zm0 23.36a10.53 10.53 0 0 1-5.37-1.47l-.385-.228-3.917.996 1.045-3.816-.25-.393a10.55 10.55 0 0 1-1.623-5.65c0-5.84 4.76-10.6 10.6-10.6 2.833 0 5.494 1.104 7.495 3.106a10.53 10.53 0 0 1 3.105 7.494c0 5.84-4.76 10.56-10.6 10.56zm5.807-7.926c-.318-.16-1.88-.928-2.172-1.034-.291-.107-.503-.16-.716.16-.212.318-.822 1.033-1.008 1.245-.186.212-.372.239-.69.08-.318-.16-1.342-.494-2.556-1.575-.945-.842-1.582-1.882-1.768-2.2-.186-.318-.02-.49.14-.65.143-.143.318-.372.477-.558.16-.186.212-.318.318-.53.106-.212.053-.398-.027-.558-.08-.16-.716-1.726-.982-2.364-.259-.622-.522-.538-.716-.548-.186-.009-.398-.011-.61-.011-.212 0-.557.08-.849.398-.291.318-1.113 1.088-1.113 2.654 0 1.566 1.14 3.078 1.298 3.29.16.212 2.244 3.426 5.436 4.804.76.328 1.353.524 1.815.671.762.242 1.456.208 2.004.126.611-.091 1.88-.769 2.145-1.512.265-.743.265-1.379.186-1.512-.08-.133-.291-.212-.61-.372z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      message || "Hi AuthorizeTech, I'd like to discuss a project."
    );
    window.open(`https://wa.me/918871217486?text=${text}`, '_blank');
    setMessage('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl animate-slide-up">
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border-b border-emerald-100">
            <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5" color="#059669" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">
                WhatsApp Business
              </div>
              <div className="text-xs text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                Typically replies in minutes
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 mb-4 max-w-[85%]">
              <p className="text-sm text-slate-700">
                Hi! Thanks for reaching out to AuthorizeTech. How can we help you
                build something resilient today?
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && openWhatsApp()}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
              />
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setOpen(!open);
          setShowBadge(false);
        }}
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <WhatsAppIcon className="w-6 h-6" color="#ffffff" />
        )}
        {showBadge && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
            1
          </span>
        )}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
        )}
      </button>
    </div>
  );
}
