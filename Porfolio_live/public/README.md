# public/

Next.js serves everything in this folder directly at your site's root URL.
No code changes needed when you add files here -- just drop them in with
these exact names, since the components already reference these paths:

- `resume.pdf`   -> linked from the Navbar's Resume button (`/resume.pdf`)
- `profile.jpg`  -> referenced in the comments inside `Hero.tsx`,
                    `About.tsx`, and `Navbar.tsx` (you still need to swap
                    the placeholder divs for actual `<Image>` tags --
                    see those comments)

Once `resume.pdf` is in here, `npm run dev` should just pick it up --
no restart required.
