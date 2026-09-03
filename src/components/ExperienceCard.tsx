import './ExperienceCard.css'

type ExperienceCardProps = {
  company: string
  jobTitle: string
  datesWorked: string
  location: string
  jobDescription: string
}

export default function ExperienceCard({
  company,
  jobTitle,
  datesWorked,
  location,
  jobDescription,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="company-info">
        <h1>{company}</h1>
        <h2>{jobTitle}</h2>
        <p>{datesWorked}</p>
        <p>{location}</p>
      </div>

      <div className="experience-description">
        <p>{jobDescription}</p>
      </div>
    </div>
  )
}
