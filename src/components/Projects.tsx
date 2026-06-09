import { useState } from 'react';
import { projectsData, personalInfo } from '../data';
import { Project } from '../types';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Github, 
  Sparkles, 
  Layers, 
  Cpu, 
  Coins, 
  Hospital, 
  Utensils, 
  Briefcase, 
  Gamepad2, 
  Terminal,
  Search,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'blockchain' | 'desktop-ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'blockchain', label: 'Blockchain / Web3' },
    { id: 'desktop-ai', label: 'Systems & Analytics' }
  ];

  // Search logic and Category toggle filter
  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pick suitable vectors representing project backgrounds
  const renderProjectVisualMockup = (projId: string) => {
    switch (projId) {
      case 'hospnet':
        return (
          <div className="w-full h-full bg-[#020617] flex flex-col justify-between p-5 text-left border-b border-slate-900 group-hover:bg-[#030712] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center z-10">
              <Hospital className="w-8 h-8 text-teal-400" />
              <span className="text-[9px] font-mono font-bold bg-teal-500/10 text-teal-400 p-1 px-2 rounded-full uppercase">HTTP CLIENT_ROUTERS</span>
            </div>
            <div className="z-10 mt-6 space-y-1.5 font-mono">
              <div className="text-[9px] text-slate-500">&gt;_ GET /api/v1/patients/auth_active</div>
              <div className="text-[10px] text-teal-400/80 font-bold">STATUS: 200 SUCCESS</div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-teal-400" />
              </div>
            </div>
          </div>
        );
      case 'restomgr':
        return (
          <div className="w-full h-full bg-[#020617] flex flex-col justify-between p-5 text-left border-b border-slate-900 group-hover:bg-[#030712] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center z-10">
              <Utensils className="w-8 h-8 text-amber-500" />
              <span className="text-[9px] font-mono font-bold bg-amber-500/10 text-amber-500 p-1 px-2 rounded-full uppercase">JDBC_SQL THREADS</span>
            </div>
            <div className="z-10 mt-6 space-y-1.5 font-mono">
              <div className="text-[9px] text-slate-500">&gt;_ SELECT SUM(sales) FROM orders;</div>
              <div className="text-[10px] text-amber-500/80 font-bold">CALCULATING REVENUE MAPS</div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-amber-500" />
              </div>
            </div>
          </div>
        );
      case 'msmeportal':
        return (
          <div className="w-full h-full bg-[#020617] flex flex-col justify-between p-5 text-left border-b border-slate-900 group-hover:bg-[#030712] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center z-10">
              <Layers className="w-8 h-8 text-blue-400" />
              <span className="text-[9px] font-mono font-bold bg-blue-500/10 text-blue-400 p-1 px-2 rounded-full uppercase">AI METRICS ONBOARDING</span>
            </div>
            <div className="z-10 mt-6 space-y-1.5 font-mono">
              <div className="text-[9px] text-slate-500">&gt;_ POST /api/verify/national_schema</div>
              <div className="text-[10px] text-blue-400/80 font-bold">MSME SCORING: ACTIVE RANK 1</div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div className="w-3/5 h-full bg-blue-400" />
              </div>
            </div>
          </div>
        );
      case 'gamifiedreward':
        return (
          <div className="w-full h-full bg-[#020617] flex flex-col justify-between p-5 text-left border-b border-slate-900 group-hover:bg-[#030712] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center z-10">
              <Coins className="w-8 h-8 text-pink-400" />
              <span className="text-[9px] font-mono font-bold bg-pink-500/10 text-pink-400 p-1 px-2 rounded-full uppercase">EVM SOLIDITY_CONTRACTS</span>
            </div>
            <div className="z-10 mt-6 space-y-1.5 font-mono">
              <div className="text-[9px] text-slate-500">&gt;_ rewardBonus(msg.sender, true);</div>
              <div className="text-[10px] text-pink-400/80 font-bold">GAS LIMIT VERIFIED: 21000</div>
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div className="w-[78%] h-full bg-pink-400" />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-slate-950 flex items-center justify-center border-b border-slate-900">
            <FolderGit2 className="w-12 h-12 text-slate-700 animate-pulse" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/10 border-y border-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Title layout */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FolderGit2 className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="text-slate-400 light:text-slate-500 max-w-sm text-xs font-mono tracking-wider uppercase">
            // HIGHLIGHTING TECHNICAL RIGOR & ENGINEERING EXCELLENCE.
          </div>
        </div>

        {/* Dynamic Filters & Search Input block */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center border-b border-white/5 pb-6 mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4.5 py-2 text-xs font-display font-semibold rounded-xl border transition-all cursor-pointer clickable ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 border-transparent shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/40 text-slate-400 border-slate-900 hover:border-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:max-w-xs self-stretch lg:self-auto">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-slate-900 outline-none rounded-xl text-xs text-white light:text-slate-900 focus:border-amber-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-gradient-to-tr from-slate-950 to-slate-900/60 light:from-slate-50 border border-slate-900 light:border-slate-200 hover:border-amber-500/15 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-amber-500/5 cursor-pointer clickable"
            >
              {/* Top simulation illustration screen */}
              <div className="aspect-[18/9] w-full overflow-hidden">
                {renderProjectVisualMockup(proj.id)}
              </div>

              {/* Bottom specifications */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-full font-bold">
                    {proj.status}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">{proj.metrics}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-lg text-white light:text-slate-900 group-hover:text-amber-400 light:group-hover:text-amber-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-950/70 border border-slate-900/80 rounded font-mono text-[9px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-900/50 flex justify-between items-center text-xs font-semibold text-amber-500 font-display">
                  <span>Explore Architecture Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-500 space-y-4 font-mono text-xs">
              <div>&gt;_ No projects matching the search queries are actively indexed. Try general search terms.</div>
            </div>
          )}
        </div>
      </div>

      {/* Recruiter-Focused Interactive Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="project-overlay"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="project-modal"
              className="bg-slate-950 border border-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl text-left"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              {/* Visual head banner inside modal */}
              <div className="aspect-[21/9] w-full relative">
                {renderProjectVisualMockup(selectedProject.id)}
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 border border-slate-800/80 text-slate-400 hover:text-white cursor-pointer clickable z-20"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[9px] uppercase font-black bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full">
                      {selectedProject.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{selectedProject.metrics}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">PROJECT PROFILE & ARCHITECTURE</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">INTEGRATED TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg font-mono text-[10px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated action links */}
                <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 clickable"
                  >
                    <Github className="w-4 h-4" /> View Technical Source Code
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer clickable"
                  >
                    <BookOpen className="w-4 h-4" /> Return to Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
