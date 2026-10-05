'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 md:flex-row">

        {/* Avatar -- game character card style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shrink-0"
        >
          <div className="relative border-2 border-neon-green/60 p-1"
            style={{ boxShadow: '0 0 20px rgba(57,255,20,0.3), inset 0 0 20px rgba(57,255,20,0.05)' }}>
            <div className="relative h-52 w-52 overflow-hidden bg-terminal">
              <Image src="/profile.jpg" alt="Yasha" fill className="object-cover" />
            </div>
            {/* HUD overlay on portrait */}
            <div className="absolute inset-0 pointer-events-none border-2 border-neon-green/10" />
            <p className="mt-1 text-center font-mono text-xs text-neon-green/60 tracking-widest">[ PLAYER_01 ]</p>
          </div>
        </motion.div>

        {/* Bio -- terminal window style */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <div className="border-2 border-neon-green/30 bg-terminal/30">
            {/* window title bar */}
            <div className="flex items-center gap-2 border-b-2 border-neon-green/30 bg-neon-green/5 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-yellow/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-green/70" />
              <span className="ml-3 font-mono text-xs text-neon-green/50">about.exe</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-neon-green/80">
              <p><span className="text-neon-cyan">const</span> <span className="text-neon-green">player</span> = {'{'}</p>
              <p className="pl-4"><span className="text-neon-yellow">name</span>: <span className="text-neon-green/60">"Yasha"</span>,</p>
              <p className="pl-4"><span className="text-neon-yellow">university</span>: <span className="text-neon-green/60">"AKTU — B.Tech CSE (2027)"</span>,</p>
              <p className="pl-4"><span className="text-neon-yellow">location</span>: <span className="text-neon-green/60">"Bangalore, India"</span>,</p>
              <p className="pl-4"><span className="text-neon-yellow">stack</span>: <span className="text-neon-green/60">["Java 21", "Spring Boot", "MERN"]</span>,</p>
              <p className="pl-4"><span className="text-neon-yellow">seeking</span>: <span className="text-neon-green/60">"Backend Internship"</span>,</p>
              <p>{'}'}</p>
              <p className="mt-4 text-neon-green/50">
                {'// '}3rd year CS student. Most of my time goes into<br />
                {'// '}Spring Boot APIs and competitive programming.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
