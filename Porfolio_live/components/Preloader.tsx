'use client';

import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  '> INITIALIZING PORTFOLIO_OS v2.0...',
  '> LOADING CORE MODULES............',
  '> MOUNTING SKILL_TREE...............',
  '> CONNECTING TO SERVER..............',
  '> BOOT SEQUENCE COMPLETE ✓',
];

export default function Preloader() {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      return;
    }
    document.body.style.overflow = 'hidden';

    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          setHidden(true);
        }, 600);
      }
    }, 320);

    return () => { clearInterval(interval); document.body.style.overflow = ''; };
  }, []);

  if (hidden) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-start justify-center bg-void px-8 transition-opacity duration-500 ${done ? 'opacity-0' : 'opacity-100'}`}>
      {/* corner decorations */}
      <span className="absolute left-4 top-4 text-neon-green font-mono text-xs">[ PORTFOLIO_OS ]</span>
      <span className="absolute right-4 top-4 text-neon-green font-mono text-xs opacity-60">v2.0</span>
      <span className="absolute bottom-4 left-4 text-neon-green font-mono text-xs opacity-40">YASHA_CORP © 2026</span>

      <div className="w-full max-w-lg space-y-2">
        {lines.map((line, i) => (
          <p key={i} className="font-mono text-sm text-neon-green" style={{ textShadow: '0 0 8px #39FF14' }}>
            {line}
          </p>
        ))}
        {!done && <p className="font-mono text-sm text-neon-green cursor animate-pulse">_</p>}
      </div>
    </div>
  );
}
