import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Terminal, Settings2, ShieldCheck, Mail, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const roles = [
    'Computer Science Engineering student',
    'Full Stack Web Developer',
    'AI Enthusiast',
    'Software Developer',
    'Problem Solver',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [showConsoleAlert, setShowConsoleAlert] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Custom typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2400);
          return;
        }
      } else {
        // Deleting
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(35);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Terminal active logging list simulator - purely realistic engineering logs
  useEffect(() => {
    const defaultLogs = [
      'Verifying portfolio deployment configuration...',
      'Evaluating academic credentials (CGPA: 9.11)...',
      'Indexing project metadata tables (Hospital Networks)...',
      'Checking responsiveness and cross-browser parameters...',
      'Compiling optimized layout assets with Vite HMR...',
      'System check complete: ready for recruitment reviews.',
    ];

    let timer: NodeJS.Timeout;
    const addLog = (index: number) => {
      if (index < defaultLogs.length) {
        setConsoleLogs((prev) => [...prev, defaultLogs[index]]);
        timer = setTimeout(() => addLog(index + 1), 600);
      }
    };

    addLog(0);
    return () => clearTimeout(timer);
  }, []);

  const handleAlertTrigger = () => {
    setShowConsoleAlert(true);
    setTimeout(() => {
      setShowConsoleAlert(false);
    }, 4500);
  };

  const handleDownloadResume = () => {
    window.print();
  };

  const scrollToContact = () => {
    const contactSect = document.getElementById('contact');
    if (contactSect) {
      contactSect.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column introductory info */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-500 tracking-wide font-mono select-none">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            OPEN FOR INTERNSHIPS & PLACEMENTS
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white light:text-slate-900 tracking-tight leading-[1.05]">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]">ISHAN MOHAMMED</span>
            </h1>

            {/* Simulated Typewriter Role Display */}
            <h2 className="text-xl sm:text-2xl font-mono text-slate-300 light:text-slate-700 min-h-[40px] flex items-center justify-center lg:justify-start gap-1">
              <span className="text-amber-500 font-bold">&gt;</span>
              <span>{currentText}</span>
              <span className="w-1.5 h-5 bg-amber-500 ml-1 inline-block animate-pulse align-middle" />
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-400 light:text-slate-600 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
            {personalInfo.introText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <button
              onClick={() => setShowResumeModal(true)}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer clickable"
            >
              <Download className="w-4 h-4" /> View Professional Resume
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-900 font-bold text-sm tracking-wide rounded-xl border border-white/10 light:border-slate-300 hover:border-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer clickable"
            >
              Contact / Hire Me <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
          </div>

          {/* Quick specs banner */}
          <div className="grid grid-cols-3 gap-4 border-t border-slate-900 light:border-slate-200 pt-8 max-w-lg mx-auto lg:mx-0 text-left font-mono">
            <div>
              <div className="text-2xl font-black text-amber-500">9.11</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">CURRENT CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white light:text-slate-900">4+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">COMPLETED PROJECTS</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white light:text-slate-900">2024–28</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">B.TECH CYCLE</div>
            </div>
          </div>
        </div>

        {/* Right column: Elegant Eye-catching Profile Photo Container */}
        <div className="lg:col-span-12 xl:col-span-5 relative w-full flex justify-center">
          <motion.div
            className="w-full max-w-[320px] relative flex flex-col items-center justify-center animate-fade-in"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Ambient Background glow layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-yellow-500/5 to-transparent blur-[40px] rounded-full pointer-events-none -z-10" />

            {/* Main Portrait Card in 3:4 aspect ratio */}
            <div className="w-full aspect-[3/4] rounded-3xl bg-slate-950 border border-slate-900 p-3 shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900 flex items-center justify-center">
                
                {/* Primary Profile Image from Google Drive with smooth fit */}
                <img
                  src="https://lh3.googleusercontent.com/d/1b76XTQU1DYLoOy033p6SiuUE-1uDHLf6"
                  alt="Ishan Mohammed"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10"
                  referrerPolicy="no-referrer"
                />

                {/* Futurist HUD overlays on top of the image */}
                <div className="absolute top-3 left-3 z-20 bg-slate-950/95 border border-slate-900 rounded-xl px-2.5 py-1 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-400 select-none uppercase tracking-wider">Active Profile</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20 bg-slate-950/95 border border-slate-900 text-left p-3 rounded-2xl shadow-xl backdrop-blur-sm">
                  <div className="text-[10px] font-bold text-white tracking-wide">College of Engineering Perumon</div>
                  <div className="text-[9px] font-mono text-slate-500 mt-0.5 leading-tight">Ishan Mohammed — CSE Student Specialist</div>
                </div>
              </div>
            </div>

            {/* Quick status line below image */}
            <div className="w-full mt-4 flex items-center justify-between px-2 text-xs font-mono">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Academic Portfolio</span>
              <span className="text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                VERIFIED STATUS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating active warning alert */}
      <AnimatePresence>
        {showConsoleAlert && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md flex gap-3 text-left items-start"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-500 font-bold uppercase">Ready to Hire</div>
              <div className="text-sm font-semibold text-white mt-0.5">Ishan Mohammed connected!</div>
              <p className="text-xs text-slate-400 mt-1">
                Recruiter portal authenticated. Feel free to explore my AI intern timeline and projects!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recruiter-focused Resume mock view Modal popup */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            id="resume-overlay"
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="resume-modal"
              className="bg-slate-950 border border-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer clickable"
              >
                ✕
              </button>

              <div id="resume-printable-area" className="space-y-6 text-left">
                {/* PDF Header block */}
                <div className="border-b border-slate-900 pb-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <h1 className="text-2xl font-display font-black text-white">{personalInfo.name}</h1>
                    <p className="text-sm text-amber-400 font-mono mt-1">{personalInfo.title}</p>
                    <p className="text-xs text-slate-400 mt-2">{personalInfo.location}</p>
                  </div>
                  <div className="text-xs font-mono text-slate-400 space-y-1">
                    <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-white underline">{personalInfo.email}</a></div>
                    <div>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-white underline hover:text-amber-400">github.com/Ishan-Mohammed</a></div>
                    <div>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-white underline hover:text-amber-400 font-mono">linkedin.com/in/ishan-mohammed-37596932b</a></div>
                  </div>
                </div>

                {/* About me/Objective */}
                <div>
                  <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold mb-2">OBJECTIVE / BIOGRAPHY</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">{personalInfo.introText}</p>
                </div>

                {/* Education section */}
                <div className="border-t border-slate-900 pt-5">
                  <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold mb-3">EDUCATION</h3>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-white">B.Tech in Computer Science and Engineering</h4>
                      <p className="text-xs text-slate-400 mt-0.5">College of Engineering Perumon</p>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-400">
                      <div>2024 – 2028</div>
                      <div className="text-amber-400 font-semibold mt-1">CGPA: 9.11 / 10</div>
                    </div>
                  </div>
                </div>

                {/* Technical skill matrix */}
                <div className="border-t border-slate-900 pt-5">
                  <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold mb-3">TECHNICAL SKILLS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-xs text-slate-300">
                    <div><strong className="text-white">Programming:</strong> C, Java, Python, JavaScript</div>
                    <div><strong className="text-white">Frontend:</strong> HTML, CSS, Bootstrap, React.js</div>
                    <div><strong className="text-white">Backend & APIs:</strong> Node.js, REST APIs</div>
                    <div><strong className="text-white">Database:</strong> SQL, Firebase</div>
                    <div><strong className="text-white">Emerging Tools:</strong> Solidity, Hardhat, MetaMask</div>
                    <div><strong className="text-white">AI Capabilities:</strong> Gemini, ChatGPT, Claude, DeepSeek</div>
                  </div>
                </div>

                {/* AI Internship block */}
                <div className="border-t border-slate-900 pt-5">
                  <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold mb-3">PROFESSIONAL INTERNSHIP EXPERIENCE</h3>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white">AI Student Intern</h4>
                        <p className="text-xs text-slate-400">Tomatrix Technologies</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">Summer Internship 2026</span>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-1.5 text-xs text-slate-400">
                      <li>Conducted logical benchmarking matrices comparing multi-parameters across GPT-4o, Claude, and Gemini.</li>
                      <li>Created search engine optimization and user conversion copywriting texts for multiple product layout structures.</li>
                      <li>Organized digital assets, extracted vector illustration layouts, and packaged product compression archives.</li>
                      <li>Coded a premium, highly-interactive personal developer and academic resume portal using React and Framer Motion.</li>
                    </ul>
                  </div>
                </div>

                {/* Leadership roles */}
                <div className="border-t border-slate-900 pt-5">
                  <h3 className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold mb-3">LEADERSHIP & SERVICE RECOGNITION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400">
                    <div>
                      <strong className="text-white block">Event Co-Chair • CSI Trivandrum</strong>
                      Managed regional workshops and technical meetups.
                    </div>
                    <div>
                      <strong className="text-white block">Documentation Head • CSI Student Branch</strong>
                      Pioneered newsletter and event dossier writing pipelines.
                    </div>
                  </div>
                </div>

                {/* Actions bottom banner */}
                <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-950">
                  <p className="text-[10px] font-mono text-slate-500">Ishan Mohammed  • Resume generated on 2026-06-09</p>
                  <div className="flex gap-4">
                    <button
                      onClick={handleDownloadResume}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer clickable"
                    >
                      <Download className="w-3.5 h-3.5" /> Print / PDF Download
                    </button>
                    <button
                      onClick={() => setShowResumeModal(false)}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs rounded-xl border border-slate-800 cursor-pointer clickable"
                    >
                      Close Viewer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded down arrows indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 light:text-slate-400 text-[10px] font-mono tracking-widest pointer-events-none select-none">
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1.5 h-5 rounded-full border border-slate-500 light:border-slate-400 flex justify-center p-0.5"
        >
          <span className="w-0.5 h-1.5 bg-slate-500 light:bg-slate-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
