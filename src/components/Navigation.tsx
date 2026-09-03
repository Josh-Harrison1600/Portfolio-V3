import './Navigation.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { LanguageSwitcher } from './LanguageSwitcher'

export default function Navigation() {
  return (
    <aside className="navigation-component">
      <div className="name-title-button">
        <h1 className="name">Josh Harrison</h1>
        <p className="job-title">Full-Stack Developer</p>
        <LanguageSwitcher />
      </div>

      <div className="links-and-footer">
        <nav aria-label="Main" className="navigation-links">
          <ul>
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
