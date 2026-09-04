import type { IconType } from 'react-icons'
import './ExperienceCard.css'
import TechIcons from './TechIcons'

type ExperienceCardProps = {
  company: string
  jobTitle: string
  datesWorked: string
  location: string
  jobDescription: string
  techIcons: IconType[]
}

export default function ExperienceCard({
  company,
  jobTitle,
  datesWorked,
  location,
  jobDescription,
  techIcons,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="company-info">
        <h1>{company}</h1>
        <h2>{jobTitle}</h2>
        <p className="date-worked-text">{datesWorked}</p>
        <p>{location}</p>
      </div>

      <div className="experience-description">
        <p>{jobDescription}</p>
        <TechIcons icons={techIcons} />
      </div>
    </div>
  )
}
