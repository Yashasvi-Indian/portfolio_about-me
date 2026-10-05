'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TITLES = ['BACKEND_ENGINEER', 'JAVA_DEVELOPER', 'API_ARCHITECT', 'SYSTEM_BUILDER'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect cycling through titles
  useEffect(() => {
    const target = TITLES[titleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-16">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-game bg-grid opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="relative z-10 max-w-4xl"
      >
        {/* system label */}
        <p className="mb-2 font-mono text-xs text-neon-green/50" style={{ letterSpacing: '0.2em' }}>
          {'>'} PLAYER_PROFILE LOADED
        </p>

        {/* name */}
        <h1 className="mb-4 font-mono text-6xl font-bold text-neon-green md:text-8xl"
          style={{ textShadow: '0 0 20px #39FF14, 0 0 60px #39FF14' }}>
          YASHA
        </h1>

        {/* typewriter title */}
        <div className="mb-8 flex items-center gap-0 font-mono text-xl text-neon-cyan md:text-2xl"
          style={{ textShadow: '0 0 12px #00FFFF' }}>
          <span className="text-neon-green/50 mr-2">{'>'}</span>
          <span>{displayed}</span>
          <span className="animate-blink ml-0.5 text-neon-cyan">█</span>
        </div>

        {/* bio */}
        <p className="mb-10 max-w-xl font-mono text-sm leading-relaxed text-neon-green/70">
          {'// '}Java &amp; Spring Boot. I design APIs, model data, and ship things<br />
          {'// '}that survive contact with real users.
        </p>

        {/* stat bar */}
        <div className="mb-10 border-2 border-neon-green/30 bg-terminal/40 p-4 font-mono text-xs">
          <p className="mb-3 text-neon-green/50">[ CHARACTER_STATS ]</p>
          {[
            { label: 'BACKEND', val: 85 },
            { label: 'PROBLEM_SOLVING', val: 78 },
            { label: 'SYSTEM_DESIGN', val: 70 },
          ].map((stat) => (
            <div key={stat.label} className="mb-2 flex items-center gap-3">
              <span className="w-36 text-neon-green/70">{stat.label}</span>
              <div className="h-2 flex-1 bg-void border border-neon-green/20">
                <motion.div
                  className="h-full bg-neon-green"
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.val}%` }}
                  transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
                  style={{ boxShadow: '0 0 8px #39FF14' }}
                />
              </div>
              <span className="w-10 text-right text-neon-green">{stat.val}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4">
          <a href="#skills"
            className="border-2 border-neon-green bg-neon-green/10 px-6 py-3 font-mono text-sm font-bold text-neon-green transition-all hover:bg-neon-green hover:text-void"
            style={{ textShadow: '0 0 8px #39FF14', letterSpacing: '0.1em' }}>
            [ VIEW SKILLS ]
          </a>
          <a href="#contact"
            className="border-2 border-neon-cyan/60 px-6 py-3 font-mono text-sm font-bold text-neon-cyan transition-all hover:bg-neon-cyan hover:text-void"
            style={{ textShadow: '0 0 8px #00FFFF', letterSpacing: '0.1em' }}>
            [ CONTACT ]
          </a>
        </div>
      </motion.div>

      {/* corner HUD elements */}
      <div className="absolute bottom-8 right-8 font-mono text-xs text-neon-green/30 text-right">
        <p>LVL 3 ENGINEER</p>
        <p>EXP: 2026</p>
        <p></p>
      </div>
    </section>
  );
}
