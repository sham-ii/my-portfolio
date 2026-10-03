import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { profile } from '../data/profile'
import { profileImage, hasCustomProfileImage } from '../data/profileImage'
import SocialLinks from './SocialLinks'

const ease = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const slideIn = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

export default function Hero() {
  // Two-line headline: use profile.nameLines if set, otherwise put the last name on line two
  const parts = profile.name.trim().split(/\s+/)
  const [firstLine, lastLine] = profile.nameLines ?? [
    parts.slice(0, -1).join(' ') || parts[0],
    parts.length > 1 ? parts[parts.length - 1] : '',
  ]

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-16 lg:pt-28"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        {/* ---------- Text ---------- */}
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          {profile.availability && (
            <motion.p
              variants={item}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-850/70 px-4 py-1.5 text-xs font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </motion.p>
          )}

          <motion.p variants={item} className="flex items-center gap-3 text-lg font-medium text-muted sm:text-xl">
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
            {profile.greeting}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={slideIn}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] min-[375px]:text-[2.6rem] sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            <span className="text-gradient block pb-1">{firstLine}</span>
            {lastLine && <span className="text-gradient block pb-2">{lastLine}</span>}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 flex items-center gap-3 font-display text-xl font-medium text-white sm:text-2xl lg:text-3xl"
          >
            {profile.role}
            <span aria-hidden="true" className="inline-block h-6 w-[3px] animate-pulse rounded-full bg-primary/80 sm:h-7" />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-8">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary group w-full px-7 sm:w-auto"
            >
              View My Work
              <FiArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="hidden h-px w-8 bg-line sm:block" />
              <SocialLinks />
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative mx-auto flex w-full max-w-[460px] items-center justify-center"
        >
          <Portrait />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-muted/70 transition-colors hover:text-primary-light lg:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <FiChevronDown aria-hidden="true" className="text-base" />
        </motion.span>
      </a>
    </section>
  )
}

function Portrait() {
  return (
    <div className="relative aspect-square w-[78%] sm:w-[70%] lg:w-[88%]">
      {/* Breathing pink glow: deep pink → muted pink → transparent */}
      <motion.div
        aria-hidden="true"
        className="bg-portrait-glow pointer-events-none absolute -inset-[42%] rounded-full"
        animate={{ opacity: [0.75, 1, 0.75], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -inset-[9%] rounded-full border border-white/[0.06]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[9%] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light shadow-[0_0_14px_3px_rgba(217,70,122,0.6)]" />
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute -inset-[4%] rounded-full border border-primary/25" />

      {/* Floating photo */}
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full overflow-hidden rounded-full border-2 border-primary/50 bg-ink-850 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-10px_rgba(217,70,122,0.35)]">
          {/* Replace the photo: see src/assets/images/README.md */}
          <img
            src={profileImage}
            alt={hasCustomProfileImage ? `Portrait of ${profile.name}` : `Profile photo placeholder for ${profile.name}`}
            width="600"
            height="600"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Small role badge */}
        <div className="glass absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-white shadow-card sm:bottom-3 sm:left-auto sm:right-0 sm:translate-x-0">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          {profile.role}
        </div>
      </motion.div>
    </div>
  )
}
