import type { IconType } from 'react-icons'
import './ProjectCard.css'
import TechIcons from './TechIcons'

type ProjectCardProps = {
  projectTitle: string
  projectDescription: string
  image: string
  techIcons: IconType[]
}

export default function ProjectCard({
  projectTitle,
  projectDescription,
  image,
  techIcons,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="image-section">
        <img className="project-image" alt="project img" src={image} />
      </div>
      <div className="project-info">
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>
        <TechIcons icons={techIcons} />
      </div>
    </div>
  )
}
