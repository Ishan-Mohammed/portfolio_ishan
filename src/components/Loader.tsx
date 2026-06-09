import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Sparkles } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Initializing Recruiter Portal...');

  const messages = [
    'Booting developer core...',
    'Loading academic history (GPA 9.11)...',
    'Synthesizing projects & smart contracts...',
    'Injecting AI internship timeline...',
    'Pre-rendering interactive graphics...',
    'Ready for Recruiters!'
  ];

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Rotate messages based on progress percentage
    const step = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);
    setStatusMessage(messages[step]);
  }, [progress]);

  return (
    <motion.div
      id="recruiter-loader"
      className="fixed inset-0 bg-slate-950 text-white flex flex-col items-center justify-center z-50 p-6 font-mono"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        {/* Animated Neon Badge */}
        <motion.div
          className="relative w-24 h-24 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-center overflow-hidden mb-8 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 350, scale: [0.9, 1.05, 0.9] }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          {/* Reverse Rotating Content */}
          <motion.div 
            className="flex flex-col items-center justify-center text-amber-500"
            animate={{ rotate: -350 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-3xl font-black tracking-tighter">IM</span>
          </motion.div>
        </motion.div>

        {/* Console Box */}
        <div className="w-full bg-slate-900/80 border border-slate-800 rounded-lg p-5 text-left shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-xs text-slate-500 ml-2">system_handshake.sh</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-auto animate-pulse" />
          </div>

          <div className="flex items-center gap-3 mb-2 text-amber-500 text-sm font-semibold">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span>developer_engine_init</span>
          </div>

          {/* Terminal output */}
          <div className="space-y-1.5 h-20 text-xs text-slate-400 overflow-hidden font-mono mt-2">
            <div>&gt; _ HOST: https://ishanportfolio.dev</div>
            <div>&gt; _ VERSION: 2026.06.09 (STABLE)</div>
            <div className="text-amber-500/80">&gt; _ {statusMessage}</div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>BOOT_SEQUENCE_PROGRESS</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <motion.p
          className="text-xs text-slate-500 mt-6 text-center font-sans tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ishan Mohammed • College of Engineering Perumon • CSE B.Tech
        </motion.p>
      </div>

      {/* Decorative cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
    </motion.div>
  );
}
