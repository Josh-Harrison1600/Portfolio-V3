import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Navigation.css'

export default function Navigation() {
  const skills = ['JavaScript', 'Python', 'FastAPI', 'React', 'CSS']

  return (
    <aside className="navigation-component">
      <div className="name-title-button">
        <h1 className="name">Josh Harrison</h1>
        <p className="left-p">Full-Stack Developer</p>
        <LanguageSwitcher />
      </div>

      <div className="skills-section">
        <p className="left-p">Skills</p>
        <div className="skills-track">
          {[
            ...skills.map((skill) => ({ skill, id: `a-${skill}` })),
            ...skills.map((skill) => ({ skill, id: `b-${skill}` })),
          ].map(({ skill, id }) => (
            <span key={id} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="links-and-footer">
        <nav aria-label="Main" className="navigation-links">
          <ul className="ul-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Experience</a>
            </li>
            <li>
              <a href="#about">Projects</a>
            </li>
          </ul>
        </nav>

        <footer className="socials">
          <FaLinkedin size={32} />
          <FaGithub size={32} />
          <MdOutlineMail size={32} />
        </footer>
      </div>
    </aside>
  )
}
