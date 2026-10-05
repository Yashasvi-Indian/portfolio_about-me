# Portfolio Starter

Dark, glow-accented Next.js portfolio scaffold. Built sections: Navbar,
Preloader, Hero, About, Things I Do, Skills (categorized tech list +
Matter.js playground + language bars, all in one), Project Showcase
(hover-lift + glowing border cards), Contact (real form via Formspree).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## File structure

```
portfolio-starter/
├── app/
│   ├── layout.tsx        # fonts (Space Grotesk / Inter / JetBrains Mono), <html> dark class
│   ├── page.tsx           # assembles sections
│   └── globals.css        # base dark backdrop, radial wash, reduced-motion handling
├── components/
│   ├── Navbar.tsx               # fixed header: avatar/name left, Resume/Skills/Connect right
│   ├── Preloader.tsx            # GSAP counter + wipe-away loading screen
│   ├── Hero.tsx                 # Framer Motion staggered entrance + portrait circle
│   ├── About.tsx                # photo + bio, appears right after Hero
│   ├── ThingsIDo.tsx            # three focus-area cards
│   ├── SkillsPlayground.tsx     # categorized tech list + Matter.js playground + language bars
│   ├── ProjectShowcase.tsx      # hover-lift + glowing border project cards
│   └── Contact.tsx              # real form (Formspree) + GitHub/LinkedIn links
├── tailwind.config.ts     # slate/violet palette, radial-gradient utilities, glow shadows
├── postcss.config.js
├── next.config.js
├── tsconfig.json           # @/* path alias
└── package.json
```

## Not built yet (next pass)

- `CredentialsGrid.tsx` -- hover-to-reveal certificate cards.
- Real content in `ExperienceTimeline.tsx` (currently placeholder copy).
- Real `liveUrl` / `repoUrl` in `ProjectShowcase.tsx` -- update the
  SkillUPAI card with your actual Railway and GitHub links.
- **Formspree setup required for the Contact form to actually send
  email**: sign up free at formspree.io, create a form, and paste your
  endpoint into `FORMSPREE_ENDPOINT` at the top of `Contact.tsx`. Until
  you do that, submissions will fail with the red error message.
- Real GitHub/LinkedIn URLs in `Contact.tsx`.
- Real email in `Navbar.tsx`'s Resume link area and the form's error-state
  fallback text in `Contact.tsx`.
- Real resume PDF at `public/resume.pdf` -- the Navbar's Resume button
  links there but the file doesn't exist yet, so it'll 404 until you add
  it (create a `public/` folder at the project root if it's not there).
- Real headshot at `public/profile.jpg` -- used as a placeholder swap-in
  comment in both `Navbar.tsx` and `About.tsx`.
- Optional: React Three Fiber scene if you want a 3D hero element instead
  of/alongside the typography-only hero.

## Notes on the  playground

`SkillsPlayground.tsx` runs Matter.js physics but renders the badges as
real DOM elements (not Matter's canvas renderer) so they stay styleable
with Tailwind. Each animation frame copies the physics body's x/y/angle
onto the DOM node's `transform`. If you add/remove skills, the array
length just needs to stay in sync with `badgeRefs.current`.
