import Reveal from './Reveal'

/**
 * Consistent section header: numbered eyebrow, title and optional description.
 */
export default function SectionHeading({ index, eyebrow, title, description, id, align = 'left' }) {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-8 max-w-2xl sm:mb-10 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        <span className="font-display text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">{description}</p>
      )}
    </Reveal>
  )
}
