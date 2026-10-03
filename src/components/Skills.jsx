import { motion } from 'framer-motion'
import { skills, levelLabel } from '../data/skills'
import SectionHeading from './SectionHeading'

function SkillCard({ name, description, icon: Icon, level, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="card group flex h-full flex-col p-4 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm"
    >
      <div className="flex items-start gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-800 text-xl text-white/85 transition-all duration-300 group-hover:border-primary/50 group-hover:text-primary-light group-hover:shadow-[0_0_22px_-4px_rgba(217,70,122,0.55)]">
          <Icon aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-tight text-white">{name}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">{description}</p>
        </div>
      </div>

      {level != null && (
        <div className="mt-auto pt-6">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-medium text-muted">{levelLabel(level)}</span>
            <span className="font-display font-semibold text-primary-light">{level}%</span>
          </div>
          <div
            role="progressbar"
            aria-label={`${name} proficiency`}
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-1.5 overflow-hidden rounded-full bg-ink-700"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary-light"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      )}
    </motion.li>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section bg-ink-900/60">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="container-page">
        <SectionHeading
          id="skills-heading"
          index="02"
          eyebrow="Skills"
          title="Tools & technologies I work with."
          description="The languages, tools and technical skills I’ve built through my studies, TESDA training and industry training — and I keep adding to them."
        />

        <ul className="grid auto-rows-fr gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} index={i} {...skill} />
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
    </section>
  )
}
