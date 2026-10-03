import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'

/**
 * Full-screen viewer for a certificate photo.
 * Closes with the ✕ button, the Escape key, or a click/tap outside the image.
 * Rendered into <body> so animated (transformed) parents can't clip it.
 */
export default function CertificateModal({ cert, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!cert) return undefined

    const previouslyFocused = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      // Keep keyboard focus inside the dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll('a[href], button')
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previouslyFocused?.focus?.()
    }
  }, [cert, onClose])

  return createPortal(
    <AnimatePresence>
      {cert && (
        <motion.div
          key="certificate-modal"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="flex max-h-full w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-ink-900 shadow-card"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">{cert.issuer}</p>
                <h2 id="certificate-modal-title" className="mt-1 font-sans text-[15px] font-medium leading-snug text-white">
                  {cert.title}
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open full-size certificate in a new tab"
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary/60 hover:text-primary-light sm:flex"
                >
                  <FiExternalLink aria-hidden="true" />
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close certificate"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-lg text-white transition-colors hover:border-primary/60 hover:text-primary-light"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Certificate */}
            <div className="min-h-0 flex-1 overflow-auto bg-ink-950 p-3 sm:p-4">
              <img
                src={cert.image}
                alt={`${cert.title} certificate issued by ${cert.issuer}`}
                width="1271"
                height="1800"
                className="mx-auto h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
