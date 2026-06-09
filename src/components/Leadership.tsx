import { leadershipData } from '../data';
import { ShieldAlert, Users2, Compass, Award, ExternalLink, Calendar, Code } from 'lucide-react';

export default function Leadership() {
  const getLeadershipIcon = (role: string) => {
    if (role.includes('Co-Chair')) return <Users2 className="w-5 h-5 text-amber-500" />;
    if (role.includes('Head')) return <Compass className="w-5 h-5 text-amber-500" />;
    if (role.includes('Volunteer')) return <Code className="w-5 h-5 text-amber-500" />;
    return <Award className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Title row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users2 className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">COMMUNITY SERVICE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Leadership & Community
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // STEWARDING EVENTS & FOSTERING TECH LITERACY CAMPAIGNS.
          </div>
        </div>

        {/* Community Grid */}
        <div id="leadership-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {leadershipData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-tr from-slate-950 to-slate-900/40 border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-between group hover:scale-[1.01]"
            >
              <div className="space-y-4">
                {/* Icon & Badge row */}
                <div className="flex justify-between items-center gap-3">
                  <div className="p-3 bg-slate-950 border border-slate-900/80 rounded-2xl flex items-center justify-center shrink-0">
                    {getLeadershipIcon(item.role)}
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-mono text-[9px] uppercase tracking-wide font-black">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-amber-500 transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-xs text-slate-400 font-mono">
                    {item.organization}
                  </h4>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-sans pt-1">
                  {item.details}
                </p>
              </div>

              {/* Decorative bottom stamp */}
              <div className="pt-4 mt-6 border-t border-slate-900/50 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>IM_CHAPTER_RECS</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-amber-500">
                  Active Member <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
