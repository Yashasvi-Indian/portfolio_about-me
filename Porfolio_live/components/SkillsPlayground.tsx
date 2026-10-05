'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  { title: 'LANGUAGES', items: ['Java', 'JavaScript', 'TypeScript', 'Python','SQL'], color: '#39FF14' },
  { title: 'BACKEND', items: ['Spring Boot', 'Spring Security', 'JWT', 'JPA / Hibernate', 'REST APIs'], color: '#00FFFF' },
  { title: 'FRONTEND', items: ['React', 'Next.js', 'Tailwind CSS'], color: '#FFE600' },
  { title: 'TOOLS', items: ['Git', 'Docker', 'Railway', 'Postman'], color: '#FF3131' },
];

const LANGUAGES = [
  { name: 'Java',   level: 70, color: '#39FF14' },
  { name: 'JS',     level: 78, color: '#00FFFF' },
  { name: 'Python',   level: 70, color: '#39FF14' },
  { name: 'React',  level: 80, color: '#00FFFF' },
  { name: 'SQL',    level: 50, color: '#FFE600' },
];

function LiquidCard({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <p className="mb-3 font-mono text-xs tracking-widest" style={{ color, textShadow: `0 0 8px ${color}` }}>{name}</p>
      <div className="relative h-36 w-full overflow-hidden border-2 bg-void"
        style={{ borderColor: color + '60', boxShadow: `0 0 15px ${color}15` }}>
        <motion.div
          className="absolute bottom-0 left-0 w-full"
          initial={{ height: '0%' }}
          whileInView={{ height: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ backgroundColor: color + '22' }}
        >
          <svg className="absolute -top-3 left-0 w-[200%]"
            style={{ animation: 'waveScroll 2.4s linear infinite' }}
            viewBox="0 0 400 20" preserveAspectRatio="none">
            <path d="M0,10 C50,0 100,20 150,10 C200,0 250,20 300,10 C350,0 400,20 400,10 L400,20 L0,20 Z"
              fill={color} opacity="0.8" />
          </svg>
        </motion.div>
        <p className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-bold"
          style={{ color, textShadow: `0 0 12px ${color}` }}>
          {level}%
        </p>
        {/* scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-scanline opacity-30" />
      </div>
      <style>{`@keyframes waveScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32 md:px-16">
      <p className="mb-2 font-mono text-xs text-neon-green/50 tracking-widest">{'>'} SKILL_TREE</p>
      <h2 className="mb-16 font-mono text-3xl font-bold text-neon-green md:text-4xl"
        style={{ textShadow: '0 0 15px #39FF14' }}>
        SKILLS
      </h2>

      {/* categorized tech inventory */}
      <div className="mb-24 grid gap-8 sm:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <motion.div key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-2 bg-terminal/20 p-6"
            style={{ borderColor: cat.color + '40' }}>
            <h3 className="mb-4 font-mono text-xs tracking-widest"
              style={{ color: cat.color, textShadow: `0 0 8px ${cat.color}` }}>
              [ {cat.title} ]
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item}
                  className="border px-3 py-1 font-mono text-xs transition-all hover:bg-neon-green/10"
                  style={{ borderColor: cat.color + '40', color: cat.color + 'CC' }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* liquid fill language cards */}
      <p className="mb-6 font-mono text-xs text-neon-green/50 tracking-widest">{'>'} FAVORITE_LANGUAGES</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {LANGUAGES.map((lang, i) => (
          <LiquidCard key={lang.name} name={lang.name} level={lang.level} color={lang.color} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
