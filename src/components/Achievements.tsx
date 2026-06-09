import { useEffect, useState } from 'react';
import { achievementsData } from '../data';
import { Award, Sparkles, CheckCircle2, ChevronRight, Milestone, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'all' | 'hackathon' | 'leadership'>('all');
  
  // Custom counters state to satisfy "Achievement Counter Animation"
  const [hackathonsWon, setHackathonsWon] = useState(0);
  const [hackathonsParticipated, setHackathonsParticipated] = useState(0);
  const [menteesMentored, setMenteesMentored] = useState(0);
  const [completedWorkshops, setCompletedWorkshops] = useState(0);

  useEffect(() => {
    // Basic counter increment timers on mount
    const timerHaks = setInterval(() => {
      setHackathonsWon((p) => {
        if (p >= 1) { clearInterval(timerHaks); return 1; }
        return p + 1;
      });
    }, 150);

    const timerHaksPart = setInterval(() => {
      setHackathonsParticipated((p) => {
        if (p >= 6) { clearInterval(timerHaksPart); return 6; }
        return p + 1;
      });
    }, 120);

    const timerMentees = setInterval(() => {
      setMenteesMentored((p) => {
        if (p >= 75) { clearInterval(timerMentees); return 75; }
        return p + 5;
      });
    }, 40);

    const timerWorkshops = setInterval(() => {
      setCompletedWorkshops((p) => {
        if (p >= 5) { clearInterval(timerWorkshops); return 5; }
        return p + 1;
      });
    }, 120);

    return () => {
      clearInterval(timerHaks);
      clearInterval(timerHaksPart);
      clearInterval(timerMentees);
      clearInterval(timerWorkshops);
    };
  }, []);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">HONORS LOG</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Honors & Recognitions
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // METRIC PERFORMANCE AND TECHNICAL ACHIEVEMENTS.
          </div>
        </div>

        {/* Counter dashboard (Satisfying: "Achievement Counter Animation") */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-[#020617] border border-slate-900 shadow-xl flex items-center gap-5 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 font-bold">
              #1
            </div>
            <div>
              <div className="text-3xl font-black text-white font-mono">{hackathonsWon}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Industrial Win</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#020617] border border-slate-900 shadow-xl flex items-center gap-5 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 font-bold">
              #H
            </div>
            <div>
              <div className="text-3xl font-black text-white font-mono">{hackathonsParticipated}+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Compete Rounds</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#020617] border border-slate-900 shadow-xl flex items-center gap-5 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 font-bold">
              M
            </div>
            <div>
              <div className="text-3xl font-black text-white font-mono">{menteesMentored}+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Peers Mentored</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#020617] border border-slate-900 shadow-xl flex items-center gap-5 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500 font-bold">
              W
            </div>
            <div>
              <div className="text-3xl font-black text-white font-mono">{completedWorkshops}+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Workshops Coordinated</div>
            </div>
          </div>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {achievementsData.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-tr from-slate-950 to-slate-900/60 border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-between group hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center gap-2">
                  <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl">
                    <Milestone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 px-2.5 py-1 bg-slate-900 rounded-full">
                    {ach.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-amber-500 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1 line-clamp-3">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-900/50 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>IM_HONORS_LOG</span>
                <span className="text-amber-500/80 font-black tracking-widest">{ach.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
