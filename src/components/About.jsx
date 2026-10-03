import { motion } from 'framer-motion'
import { about } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-page">
        <SectionHeading id="about-heading" index="01" eyebrow="About Me" title="A little about me." />

        <Reveal className="card grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.5fr_1fr] lg:gap-10 lg:p-8">
          {/* Short intro */}
          <div className="space-y-4">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="text-[15px] leading-relaxed text-white/85 sm:text-base">
                {text}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5">
            {about.highlights.map(({ title, subtitle }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-r-lg border-l-2 border-primary bg-ink-800/70 px-4 py-3"
              >
                <h3 className="text-[15px] font-semibold text-white sm:text-base">{title}</h3>
                <p className="mt-0.5 text-[13px] tracking-wide text-muted">{subtitle}</p>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
