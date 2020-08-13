import React, { useState } from 'react'

const ProjectCard = (props) => {

  const { title, location, client, paragraphs} = props.project
  const [open, setOpen] = useState(false)

  const renderParagraphs = () => {
    return paragraphs.map(paragraph => <p>{paragraph}</p>)
  }

  return (
    <article className="project-card" onClick={() => setOpen(!open)}>
      <div className="project-title">
        <div>
          <h2>{title}</h2>
          <h3>{location}</h3>
          <h3>Client: <strong>{client}</strong></h3>
        </div>
        <svg className={open ? "arrow-down":"arrow-right"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
      </div>
      {open && <div className="project-text">
        {renderParagraphs()}
      </div>}
    </article>
  )
}

export default ProjectCard;