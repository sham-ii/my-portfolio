import Reveal from './Reveal'

/**
 * Consistent section header: numbered eyebrow, title and optional description.
 */
export default function SectionHeading({ index, eyebrow, title, description, id, align = 'left' }) {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-12 max-w-2xl sm:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        <span className="font-display text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
