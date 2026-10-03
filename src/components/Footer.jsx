import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-ink-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      {/* Right padding keeps the text clear of the floating back-to-top button */}
      <div className="container-page flex flex-col gap-2 py-6 pr-20 text-xs sm:pr-24 xl:pr-8 text-muted/80 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Designed &amp; built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
