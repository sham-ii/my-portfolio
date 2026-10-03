import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape, and when resizing up to desktop
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`glass relative mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full py-2 pl-3 pr-2 transition-shadow duration-300 md:pl-2 ${
          scrolled ? 'shadow-[0_12px_40px_-12px_rgba(0,0,0,0.9)]' : 'shadow-card'
        }`}
      >
        {/* Monogram */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-ink-850 font-display text-sm font-bold text-primary-light transition-colors hover:border-primary"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.initials}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-primary/40 bg-primary/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <a href="#contact" className="btn-primary hidden !min-h-0 !px-5 !py-2 md:inline-flex">
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-850 text-xl text-white transition-colors hover:border-primary/60 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass mx-auto mt-3 max-w-3xl origin-top rounded-3xl p-3 shadow-card md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map(({ id, label }, i) => {
                  const isActive = active === id
                  return (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-[48px] items-center justify-between rounded-2xl px-4 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/15 text-white'
                            : 'text-muted hover:bg-white/[0.04] hover:text-white'
                        }`}
                      >
                        {label}
                        {isActive && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />}
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
