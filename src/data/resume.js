/**
 * ============================================================
 *  EDUCATION, TRAINING & CERTIFICATIONS
 * ============================================================
 *  Shown in the Education section. Add, remove or reorder freely.
 *
 *  Certificate photos: put the image in src/assets/images/certificates/,
 *  import it below and add `image: yourImport` to that certificate —
 *  its card then opens the photo in a viewer when tapped.
 */
import cssNc2Img from '../assets/images/certificates/tesda-css-nc2.jpg'

export const education = [
  {
    school: 'City College of Calapan',
    program: 'Bachelor of Science in Information Systems',
    period: '2023 – Present',
    current: true,
  },
  {
    school: 'Managpi National High School',
    program: 'General Academic Strand (GAS)',
    period: '2021 – 2023',
  },
  {
    school: 'Batino Elementary School',
    program: 'Elementary Education',
    period: '2011 – 2017',
  },
]

export const training = [
  'TESDA Computer System Servicing Training',
  'Programming (Java) NC III — 40 Days Training',
  'Supervised Industry Training of Programming (Java) NC III at OLLOPA Corporation — 120 hours',
  'Calapan City 2nd IT Summit',
  'DICT Seminar',
]

export const certifications = [
  {
    title: 'National Certificate of Training — Programming (Java) NC III',
    issuer: 'TESDA',
  },
  {
    title: 'National Certificate II — Computer Systems Servicing (CSS NC II)',
    issuer: 'TESDA',
    issued: 'December 2024',
    image: cssNc2Img,
  },
  {
    title: 'Certificate of Enterprise Training Completion — Supervised Industry Training of Programming (Java) NC III',
    issuer: 'OLLOPA Corporation',
  },
  {
    title: 'Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft Cybersecurity Course',
  },
]
