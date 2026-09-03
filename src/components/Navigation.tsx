import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaPython,
  FaReact,
  FaRobot,
} from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { SiFastapi, SiMongodb, SiTerraform } from 'react-icons/si'
import { VscMcp } from 'react-icons/vsc'
import { SiTypescript } from '../icons/SiTypescript'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Navigation.css'

export default function Navigation() {
  const skills = [
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Python', Icon: FaPython },
    { name: 'FastAPI', Icon: SiFastapi },
    { name: 'React', Icon: FaReact },
    { name: 'CSS', Icon: FaCss3Alt },
    { name: 'MCP', Icon: VscMcp },
    { name: 'AI-Development', Icon: FaRobot },
    { name: 'SQL', Icon: FaDatabase },
    { name: 'JavaScript', Icon: FaJs },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'AWS', Icon: FaAws },
    { name: 'Terraform', Icon: SiTerraform },
  ]

  return (
    <aside className="navigation-component">
      <div className="name-title-button">
        <h1 className="name">Josh Harrison</h1>
        <p className="left-p">Full-Stack Developer</p>
        <LanguageSwitcher />
      </div>

      <div className="skills-section">
        <p className="left-p">My Skills</p>
        <div className="skills-track">
          {[
            ...skills.map((skill) => ({ ...skill, id: `a-${skill.name}` })),
            ...skills.map((skill) => ({ ...skill, id: `b-${skill.name}` })),
          ].map(({ name, Icon, id }) => (
            <span key={id} className="skill-item">
              <Icon size={26} />
              {name}
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
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
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
