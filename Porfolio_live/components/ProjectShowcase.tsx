'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 'PROJ_001',
    title: 'SkillUPAI',
    tagline: 'AI-powered resume & job-description analyzer',
    description: 'Spring Boot backend integrating GPT-3.5 with rule-based fallback. JWT auth, JPA-backed history, deployed on Railway.',
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'OpenAI API', 'JWT'],
    status: 'ONLINE',
    liveUrl: 'https://your-skillupai.railway.app',
    repoUrl: ' https://github.com/Yashasvi-Indian/SkillUPAI',
    power: 88,
  },
  {
    id: 'PROJ_002',
    title: 'NEXT_PROJECT',
    tagline: 'Reserved slot',
    description: 'Loading...',
    stack: ['???'],
    status: 'COMING_SOON',
    power: 0,
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="px-6 py-32 md:px-16">
      <p className="mb-2 font-mono text-xs text-neon-green/50 tracking-widest">{'>'} PROJECT_LOG</p>
      <h2 className="mb-16 font-mono text-3xl font-bold text-neon-green md:text-4xl"
        style={{ textShadow: '0 0 15px #39FF14' }}>
        PROJECTS
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((proj, i) => (
          <motion.div key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="group border-2 border-neon-green/30 bg-terminal/20 p-6 transition-all hover:border-neon-green/60"
            style={{ boxShadow: '0 0 20px rgba(57,255,20,0.05)' }}
          >
            {/* header row */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-neon-green/40 mb-1">{proj.id}</p>
                <h3 className="font-mono text-xl font-bold text-neon-green"
                  style={{ textShadow: '0 0 10px #39FF14' }}>{proj.title}</h3>
                <p className="font-mono text-xs text-neon-cyan/70 mt-1">{proj.tagline}</p>
              </div>
              <span className={`font-mono text-xs px-2 py-1 border ${
                proj.status === 'ONLINE'
                  ? 'border-neon-green/60 text-neon-green animate-pulse'
                  : 'border-neon-green/20 text-neon-green/30'
              }`}>
                {proj.status === 'ONLINE' ? '● ' : '○ '}{proj.status}
              </span>
            </div>

            <p className="mb-5 font-mono text-xs leading-relaxed text-neon-green/60">{proj.description}</p>

            {/* power bar */}
            {proj.power > 0 && (
              <div className="mb-5">
                <div className="mb-1 flex justify-between font-mono text-xs text-neon-green/40">
                  <span>POWER_LEVEL</span><span>{proj.power}</span>
                </div>
                <div className="h-1.5 w-full bg-void border border-neon-green/20">
                  <motion.div className="h-full bg-neon-green"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proj.power}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    style={{ boxShadow: '0 0 8px #39FF14' }} />
                </div>
              </div>
            )}

            {/* tech stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {proj.stack.map((tech) => (
                <span key={tech} className="border border-neon-green/20 px-2 py-0.5 font-mono text-xs text-neon-green/50">
                  {tech}
                </span>
              ))}
            </div>

            {/* links */}
            <div className="flex gap-4">
              {proj.liveUrl && (
                <a href={proj.liveUrl} target="_blank" rel="noreferrer"
                  className="font-mono text-xs text-neon-green transition-all hover:text-neon-cyan"
                  style={{ textShadow: '0 0 8px #39FF14' }}>
                  [ LAUNCH → ]
                </a>
              )}
              {proj.repoUrl && (
                <a href={proj.repoUrl} target="_blank" rel="noreferrer"
                  className="font-mono text-xs text-neon-green/50 transition-all hover:text-neon-green">
                  [ SOURCE → ]
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
