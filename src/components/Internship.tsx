import { useState } from 'react';
import { internshipTasks } from '../data';
import { Sparkles, Play, Briefcase, Calendar, ChevronRight, CheckCircle, Flame, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Internship() {
  const [activeTaskId, setActiveTaskId] = useState<number>(1);

  const activeTask = internshipTasks.find(t => t.id === activeTaskId) || internshipTasks[0];

  return (
    <section id="internship" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950/40 to-slate-950/10">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">OFFICIAL EXPERIENCE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              AI Internship Experience
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // INTERNSHIP CREDENTIALS AT TOMATRIX TECHNOLOGIES.
          </div>
        </div>

        {/* Corporate branding header panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-900 backdrop-blur-md flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 shadow-xl select-none">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold tracking-widest uppercase">STABLE BRANDING</span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-mono">Summer Internship 2026</span>
            </div>
            <h3 className="text-xl font-display font-black text-white">Tomatrix Technologies</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans">
              Served as an Engineering Intern researching large language modeling architectures, developing digital copy structures, managing vector branding assets, and coding semantic portfolio interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 shrink-0 font-mono text-left">
            <Flame className="w-8 h-8 text-amber-500 animate-pulse" />
            <div>
              <div className="text-[9px] text-slate-500 uppercase tracking-widest">PERFORMANCE ID</div>
              <div className="text-xs font-black text-white">TOMAT_AI_INTERN_026</div>
            </div>
          </div>
        </div>

        {/* Dynamic Timeline Splitter layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Vertical Task milestones indexing (Left Sidebar controller) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
              CHRONOLOGICAL TIMELINE TASKS
            </p>
            
            <div className="space-y-3.5 relative before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:bg-slate-900">
              {internshipTasks.map((task) => {
                const isActive = task.id === activeTaskId;
                return (
                  <button
                    key={task.id}
                    onClick={() => setActiveTaskId(task.id)}
                    className={`w-full p-4 rounded-2xl border flex items-center gap-4 text-left relative z-10 transition-all cursor-pointer clickable ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 border-transparent shadow-lg shadow-amber-500/10 scale-[1.02]'
                        : 'bg-slate-950/50 text-slate-400 border-slate-900 hover:border-slate-850 hover:text-white'
                    }`}
                  >
                    {/* Number index badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isActive
                          ? 'bg-slate-950 text-amber-500 shadow-md'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      0{task.id}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className={`text-[10px] font-mono leading-none mb-1 ${isActive ? 'text-slate-950/70' : 'text-slate-500'}`}>
                        TASK MILESTONE_0{task.id}
                      </div>
                      <h4 className="text-sm font-bold font-display truncate">
                        {task.title}
                      </h4>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'rotate-90 text-slate-950' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Task Details viewer dashboard (Right column) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTaskId}
                className="p-6 sm:p-8 rounded-3xl bg-[#020617] border border-slate-900 shadow-2xl relative overflow-hidden backdrop-blur-md"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {/* Embedded decorative circuit paths */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Task Header info */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-4.5 gap-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-amber-500 font-black">
                        ACTIVE METRIC: {activeTask.metric}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-white mt-1">
                        {activeTask.title}
                      </h3>
                    </div>
                    <span className="px-3.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px]">
                      TOMAT_M0{activeTask.id}
                    </span>
                  </div>

                  {/* Task general synopsis */}
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">TASK PROFILE AND OBJECTIVE</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">{activeTask.description}</p>
                  </div>

                  {/* Specific task executions lists */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">COMPLETED TASK DELIVERABLES</h4>
                    <div className="space-y-3">
                      {activeTask.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-3 text-sm items-start text-slate-400">
                          <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                          <span className="font-sans text-xs">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Acquired Skills row */}
                  <div className="border-t border-slate-900 pt-5 space-y-2.5">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">SKILLS ACQUIRED IN DRILL</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTask.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-amber-500/5 border border-amber-500/15 rounded-lg text-[10px] font-mono text-amber-400"
                        >
                          # {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
