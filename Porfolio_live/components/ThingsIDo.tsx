'use client';

import { motion } from 'framer-motion';

const ABILITIES = [
  {
    key: 'A',
    name: 'Backend Development',
    type: 'ACTIVE',
    color: '#39FF14',
    description: 'APIs, auth, and data modeling in Java and Spring Boot. The layer that has to be right.',
    stats: { POWER: 85, SPEED: 70, RANGE: 90 },
  },
  {
    key: 'B',
    name: 'Open Source',
    type: 'PASSIVE',
    color: '#00FFFF',
    description: 'Reading and contributing to real codebases to understand how production systems get built.',
    stats: { POWER: 60, SPEED: 65, RANGE: 80 },
  },
  {
    key: 'C',
    name: 'Shipping Projects',
    type: 'ULTIMATE',
    color: '#FFE600',
    description: 'End-to-end, deployed and demoable. SkillUPAI lives on Railway, not just on disk.',
    stats: { POWER: 90, SPEED: 75, RANGE: 85 },
  },
];

export default function ThingsIDo() {
  return (
    <section className="px-6 py-32 md:px-16">
      <p className="mb-2 font-mono text-xs text-neon-green/50 tracking-widest">{'>'} ABILITY_TREE</p>
      <h2 className="mb-16 font-mono text-3xl font-bold text-neon-green md:text-4xl"
        style={{ textShadow: '0 0 15px #39FF14' }}>
        THINGS I DO
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {ABILITIES.map((ab, i) => (
          <motion.div
            key={ab.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="border-2 bg-terminal/20 p-6 transition-all hover:bg-terminal/40"
            style={{ borderColor: ab.color + '60', boxShadow: `0 0 15px ${ab.color}15` }}
          >
            {/* ability key badge */}
            <div className="mb-4 flex items-center justify-between">
              <span className="border-2 px-2 py-0.5 font-mono text-xs font-bold"
                style={{ borderColor: ab.color, color: ab.color, textShadow: `0 0 8px ${ab.color}` }}>
                [{ab.key}]
              </span>
              <span className="font-mono text-xs"
                style={{ color: ab.color, opacity: 0.6 }}>{ab.type}</span>
            </div>

            <h3 className="mb-3 font-mono text-base font-bold" style={{ color: ab.color }}>{ab.name}</h3>
            <p className="mb-5 font-mono text-xs leading-relaxed text-neon-green/60">{ab.description}</p>

            {/* mini stat bars */}
            <div className="space-y-1.5">
              {Object.entries(ab.stats).map(([stat, val]) => (
                <div key={stat} className="flex items-center gap-2">
                  <span className="w-14 font-mono text-xs text-neon-green/40">{stat}</span>
                  <div className="h-1 flex-1 bg-void border border-neon-green/10">
                    <motion.div
                      className="h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      style={{ backgroundColor: ab.color, boxShadow: `0 0 6px ${ab.color}` }}
                    />
                  </div>
                  <span className="w-6 font-mono text-xs text-right" style={{ color: ab.color }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
