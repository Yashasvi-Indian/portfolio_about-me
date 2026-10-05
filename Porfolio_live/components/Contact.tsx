'use client';

import { useState, type FormEvent } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';

const LINKS = [
  { label: 'GITHUB', href: 'https://github.com/Yashasvi-Indian', value: 'github.com/Yashasvi-Indian', color: '#39FF14' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/yashasvisaxenacsestudent2024batch', value: 'linkedin.com/in/yashasvi-saxena', color: '#00FFFF' },
  { label: 'EMAIL', href: 'mailto:yashasvisaxena89@gmail.com', value: 'yashasvisaxena89@gmail.com', color: '#FFE600' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.currentTarget),
    }).catch(() => null);
    if (res?.ok) { setStatus('success'); (e.target as HTMLFormElement).reset(); }
    else setStatus('error');
  }

  return (
    <section id="contact" className="px-6 py-32 md:px-16">
      <p className="mb-2 font-mono text-xs text-neon-green/50 tracking-widest">{'>'} SEND_MESSAGE</p>
      <h2 className="mb-16 font-mono text-3xl font-bold text-neon-green md:text-4xl"
        style={{ textShadow: '0 0 15px #39FF14' }}>
        CONTACT
      </h2>

      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
        {/* Form terminal */}
        <div className="border-2 border-neon-green/30 bg-terminal/20">
          <div className="flex items-center gap-2 border-b-2 border-neon-green/30 bg-neon-green/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-neon-red/70" />
            <span className="h-2 w-2 rounded-full bg-neon-yellow/70" />
            <span className="h-2 w-2 rounded-full bg-neon-green/70" />
            <span className="ml-3 font-mono text-xs text-neon-green/50">message.exe</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            {[
              { id: 'name', label: 'YASHASVI', type: 'text' },
              { id: 'email', label: 'yashasvisaxena89@gmailcom', type: 'email' },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-1.5 block font-mono text-xs text-neon-green/50 tracking-widest">
                  {'>'} {f.label}
                </label>
                <input id={f.id} name={f.id} type={f.type} required
                  className="w-full border-2 border-neon-green/20 bg-void px-3 py-2 font-mono text-sm text-neon-green outline-none focus:border-neon-green/60 transition-colors"
                  style={{ caretColor: '#39FF14' }} />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-neon-green/50 tracking-widest">
                {'>'} MESSAGE
              </label>
              <textarea id="message" name="message" rows={4} required
                className="w-full resize-none border-2 border-neon-green/20 bg-void px-3 py-2 font-mono text-sm text-neon-green outline-none focus:border-neon-green/60 transition-colors"
                style={{ caretColor: '#39FF14' }} />
            </div>
            <button type="submit" disabled={status === 'submitting'}
              className="w-full border-2 border-neon-green bg-neon-green/10 py-3 font-mono text-sm font-bold text-neon-green transition-all hover:bg-neon-green hover:text-void disabled:opacity-50"
              style={{ textShadow: '0 0 8px #39FF14' }}>
              {status === 'submitting' ? '[ SENDING... ]' : '[ TRANSMIT → ]'}
            </button>
            {status === 'success' && <p className="font-mono text-xs text-neon-green text-center">{'>'} MESSAGE_SENT ✓</p>}
            {status === 'error' && <p className="font-mono text-xs text-neon-red text-center">{'>'} TRANSMISSION_FAILED ✗</p>}
          </form>
        </div>

        {/* Direct links */}
        <div className="flex flex-col justify-center gap-4">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center justify-between border-2 p-4 font-mono transition-all hover:bg-terminal/40"
              style={{ borderColor: link.color + '40', boxShadow: `0 0 10px ${link.color}10` }}>
              <span className="text-xs tracking-widest" style={{ color: link.color }}>[ {link.label} ]</span>
              <span className="text-xs text-neon-green/50 group-hover:text-neon-green transition-colors">{link.value} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
