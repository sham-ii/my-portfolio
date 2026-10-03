import { motion } from 'framer-motion'
import { about } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-page">
        <SectionHeading id="about-heading" index="01" eyebrow="About Me" title="Crafting the web, one detail at a time." />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story */}
          <div>
            <Reveal>
              <p className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">{about.lead}</p>
              {about.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="mt-6 leading-relaxed text-muted">
                  {text}
                </p>
              ))}
            </Reveal>

            <dl className="mt-10 space-y-6 border-l border-line pl-6">
              {about.points.map((point, i) => (
                <Reveal key={point.title} delay={0.08 * i} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-primary"
                  />
                  <dt className="font-display text-base font-semibold text-white">{point.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{point.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Highlights */}
          <ul className="grid content-start gap-4 sm:grid-cols-2 sm:gap-5">
            {about.highlights.map(({ title, text, icon: Icon }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`card group relative overflow-hidden p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm sm:p-7 ${
                  // An odd last card spans the full row so the grid stays balanced
                  i === about.highlights.length - 1 && about.highlights.length % 2 === 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink-800 text-lg text-primary-light transition-colors duration-300 group-hover:border-primary/50">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
