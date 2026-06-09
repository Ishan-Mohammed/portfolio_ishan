import { useState } from 'react';
import { aiLearningJourney } from '../data';
import { Sparkles, Brain, Code2, Cpu, Landmark, ShieldAlert, Star, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AIJourney() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedToolIdx, setSelectedToolIdx] = useState<number>(0);

  const activeTool = aiLearningJourney[selectedToolIdx];

  // Helper mapping logo names to standard tech indicators
  const getToolLogoDesign = (name: string) => {
    switch (name) {
      case 'Google Gemini': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Claude (Anthropic)': return <Brain className="w-6 h-6 text-rose-400" />;
      case 'GPT-4o (OpenAI)': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'DeepSeek': return <Code2 className="w-6 h-6 text-indigo-400" />;
      default: return <Landmark className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="ai-journey" className="py-24 relative overflow-hidden bg-slate-950/20 border-b border-slate-900/55">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Title row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">RESEARCH INDEX</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              My AI Learning Journey
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // INVESTIGATING CORE INTELLIGENCE ENGINES FOR DIGITAL COPIES.
          </div>
        </div>

        {/* Dashboard split structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Futuristic Grid of LLMs / list */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                ACTIVE COGNITIVE MODELS RESEARCHED
              </p>

              <div className="space-y-2.5">
                {aiLearningJourney.map((tool, idx) => {
                  const isSelected = selectedToolIdx === idx;
                  return (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedToolIdx(idx)}
                      className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer text-left clickable ${
                        isSelected 
                          ? 'bg-amber-500 text-slate-950 border-transparent shadow-lg shadow-amber-500/10 scale-[1.01]' 
                          : 'bg-slate-950/40 text-slate-400 border-slate-900 hover:border-slate-850 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl border flex items-center justify-center ${isSelected ? 'bg-slate-950 border-white/5 saturate-150' : 'bg-slate-900 border-slate-850'}`}>
                          {getToolLogoDesign(tool.name)}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm tracking-tight">{tool.name}</h4>
                          <span className={`text-[9px] font-mono leading-none block mt-0.5 ${isSelected ? 'text-slate-950/70' : 'text-slate-500'}`}>
                            {tool.sentiment}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold leading-none">
                        <span>LEARNED</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick footer alert inside left-rail */}
            <div className="p-4 rounded-2xl border border-slate-900/80 bg-slate-950/80 text-xs font-mono text-slate-500 mt-6 md:mt-0 flex gap-3 text-left">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Tested AI frameworks during Tomatrix Technologies workflows, establishing custom workflows for content strategies.</span>
            </div>
          </div>

          {/* Right panel: Futuristic holographic details console */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedToolIdx}
                className="w-full p-6 sm:p-8 rounded-3xl bg-[#020617] border border-slate-900 shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22 }}
              >
                {/* Simulated ambient light grids */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[70px] pointer-events-none" />

                <div className="space-y-6 text-left relative z-10">
                  {/* Console Header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {getToolLogoDesign(activeTool.name)}
                      </div>
                      <div>
                        <h3 className="font-display font-black text-xl text-white">{activeTool.name}</h3>
                        <span className="text-[10px] text-amber-400 font-mono tracking-widest">{activeTool.sentiment}</span>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* General research log details */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">RESEARCH PROFILE</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">{activeTool.description}</p>
                  </div>

                  {/* Outcomes detail log */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">COGNITIVE OUTCOMES LEARNED</h4>
                    <p className="text-amber-400/90 text-sm leading-relaxed font-sans font-medium italic bg-amber-500/5 border border-amber-500/10 p-3.5 rounded-2xl">
                      &ldquo; {activeTool.learningOutcome} &rdquo;
                    </p>
                  </div>

                  {/* Tags cluster */}
                  <div className="space-y-2 pt-2 border-t border-slate-900">
                    <h4 className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">CLASSIFICATION KEYWORDS</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeTool.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-slate-950 border border-slate-900 rounded font-mono text-[9px] text-slate-400"
                        >
                          # {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Micro tech line stamp */}
                <div className="pt-6 mt-6 border-t border-slate-900/50 flex justify-between items-center text-[9px] text-slate-500 font-mono relative z-10">
                  <span>AI_ENGINE_INDEX: RM_2026</span>
                  <span className="text-amber-500/50 animate-pulse">● SECURE HANDSHAKE ACTIVE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
