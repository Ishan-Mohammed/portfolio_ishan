import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 text-center md:text-left max-w-4xl mx-auto">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Mail className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">DIRECT CHANNELS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Get in Touch
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // INITIATING CORRESPONDENCE FOR WORK OPPORTUNITIES.
          </div>
        </div>

        {/* Contact Dashboard - Centered elegant card layout */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#020617] border border-slate-900 shadow-2xl relative overflow-hidden backdrop-blur-md space-y-8 text-left">
            {/* Ambient Background glow layer */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-black text-white">Let&apos;s Build Solutions Together</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-sans">
                Seeking ambitious engineering internships, collaborative industry hackathons, or strategic junior placement contracts. Reach out through any of the direct access vectors below.
              </p>

              {/* Direct channels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-slate-950/70 border border-slate-900 backdrop-blur-md">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase">DIRECT MAIL</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-amber-400 font-semibold truncate block max-w-[180px] sm:max-w-xs">{personalInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-slate-950/70 border border-slate-900 backdrop-blur-md">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase">TELEPHONE CALL</div>
                    <a href="tel:+917306216308" className="text-white hover:text-amber-400 font-semibold block">+91 7306216308</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-slate-950/70 border border-slate-900 backdrop-blur-md">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase">CURRENT LOCATION</div>
                    <span className="text-white font-semibold block">Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels connect panel */}
            <div className="space-y-4 border-t border-slate-900 pt-6">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">SECURE CREDENTIAL HOVERBOARDS</span>
              <div className="flex flex-wrap gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-950/70 border border-slate-900 rounded-2xl text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2 text-xs font-mono clickable"
                >
                  <Github className="w-4 h-4 text-amber-500" /> github/Ishan-Mohammed
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-950/70 border border-slate-900 rounded-2xl text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2 text-xs font-mono clickable"
                >
                  <Linkedin className="w-4 h-4 text-amber-500" /> linkedin/ishan-mohammed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
