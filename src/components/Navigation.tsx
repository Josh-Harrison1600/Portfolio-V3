import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <aside className="navigation-component">
      <h1>Josh Harrison</h1>
      <p>Full-Stack Developer</p>

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
    </aside>
  )
}
