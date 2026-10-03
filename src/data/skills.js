/**
 * ============================================================
 *  SKILLS — add, remove or reorder entries here
 * ============================================================
 *  level: optional 0–100 proficiency bar. Leave as null to hide the bar
 *         (only add numbers you're comfortable standing behind).
 *  icon:  any react-icons component (https://react-icons.github.io/react-icons/)
 */
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaMicrosoft } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { TbBrandVisualStudio } from 'react-icons/tb'

export const skills = [
  {
    name: 'HTML5',
    description: 'Well-structured, semantic markup for web pages.',
    icon: FaHtml5,
    level: null,
  },
  {
    name: 'CSS3',
    description: 'Styling and layout for clean, presentable interfaces.',
    icon: FaCss3Alt,
    level: null,
  },
  {
    name: 'JavaScript',
    description: 'Interactivity, form handling and dynamic page behaviour.',
    icon: FaJs,
    level: null,
  },
  {
    name: 'PHP',
    description: 'Server-side logic for dynamic, database-driven websites.',
    icon: FaPhp,
    level: null,
  },
  {
    name: 'Java',
    description: 'Object-oriented programming — TESDA Programming (Java) NC III.',
    icon: FaJava,
    level: null,
  },
  {
    name: 'Visual Basic',
    description: 'Desktop applications and games built in Visual Studio, like Smart Catch.',
    icon: TbBrandVisualStudio,
    level: null,
  },
  {
    name: 'MySQL',
    description: 'Database design, queries and managing application data.',
    icon: SiMysql,
    level: null,
  },
  {
    name: 'Microsoft Office',
    description: 'Word, Excel and PowerPoint for documents, data and presentations.',
    icon: FaMicrosoft,
    level: null,
  },
]

// Converts a numeric level into a readable label.
export function levelLabel(level) {
  if (level >= 85) return 'Advanced'
  if (level >= 70) return 'Proficient'
  return 'Intermediate'
}
