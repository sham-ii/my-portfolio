import { motion } from 'framer-motion'
import { FiArrowUpRight, FiFileText } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

/**
 * Reusable project card — all content comes from src/data/projects.js
 */
export default function ProjectCard({ project, index }) {
  const { title, description, image, tags, liveUrl, githubUrl, docUrl, badge } = project
  const number = String(index + 1).padStart(2, '0')

  // Whichever links exist, in priority order; the first one is the pink button
  const links = [
    liveUrl && { href: liveUrl, label: 'Live Demo', soloLabel: 'Live Demo', aria: 'Live demo of', icon: FiArrowUpRight },
    githubUrl && { href: githubUrl, label: 'GitHub', soloLabel: 'View on GitHub', aria: 'Source code of', icon: FaGithub, iconFirst: true },
    docUrl && { href: docUrl, label: 'Design Doc', soloLabel: 'View Design Doc', aria: 'Design document for', icon: FiFileText, iconFirst: true },
  ]
    .filter(Boolean)
    .slice(0, 2)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="card group flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm"
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink-900">
        <img
          src={image}
          alt={`Preview of the ${title} project`}
          loading="lazy"
          decoding="async"
          width="800"
          height="500"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-850/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 font-display text-xs font-semibold text-primary-light backdrop-blur">
          {number}
        </span>
        {badge && (
          <span className="absolute bottom-3 left-4 rounded-full border border-primary/40 bg-ink-950/80 px-3 py-1 text-[11px] font-semibold text-primary-soft backdrop-blur">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.aria} ${title} (opens in a new tab)`}
              className={`flex-1 !px-4 !py-2.5 ${i === 0 ? 'btn-primary' : 'btn-outline'}`}
            >
              {link.iconFirst && <link.icon aria-hidden="true" />}
              {links.length === 1 ? link.soloLabel : link.label}
              {!link.iconFirst && <link.icon aria-hidden="true" />}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
