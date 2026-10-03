import { motion } from 'framer-motion'
import { socials } from '../data/profile'

const sizes = {
  sm: 'h-10 w-10 text-[15px]',
  md: 'h-11 w-11 text-base',
}

/**
 * Row of social icons with pink hover state and an accessible tooltip.
 */
export default function SocialLinks({ size = 'md', tooltips = true, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map(({ name, href, icon: Icon }) => (
        <li key={name} className="group relative">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className={`flex items-center justify-center rounded-full border border-line bg-ink-850 text-muted transition-colors duration-300 hover:border-primary/70 hover:text-primary-light hover:shadow-glow-sm focus-visible:border-primary/70 focus-visible:text-primary-light ${sizes[size]}`}
          >
            <Icon aria-hidden="true" />
          </motion.a>
          {tooltips && (
            <span
              role="presentation"
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-line bg-ink-800 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              {name}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
