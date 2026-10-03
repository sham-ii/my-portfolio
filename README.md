# Trisha Mae Angel C. Sapeda — Portfolio

Personal portfolio built with **React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion**.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Customising

| What                         | Where                                                        |
| ---------------------------- | ------------------------------------------------------------ |
| Name, role, intro, email, phone | `src/data/profile.js` → `profile`                          |
| Education, training, certifications | `src/data/resume.js`                                   |
| Social media links           | `src/data/profile.js` → `socials`                            |
| About section text & cards   | `src/data/profile.js` → `about`                              |
| Navigation items             | `src/data/profile.js` → `navLinks`                           |
| Skills & proficiency levels  | `src/data/skills.js`                                         |
| Projects                     | `src/data/projects.js` (+ images in `src/assets/images/projects/`) |
| Profile photo                | `src/assets/images/profile.jpg` (taken from the resume) — overwrite to change |
| Colours & fonts              | `tailwind.config.js` (`primary`, `ink`, `line`, `muted`)     |
| Page title / SEO tags        | `index.html`                                                 |

### Profile photo

Drop a square photo (800×800 px or larger) into `src/assets/images/` named
`profile.jpg` (or `.jpeg`, `.png`, `.webp`). No code changes needed — the
placeholder is used only while no photo exists.

## Project structure

```
src/
├── assets/images/        profile photo, placeholder, project screenshots
├── components/           Navbar, Hero, About, Skills, Education, Projects, ProjectCard,
│                         Contact, Footer, ScrollToTop + small shared pieces
├── data/                 all editable content (profile, skills, resume, projects)
├── hooks/                useActiveSection (navbar highlighting)
├── App.jsx
├── main.jsx
└── index.css             Tailwind layers, global styles, scrollbar, glow
```
