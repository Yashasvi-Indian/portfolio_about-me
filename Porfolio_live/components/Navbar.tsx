'use client';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-neon-green/40 bg-void/90 backdrop-blur-md"
      style={{ boxShadow: '0 2px 20px rgba(57,255,20,0.1)' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-16">

        {/* Left: player tag */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border-2 border-neon-green/60 bg-terminal font-mono text-xs font-bold text-neon-green"
            style={{ textShadow: '0 0 8px #39FF14' }}>
            YS
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-neon-green" style={{ textShadow: '0 0 8px #39FF14' }}>
              YASHA
            </span>
            <span className="ml-2 font-mono text-xs text-neon-green/50">[ BACKEND_DEV ]</span>
          </div>
        </a>

        {/* Right: nav links */}
        <nav className="flex items-center gap-6">
          {[
            { label: 'SKILLS', href: '#skills' },
            { label: 'CONTACT', href: '#contact' },
          ].map((link) => (
            <a key={link.label} href={link.href}
              className="hidden font-mono text-xs text-neon-green/60 transition-all hover:text-neon-green md:inline"
              style={{ letterSpacing: '0.15em' }}>
              {link.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1_lY1kLr-NbWyw2U7FF9nKgVOkpyc8iLj/view?usp=sharing" target="_blank" rel="noreferrer"
            className="border-2 border-neon-green/60 px-4 py-1.5 font-mono text-xs font-bold text-neon-green transition-all hover:bg-neon-green hover:text-void"
            style={{ letterSpacing: '0.1em', textShadow: '0 0 8px #39FF14' }}>
            [ RESUME ]
          </a>
        </nav>
      </div>
    </header>
  );
}
