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
import { FiMessageCircle, FiUsers, FiSearch, FiRefreshCw, FiBookOpen } from 'react-icons/fi'

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

export const about = {
  lead: 'I’m an Information Systems student who enjoys turning ideas into working, user-friendly web applications.',
  paragraphs: [
    'I’m currently taking up a Bachelor of Science in Information Systems at City College of Calapan. Alongside my studies, I’ve completed TESDA training in Java Programming (NC III) and Computer Systems Servicing (NC II), including 120 hours of supervised industry training at OLLOPA Corporation.',
  ],
  points: [
    {
      title: 'Philosophy',
      text: 'Pay attention to the details, keep things simple for the user, and never stop learning. I take responsibility for my work and value clear communication with the people I build for.',
    },
    {
      title: 'What I enjoy building',
      text: 'Web applications that solve everyday problems — from clean front-end pages in HTML, CSS and JavaScript to PHP and MySQL systems that manage real data.',
    },
    {
      title: 'Where I’m heading',
      text: 'I’m looking for an On-the-Job Training opportunity where I can apply what I’ve learned, grow under experienced professionals, and build practical workplace experience.',
    },
  ],
  // Soft skills
  highlights: [
    {
      title: 'Communication',
      text: 'Explaining ideas clearly and listening carefully to understand what is needed.',
      icon: FiMessageCircle,
    },
    {
      title: 'Team Collaboration',
      text: 'Working well with others and sharing responsibility to reach common goals.',
      icon: FiUsers,
    },
    {
      title: 'Attention to Detail',
      text: 'Careful, accurate work — from clean code to well-organised data.',
      icon: FiSearch,
    },
    {
      title: 'Adaptability',
      text: 'Adjusting quickly to new tools, tasks and environments.',
      icon: FiRefreshCw,
    },
    {
      title: 'Willingness to Learn',
      text: 'Always open to feedback, new technologies and better ways of working.',
      icon: FiBookOpen,
    },
  ],
}
