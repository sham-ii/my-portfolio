import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import { socials } from '../data/profile'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  const github = socials.find((s) => s.name === 'GitHub')

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section bg-ink-900/60">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="container-page">
        <SectionHeading
          id="projects-heading"
          index="04"
          eyebrow="Projects"
          title="Selected work."
          description="Projects I’ve worked on — from our team capstone to practice builds — showing how I approach practical, user-friendly web applications."
        />

        <ul className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.id}>
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>

        {github && (
          <Reveal className="mt-12 flex justify-center">
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary-light"
            >
              See more on GitHub
              <FiArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
