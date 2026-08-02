"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show loader only if not shown this session
    if (sessionStorage.getItem("loader_shown")) {
      return;
    }
    setVisible(true);

    // Simulate progress
    const intervals: NodeJS.Timeout[] = [];
    const steps = [
      { target: 30, delay: 0, duration: 300 },
      { target: 65, delay: 300, duration: 400 },
      { target: 85, delay: 700, duration: 300 },
      { target: 100, delay: 1000, duration: 400 },
    ];

    steps.forEach(({ target, delay, duration }) => {
      const t = setTimeout(() => {
        const start = performance.now();
        const startVal = progress;
        const animate = (now: number) => {
          const elapsed = now - start;
          const p = Math.min(elapsed / duration, 1);
          setProgress(Math.round(startVal + (target - startVal) * p));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, delay);
      intervals.push(t);
    });

    // Hide after 1.6s
    const hide = setTimeout(() => {
      sessionStorage.setItem("loader_shown", "1");
      setVisible(false);
    }, 1600);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(hide);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            opacity: 1,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-xl bg-orange-600"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
              <motion.div
                className="absolute inset-1 rounded-lg bg-slate-950 flex items-center justify-center"
                style={{ borderRadius: "28% 68% 68% 28% / 28% 28% 68% 68%" }}
              >
                <span className="text-white font-black text-xl">P</span>
              </motion.div>
            </div>
            <div className="text-center">
              <motion.p
                className="text-white font-bold text-xl tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Photonexes
              </motion.p>
              <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mt-1">
                Technology
              </p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-0.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <motion.p
            className="text-slate-600 text-xs mt-3 tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
