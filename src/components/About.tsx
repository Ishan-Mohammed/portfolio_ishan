import { Sparkles, MapPin, Mail, Award, GraduationCap, Calendar, FileCode2 } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'motion/react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
      title: 'Academic Focus',
      description: 'Pursuing B.Tech CSE with deep concentrations in advanced algorithms and systems design.',
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-amber-500" />,
      title: 'Full Stack & Web3',
      description: 'Passionate about engineering secure backend routers, interactive client nodes, and Solidity smart contracts.',
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: 'Problem Solver',
      description: 'Competitive coding concepts, data structures, and hackathon workflow management.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">BIOGRAPHY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              About Me
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // SECURING SOLUTIONS BY EXPLORING EMERGING TECHNOLOGIES.
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline Introduction Card */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white light:text-slate-900">
              Pursuing Computer Science at College of Engineering Perumon
            </h3>

            <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {personalInfo.detailedBio}
            </p>

            {/* Quick Metrics display list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-900 light:border-slate-200 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">LOCATION</div>
                  <div className="text-xs font-semibold text-white light:text-slate-900">Pathanapuram, Kollam</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-900 light:border-slate-200 backdrop-blur-md">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">EMAIL</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-white light:text-slate-900 hover:text-amber-400 truncate block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-900 light:border-slate-200 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">ACADEMIC TIMEFRAME</div>
                  <div className="text-xs font-semibold text-white light:text-slate-900">2024 – 2028 (B.Tech CSE)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-900 light:border-slate-200 backdrop-blur-md">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">GPA PERFORMANCE</div>
                  <div className="text-xs font-semibold text-amber-400 font-mono">9.11 / 10 Cumulative</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core competency blocks */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
              CORE PRINCIPLES & VALUES
            </p>

            <div className="space-y-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900/40 to-slate-950 border border-slate-900 light:border-slate-200 hover:border-amber-500/10 transition-all flex gap-4 text-left group hover:scale-[1.01]"
                >
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white light:text-slate-900 group-hover:text-amber-400 light:group-hover:text-amber-500 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
