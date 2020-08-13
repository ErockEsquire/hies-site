import React from 'react'
import EProjects from './eprojects'
import GProjects from './gprojects'
import ScrollAnimation from 'react-animate-on-scroll';
import '../style/projects.scss'
import { Route, Link  } from 'react-router-dom'

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-top-header">
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={250}><h1>Projects</h1></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={500}><p>HIES has completed countless projects, securing their position as a top Environmental Services company in the Pacific Rim region over the past 25 years.</p></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={500}><p>These are some of HIES documented Environmental and GIS projects, often expanding into other fields such as ecological and biological work.</p></ScrollAnimation>
      </div>
      <Route path="/projects" component={ProjectsPage}/>
      <Route path="/projects/environmental" component={EProjects}/>
      <Route path="/projects/gis" component={GProjects}/>
      <div className="projects-bottom-header">
        <article>
          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={250}><h2>"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has."</h2></ScrollAnimation>
          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={500}><p>- Margaret Mead</p></ScrollAnimation>
        </article>
      </div>
    </section>
  )
}

const ProjectsPage = () => {
  return (
    <section className="project-main">
      <Link to="/projects/environmental">
        <div className="project-column">
          <h2>Environmental Projects</h2>
          <img className="service-icon" src="./images/icons/other.png" alt="Environmental Icon" />
        </div>
      </Link>
      <Link to="/projects/gis">
        <div className="project-column">
          <h2>GIS Projects</h2>
          <img className="service-icon" src="./images/icons/gis.png" alt="GIS Icon." />
        </div>
      </Link>
    </section>
  )
}