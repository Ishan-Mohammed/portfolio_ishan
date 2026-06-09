import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import AIJourney from './components/AIJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import Loader from './components/Loader';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  // Sync theme with body class
  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Visual Cursor effects */}
      <CursorEffect />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Embedded Active Canvas particles */}
            <ParticleBg theme={theme} />

            {/* Navbar */}
            <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

            {/* Main Portfolio Layout stack */}
            <main className="relative">
              {/* Hero Section */}
              <Hero />

              {/* About Me Section */}
              <About />

              {/* Education Section */}
              <Education />

              {/* Technical Skills Section */}
              <Skills />

              {/* Featured Projects Section */}
              <Projects />

              {/* AI Internship Experience Section */}
              <Internship />

              {/* Leadership & Community Impact Section */}
              <Leadership />

              {/* Achievements Section */}
              <Achievements />

              {/* AI Journey Section */}
              <AIJourney />

              {/* Contact Section */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
