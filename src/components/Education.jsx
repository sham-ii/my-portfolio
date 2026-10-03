import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { FiBookmark, FiAward, FiCalendar, FiMaximize2 } from 'react-icons/fi'
import { education, training, certifications } from '../data/resume'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CertificateModal from './CertificateModal'

const ease = [0.22, 1, 0.36, 1]

function ColumnTitle({ icon: Icon, children }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary-light">
        <Icon aria-hidden="true" />
      </span>
      {children}
    </h3>
  )
}

export default function Education() {
  const [openCert, setOpenCert] = useState(null)
  const closeCert = useCallback(() => setOpenCert(null), [])

  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-page">
        <SectionHeading
          id="education-heading"
          index="03"
          eyebrow="Education"
          title="Education & credentials."
          description="My academic background, industry training and certifications."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education timeline */}
          <div>
            <ColumnTitle icon={FiBookmark}>Education</ColumnTitle>
            <ol className="space-y-4">
              {education.map((item, i) => (
                <motion.li
                  key={item.school}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.08 * i, ease }}
                  whileHover={{ x: 4 }}
                  className="card group relative overflow-hidden p-5 pl-7 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm sm:p-6 sm:pl-8"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1 ${item.current ? 'bg-primary' : 'bg-line group-hover:bg-primary/60'} transition-colors`}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h4 className="font-display text-lg font-semibold text-white">{item.school}</h4>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                        item.current
                          ? 'border-primary/40 bg-primary/10 text-primary-soft'
                          : 'border-line text-muted'
                      }`}
                    >
                      <FiCalendar aria-hidden="true" />
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[15px] text-muted">{item.program}</p>
                </motion.li>
              ))}
            </ol>

            {/* Training & seminars */}
            <Reveal className="mt-12">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Seminars &amp; Training
              </h3>
              <ul className="space-y-4 border-l border-line pl-6">
                {training.map((item) => (
                  <li key={item} className="relative text-[15px] leading-relaxed text-white/85">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[29px] top-[7px] h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Certifications */}
          <div>
            <ColumnTitle icon={FiAward}>Certifications</ColumnTitle>
            <ul className="space-y-4">
              {certifications.map((cert, i) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-800 text-lg text-primary-light transition-colors duration-300 group-hover:border-primary/50">
                      <FiAward aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                        {cert.issuer}
                        {cert.issued && <span className="font-medium normal-case tracking-normal text-muted"> · {cert.issued}</span>}
                      </p>
                      <h4 className="mt-1 font-sans text-[15px] font-medium leading-snug text-white">{cert.title}</h4>
                      {cert.image && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light">
                          <FiMaximize2 aria-hidden="true" />
                          View certificate
                        </span>
                      )}
                    </div>
                  </>
                )
                const cardClass =
                  'card group flex w-full gap-4 p-5 text-left transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-glow-sm sm:p-6'

                return (
                  <motion.li
                    key={cert.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: 0.08 * i, ease }}
                    whileHover={{ y: -3 }}
                  >
                    {cert.image ? (
                      <button
                        type="button"
                        onClick={() => setOpenCert(cert)}
                        aria-haspopup="dialog"
                        aria-label={`View certificate: ${cert.title}`}
                        className={`${cardClass} cursor-pointer`}
                      >
                        {body}
                      </button>
                    ) : (
                      <div className={cardClass}>{body}</div>
                    )}
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <CertificateModal cert={openCert} onClose={closeCert} />
    </section>
  )
}
