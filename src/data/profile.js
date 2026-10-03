/**
 * ============================================================
 *  PERSONAL INFORMATION — edit this file to personalise the site
 * ============================================================
 *  Name, role, intro text, contact details, social links, About
 *  content and navigation all come from here.
 *
 *  Profile photo: see src/assets/images/README.md
 *  Education / certifications / training: src/data/resume.js
 */
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'

export const profile = {
  name: 'Trisha Mae Angel C. Sapeda',
  // How the name breaks across the two lines of the big hero headline
  nameLines: ['Trisha Mae Angel', 'C. Sapeda'],
  shortName: 'Trisha',
  initials: 'TS',
  role: 'Aspiring Web Developer',
  greeting: "Hi, I'm",
  intro:
    'A motivated and responsible Information Systems student with hands-on training in web development, Java programming, and database management — eager to learn from professionals and contribute positively to a real-world team.',

  // Small status badge shown in the hero. Set to '' to hide it.
  availability: 'Open for On-the-Job Training',

  email: 'sapedashamae@gmail.com',
  phone: '+63 993 987 8369',
  location: 'Calapan City, Oriental Mindoro',
}

// Social profile links. Remove an entry to hide that icon everywhere on the site.
export const socials = [
  { name: 'GitHub', href: 'https://github.com/sham-ii', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/trisha-mae-sapeda-1436a0428', icon: FaLinkedinIn },
  { name: 'Instagram', href: 'https://www.instagram.com/urr.shameii_', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/dearshamae', icon: FaFacebookF },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Keep it short: two paragraphs and three highlights.
export const about = {
  paragraphs: [
    'I’m a 4th-year Information Systems student at City College of Calapan who enjoys turning ideas into working web applications. I build with HTML, CSS, JavaScript, PHP and MySQL, and I learn best by building real projects.',
    'I’m looking for an On-the-Job Training opportunity where I can apply what I’ve learned, grow with experienced professionals, and contribute to a real team.',
  ],
  highlights: [
    { title: '4th Year', subtitle: 'BS Information Systems' },
    { title: 'TESDA Certified', subtitle: 'Java NC III · CSS NC II' },
    { title: 'OJT Ready', subtitle: '120 hrs industry training' },
  ],
}
