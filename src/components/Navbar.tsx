import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'AI Internship', id: 'internship' },
    { name: 'AI Journey', id: 'ai-journey' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background effect flag
      setIsScrolled(window.scrollY > 15);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current section
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'internship', 'ai-journey', 'contact'];
      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the majority of the view
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // compensate for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 light:bg-white/85 shadow-[0_4px_30px_rgba(0,0,0,0.08)] backdrop-blur-md border-b border-white/5 light:border-slate-200/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Dynamic Top Scroll Indicator */}
        <div
          id="scroll-progress-bar"
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-300 z-50 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer clickable"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-bold text-slate-950 tracking-tighter shadow-lg shadow-amber-500/15 group-hover:scale-105 transition-all duration-200">
              IM
              {/* Pulsing Accent Glow */}
              <span className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl blur opacity-30 -z-10 group-hover:opacity-50 transition-opacity" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-tight text-white light:text-slate-900 group-hover:text-amber-400 light:group-hover:text-amber-500 transition-colors block">
                Ishan Mohammed
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block -mt-1">
                CS STUDENT • B.TECH
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link items */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide font-display rounded-lg transition-all relative cursor-pointer clickable ${
                    active
                      ? 'text-amber-500 light:text-amber-600 font-semibold bg-white/5 light:bg-slate-100'
                      : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 list-none'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-500 rounded"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action buttons (Theme Toggle + Resume + Menu Toggle) */}
          <div className="flex items-center gap-3">
            {/* Dark & Light physical switcher */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-amber-500 light:hover:text-amber-600 border border-slate-800 light:border-slate-200 transition-all cursor-pointer clickable"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Contact button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 hover:from-amber-500 hover:to-amber-400 text-amber-500 hover:text-slate-950 font-medium font-sans text-xs rounded-xl border border-amber-500/20 hover:border-transparent transition-all shadow-[0_0_15px_rgba(245,158,11,0.05)] cursor-pointer clickable"
            >
              Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger Mobile controller icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white border border-slate-800 light:border-slate-200 cursor-pointer clickable"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slider Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-panel"
            className="fixed inset-0 top-[65px] bg-slate-950 light:bg-white z-30 p-6 md:hidden flex flex-col justify-between border-t border-slate-900/50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2 mt-4">
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-4">
                NAVIGATION SECTIONS
              </p>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-display text-sm font-medium pr-10 flex items-center justify-between cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-amber-500/10 text-amber-500 border-l-4 border-amber-500'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="text-[10px] opacity-40 font-mono">0{navItems.findIndex(x=>x.id===item.id) + 1}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4 border-t border-slate-900/50 pt-6">
              <div className="flex gap-4 text-xs text-slate-500 font-mono">
                <div>GPA: 9.11</div>
                <div>•</div>
                <div>CSE Student</div>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/10 flex items-center justify-center gap-1.5 clickable"
              >
                Let&apos;s Connect <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
