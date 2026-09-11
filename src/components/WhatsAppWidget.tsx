import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

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
    window.open(`https://wa.me/9198871217486?text=${text}`, '_blank');
    setMessage('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl animate-slide-up">
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border-b border-emerald-100">
            <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
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
          <MessageCircle className="w-6 h-6 text-white" />
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
