import { motion } from 'framer-motion'
import { about } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-page">
        <SectionHeading id="about-heading" index="01" eyebrow="About Me" title="A little about me." />

        <Reveal className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12 lg:p-10">
          {/* Short intro */}
          <div className="space-y-5">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="text-base leading-relaxed text-white/85 sm:text-[17px]">
                {text}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-3">
            {about.highlights.map(({ title, subtitle }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-r-lg border-l-2 border-primary bg-ink-800/70 px-5 py-4"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
                <p className="mt-0.5 text-sm tracking-wide text-muted">{subtitle}</p>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
