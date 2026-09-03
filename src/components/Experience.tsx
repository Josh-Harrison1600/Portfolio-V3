import './Experience.css'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const jobs = [
    {
      company: 'Computer Generated Solutions',
      jobTitle: 'Full Stack Developer',
      datesWorked: 'Apr 2026 - Present',
      location: 'Remote, Canada',
      jobDescription: 'This is a job description...',
    },
    {
      company: 'General Data',
      jobTitle: 'Full Stack Developer',
      datesWorked: 'Aug 2024 - Mar 2026',
      location: 'Moncton, NB, Canada',
      jobDescription: 'Something else...',
    },
    {
      company: 'HENNGE',
      jobTitle: 'Frontend Developer Intern',
      datesWorked: 'Nov 2025 - Dec 2025',
      location: 'Tokyo, Japan',
      jobDescription: 'Something else...',
    },
    {
      company: 'Cloud&More',
      jobTitle: 'Web Developer Intern',
      datesWorked: 'May 2024 - Aug 2024',
      location: 'Moncton, NB, Canada',
      jobDescription: 'Something else...',
    },
  ]

  return (
    <div className="experience-section">
      {jobs.map((job) => (
        <ExperienceCard key={job.company} {...job} />
      ))}
    </div>
  )
}
