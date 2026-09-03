import './ProjectCard.css'

type ProjectCardProps = {
  projectTitle: string
  projectDescription: string
  image: string
}

export default function ProjectCard({
  projectTitle,
  projectDescription,
  image,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img alt="project img" src={image} />
      </div>
      <div className="project-info">
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>
      </div>
    </div>
  )
}
