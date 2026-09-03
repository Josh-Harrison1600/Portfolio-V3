import './Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      projectTitle: 'Kana Typer',
      projectDescription:
        'This was a kana typer application made in react and tailwind',
      image: 'Apr 2026 - Present',
    },
    {
      projectTitle: 'Kana Typer',
      projectDescription:
        'This was a kana typer application made in react and tailwind',
      image: 'Apr 2026 - Present',
    },
    {
      projectTitle: 'Kana Typer',
      projectDescription:
        'This was a kana typer application made in react and tailwind',
      image: 'Apr 2026 - Present',
    },
  ]

  return (
    <div className="projects-section">
      {projects.map((project) => (
        <ProjectCard key={project.projectTitle} {...project} />
      ))}
    </div>
  )
}
