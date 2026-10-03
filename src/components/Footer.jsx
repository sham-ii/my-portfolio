import { navLinks, profile } from '../data/profile'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-ink-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-ink-850 font-display text-sm font-bold text-primary-light">
                {profile.initials}
              </span>
              <span className="font-display text-lg font-semibold text-white">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.role} and Information Systems student building clean, user-friendly web applications.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Quick Links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3 md:grid-cols-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block py-1 text-sm text-muted transition-colors hover:text-primary-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Connect</h2>
            <SocialLinks size="sm" tooltips={false} className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
