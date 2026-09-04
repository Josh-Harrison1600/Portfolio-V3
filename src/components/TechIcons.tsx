import type { IconType } from 'react-icons'
import { TECH_DOCS } from '../techDocs'
import './TechIcons.css'

type TechIconsProps = {
  icons: IconType[]
}

export default function TechIcons({ icons }: TechIconsProps) {
  return (
    <div className="tech-icons">
      {icons.map((Icon) => {
        const href = TECH_DOCS[Icon.name]
        const icon = <Icon size={32} />

        if (!href) {
          return <span key={Icon.name}>{icon}</span>
        }

        return (
          <a
            key={Icon.name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${Icon.name} documentation`}
          >
            {icon}
          </a>
        )
      })}
    </div>
  )
}
