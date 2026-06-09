import { Calendar, Heart, ShieldAlert, Sparkles, ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="py-12 border-t border-slate-900/50 bg-slate-950/40 relative overflow-hidden text-center z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
        
        {/* Brand credit column */}
        <div className="space-y-2 text-center md:text-left self-center md:self-auto">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-bold text-slate-950 text-xs tracking-tighter shadow-md">
              IM
            </div>
            <span className="font-display font-black text-sm tracking-tight text-white hover:text-amber-400 cursor-default transition-colors">
              Ishan Mohammed
            </span>
          </div>
          <p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-wider">
            B.TECH CS student • College of Engineering Perumon • 2024 - 28
          </p>
        </div>

        {/* Dynamic citation quote */}
        <div className="max-w-xs text-center font-mono text-[11px] text-slate-500 leading-relaxed">
          &ldquo; Crafting clean components, robust architectures, and Solidity parameters, exploring emerging tech one line at a time. &rdquo;
        </div>

        {/* Action column (Back to top / copy details) */}
        <div className="flex flex-col items-center md:items-end gap-3 shrink-0 self-center md:self-auto">
          <button
            onClick={scrollBackToTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white font-mono text-xs rounded-xl transition-all shadow-md cursor-pointer clickable"
            title="Scroll to Top"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-4 h-4 text-amber-500 animate-bounce" />
          </button>

          <p className="text-[10px] font-mono text-slate-500">
            © 2026 Ishan Mohammed • Pathanapuram, Kollam
          </p>
        </div>

      </div>
    </footer>
  );
}
