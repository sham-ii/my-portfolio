import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'
import SocialLinks from './SocialLinks'
import Reveal from './Reveal'

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  const contactItems = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-primary/[0.06] blur-[120px]"
      />
      <div className="container-page relative">
        <SectionHeading
          id="contact-heading"
          index="05"
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have an opportunity, a project in mind, or just want to say hello? Feel free to reach out through any of the channels below — I'd love to hear from you."
        />

        {/* Contact details */}
        <ul className="grid auto-rows-fr gap-4 sm:gap-5 xl:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => {
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary-light transition-colors duration-300 group-hover:border-primary/60">
                  <Icon aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
                  <p className="mt-1 break-words text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-primary-light">
                    {value}
                  </p>
                </div>
              </>
            )

            return (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.08 * i, ease }}
                // min-w-0 lets long values (like the email) wrap instead of widening the page
                className="min-w-0"
              >
                {href ? (
                  <a
                    href={href}
                    className="card group flex h-full items-center gap-4 p-5 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm sm:p-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="card group flex h-full items-center gap-4 p-5 sm:p-6">{content}</div>
                )}
              </motion.li>
            )
          })}
        </ul>

        {/* Socials + call to action */}
        <Reveal delay={0.15} className="card mt-4 flex flex-col gap-6 p-6 sm:mt-5 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">Let's connect</p>
            <p className="mt-1.5 text-sm text-muted">Find me on social media or send me an email anytime.</p>
            <SocialLinks className="mt-5" />
          </div>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary group w-full shrink-0 px-7 md:w-auto"
          >
            Email Me
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
