import { useState } from 'react';
import { skillsData } from '../data';
import { 
  Code, // Programming
  Layout, // Frontend
  Server, // Backend
  Database, // Database
  Settings2, // Tools
  Sparkles, // AI Tools
  Lock, // Blockchain
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai-tools' | 'blockchain'>('all');

  const filterCategories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'programming', label: 'Programming' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Workflow Tools' },
    { id: 'ai-tools', label: 'AI/Prompt Eng.' },
    { id: 'blockchain', label: 'Blockchain Web3' }
  ];

  // Map category to accurate lucide icons
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'programming': return <Code className="w-4 h-4" />;
      case 'frontend': return <Layout className="w-4 h-4" />;
      case 'backend': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'database': return <Database className="w-4 h-4 text-sky-400" />;
      case 'tools': return <Settings2 className="w-4 h-4 text-purple-400" />;
      case 'ai-tools': return <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />;
      case 'blockchain': return <Lock className="w-4 h-4 text-pink-400" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryThemeColor = (cat: string) => {
    switch (cat) {
      case 'programming': return 'border-amber-500/20 text-amber-500 bg-amber-500/5';
      case 'frontend': return 'border-blue-500/20 text-blue-400 bg-blue-500/5';
      case 'backend': return 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5';
      case 'database': return 'border-sky-500/20 text-sky-400 bg-sky-500/5';
      case 'tools': return 'border-purple-500/20 text-purple-400 bg-purple-500/5';
      case 'ai-tools': return 'border-amber-400/20 text-amber-400 bg-amber-400/5';
      case 'blockchain': return 'border-pink-500/20 text-pink-400 bg-pink-500/5';
      default: return 'border-slate-800 text-slate-400 bg-slate-900/45';
    }
  };

  const getPercentageBarClass = (cat: string) => {
    switch (cat) {
      case 'programming': return 'bg-amber-500';
      case 'frontend': return 'bg-blue-500';
      case 'backend': return 'bg-emerald-500';
      case 'database': return 'bg-sky-500';
      case 'tools': return 'bg-purple-500';
      case 'ai-tools': return 'bg-amber-400';
      case 'blockchain': return 'bg-pink-500';
      default: return 'bg-slate-400';
    }
  };

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(v => v.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Title structure */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">SKILL MATRIX</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Technical Competencies
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // INTERACTIVE COMFORT INDEX AND RECRUITER FILTERS.
          </div>
        </div>

        {/* Dashboard Filter Hub */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5 justify-start">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 text-xs font-display font-medium rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 clickable ${
                activeFilter === cat.id
                  ? 'bg-amber-500 text-slate-950 border-transparent font-bold shadow-lg shadow-amber-500/10'
                  : 'bg-slate-950/40 text-slate-400 border-slate-900 hover:border-slate-800 hover:text-white'
              }`}
            >
              {cat.id !== 'all' && getCategoryIcon(cat.id)}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-5 bg-gradient-to-tr from-slate-950 to-slate-900/60 light:from-slate-50 border border-slate-900 light:border-slate-200 hover:border-slate-800 light:hover:border-slate-300 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden select-none hover:scale-[1.02]"
              >
                {/* Subtle light background line highlight on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-400/0 to-amber-300/0 group-hover:from-amber-500 group-hover:via-amber-400 group-hover:to-amber-300 transition-all duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-sm text-white light:text-slate-900 group-hover:text-amber-500 light:group-hover:text-amber-600 transition-colors">
                    {skill.name}
                  </span>
                  <div className={`p-2 rounded-lg border flex items-center justify-center shrink-0 ${getCategoryThemeColor(skill.category)}`}>
                    {getCategoryIcon(skill.category)}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>PROFICIENCY</span>
                    <span className="font-bold text-white light:text-slate-800">{skill.level}%</span>
                  </div>
                  {/* Gauge bar container */}
                  <div className="w-full h-1 bg-slate-900 light:bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${getPercentageBarClass(skill.category)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative footer */}
        <p className="text-center font-mono text-[10px] text-slate-500 mt-10">
          * Comfort level calculations based on academic labs, private deployments, and direct internship projects.
        </p>
      </div>
    </section>
  );
}
