import './Projects.css'
import KanaTyper from '../../src/icons/kanatyper.png'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      projectTitle: 'Kana Typer',
      projectDescription:
        'Kana Typer is a web app that helps users learn the main two Japanese phonetic systems, Hiragana & Katakana. The user can select individual symbols, specific categories, or the entire system to study and review!',
      image: KanaTyper,
    },
    {
      projectTitle: 'Japan Job Scraper',
      projectDescription:
        'Japan job scraper is a web scraper I built for my own personal use that scraps a list of Japanese job boards and filters their compatability with me and sends it to a React front-end! The scraper has been set to run weekly and update the front-end only with the new jobs that have been posted within the last week so I can constantly see new job postings without having to sort through multiple sites manually!',
      image: KanaTyper,
    },
    {
      projectTitle: 'Lineup Site',
      projectDescription:
        'This is a WIP where users can post videos of lineups and allow other users to vote on their usefulness',
      image: KanaTyper,
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
