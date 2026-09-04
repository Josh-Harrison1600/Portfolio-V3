import './Experience.css'
import {
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiMongodb,
  SiRedhatopenshift,
  SiTerraform,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { VscAzure, VscMcp } from 'react-icons/vsc'
import { SiTypescript } from '../icons/SiTypescript'

import ExperienceCard from './ExperienceCard'
export default function Experience() {
  const jobs = [
    {
      company: 'CGS',
      jobTitle: 'Full Stack Developer',
      datesWorked: 'Apr 2026 - Present',
      location: 'Remote, Canada',
      jobDescription:
        'Created an internal full-stack application with React, TypeScript Node.js, CSS, Tailwind, and Retrieval Augmented Generation. Deployed and managed a full-stack application using CI/CD, GitHub Actions, and Microsoft Azure services. Developed a bankruptcy processing form in React, using TypeScript and Tailwind CSS, tailored to client-specific needs. Integrated form state management and validation for a seamless and error-resistant user experience. Coordinated backend enhancements using Node.js for custom API logic and data handling.',
      techIcons: [
        FaReact,
        SiFastapi,
        FaPython,
        FaJs,
        FaCss3Alt,
        VscMcp,
        TbSql,
        SiRedhatopenshift,
      ],
    },
    {
      company: 'General Data',
      jobTitle: 'Full Stack Developer',
      datesWorked: 'Aug 2024 - Mar 2026',
      location: 'Moncton, NB, Canada',
      jobDescription:
        'Created an internal full-stack application with React, TypeScript Node.js, CSS, Tailwind, and Retrieval Augmented Generation. Deployed and managed a full-stack application using CI/CD, GitHub Actions, and Microsoft Azure services. Developed a bankruptcy processing form in React, using TypeScript and Tailwind CSS, tailored to client-specific needs. Integrated form state management and validation for a seamless and error-resistant user experience. Coordinated backend enhancements using Node.js for custom API logic and data handling.',
      techIcons: [
        FaReact,
        FaNodeJs,
        SiTypescript,
        SiMongodb,
        VscAzure,
        FaCss3Alt,
      ],
    },
    {
      company: 'HENNGE',
      jobTitle: 'Frontend Developer Intern',
      datesWorked: 'Nov 2025 - Dec 2025',
      location: 'Tokyo, Japan',
      jobDescription:
        'Created an admin dashboard Using React, TypeScript, and CSS along with a variety of libraries such as React Query. Deployed the application using CI/CD, and GitHub Actions. Set up an AWS environment with Terraform, S3, CloudFront, and Route53 to support the deployment of the application. Participated in daily standups with engineering team to discuss and solve issues.',
      techIcons: [FaReact, SiTypescript, FaCss3Alt, SiTerraform, FaAws],
    },
    {
      company: 'Cloud&More',
      jobTitle: 'Web Developer Intern',
      datesWorked: 'May 2023 - Aug 2023',
      location: 'Moncton, NB, Canada',
      jobDescription:
        'Created an internal full-stack application with React, TypeScript Node.js, CSS, Tailwind, and Retrieval Augmented Generation. Deployed and managed a full-stack application using CI/CD, GitHub Actions, and Microsoft Azure services. Developed a bankruptcy processing form in React, using TypeScript and Tailwind CSS, tailored to client-specific needs. Integrated form state management and validation for a seamless and error-resistant user experience. Coordinated backend enhancements using Node.js for custom API logic and data handling.',
      techIcons: [FaReact, FaCss3Alt, FaJs, FaHtml5],
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
