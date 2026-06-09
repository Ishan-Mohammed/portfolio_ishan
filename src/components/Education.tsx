import { GraduationCap, Calendar, Award, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import { educationData } from '../data';

export default function Education() {
  const roadmapStages = [
    {
      period: '2024 - 2025',
      title: 'Foundation & Logic Synthesis',
      institution: 'College of Engineering Perumon',
      details: 'Started B.Tech CSE. Core studies in structured programming languages (C), Advanced Calculus, and Logical Physics. Set up basic development workflows and integrated with campus technical teams.',
      milestone: 'Maintained 9.11 GPA • Onboarded into CSI Branch & TinkerHub network',
      active: false,
    },
    {
      period: '2025 - 2026',
      title: 'System Architecture & Applied Development',
      institution: 'College of Engineering Perumon',
      details: 'Transitioned towards Object-Oriented Frameworks (Java), structured query languages (SQL), and advanced React web interfaces. Completed Tomatrix Technologies AI internship and Zyra Industrial Hackathon.',
      milestone: 'CSI Event Co-Chair Appointment • Won Zyra Hackathon',
      active: true,
    },
    {
      period: '2026 - 2028 (Future Roadmap)',
      title: 'Advanced Core, Cryptography & Capstone Deployment',
      institution: 'College of Engineering Perumon',
      details: 'Deep engagement in Blockchain smart contracts (Solidity, Hardhat), Distributed systems, and large language model engineering. Designing graduation capstone system.',
      milestone: 'B.Tech Completion & Industry Placement Target',
      active: false,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">EDUCATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Academic Roadmap
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // TRACKING ACADEMIC EXCELLENCE & FUTURE SPECIALIZATIONS.
          </div>
        </div>

        {/* Education Timeline card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Educational Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-slate-100 border border-slate-900 light:border-slate-200 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              {/* Background glowing gradient card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform pointer-events-none" />

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 w-fit mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="space-y-4 text-left">
                <span className="font-mono text-xs text-amber-500 font-bold">{educationData.duration}</span>
                <h3 className="font-display text-xl font-bold text-white light:text-slate-900">
                  {educationData.degree}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300 light:text-slate-700">
                  {educationData.field}
                </h4>

                <div className="pt-2 space-y-2.5 text-xs text-slate-400 font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{educationData.school}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>CGPA Score: <strong className="text-amber-400 font-mono">{educationData.score}</strong></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Academic Credential Summary Banner */}
            <div className="p-5 rounded-2xl border border-slate-900 light:border-slate-200 text-left space-y-2 bg-slate-950 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Academic Standing</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Ranked in the top percentile of the computer science cluster. Zero backlogs with regular practical labs, technical project deployments, and leadership contributions.
              </p>
            </div>
          </div>

          {/* Interactive timeline roadmap details */}
          <div className="lg:col-span-8 text-left space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-0.5 before:bg-slate-900 light:before:bg-slate-200">
            {roadmapStages.map((stage, idx) => (
              <div key={idx} className="relative pl-12 group transition-all">
                {/* Timeline node */}
                <div
                  className={`absolute left-0 top-1.5 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    stage.active
                      ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-110 z-10'
                      : 'bg-slate-950 border-slate-900 text-slate-400 group-hover:border-amber-500/50 z-10'
                  }`}
                >
                  <span className="text-xs font-mono font-bold">{idx + 1}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display font-bold text-lg text-white light:text-slate-900 group-hover:text-amber-400 light:group-hover:text-amber-500 transition-colors">
                      {stage.title}
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-900 light:bg-slate-100 text-slate-400 border border-slate-800 light:border-slate-200 self-start sm:self-center">
                      {stage.period}
                    </span>
                  </div>

                  <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed max-w-2xl font-sans">
                    {stage.details}
                  </p>

                  <div className="inline-flex items-center gap-2 p-2 px-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-xs font-mono text-amber-500 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{stage.milestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
