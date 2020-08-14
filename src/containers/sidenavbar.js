import React, { useState } from 'react'
import ArrowDown from '../svg/caret-down'
import { Link } from 'react-router-dom'
import { search } from '../redux-actions'
import { useDispatch } from 'react-redux'

export default function SideNav ({ openSide, setOpenSide }) {

  const dispatch = useDispatch();

  const [openAbout, setOpenAbout] = useState(false)
  const [openProjects, setOpenProjects] = useState(false)
  const [openService, setOpenService] = useState(false)

  return (
    <div className={openSide ? "side-navbar":"side-navbar closed"}>
      <span className="side-navbar-listitem">
        <Link to="/about" onClick={() => setOpenSide(!openSide)}>ABOUT</Link>
        <div className="bars" onClick={() => {setOpenAbout(!openAbout);setOpenProjects(false);setOpenService(false)}}>
          <ArrowDown/>
        </div>
      </span>
      <div className={openAbout ? "side-navbar-sublist about":"side-navbar-sublist closed"}>
        <Link to="/about" onClick={() => setOpenSide(false)}>About Us</Link>
        <Link to="/about/leaders" onClick={() => setOpenSide(false)}>Leaders</Link>
      </div>

      <span className="side-navbar-listitem">
        <Link to="/projects" onClick={() => setOpenSide(!openSide)}>PROJECTS</Link>
        <div className="bars" onClick={() => {setOpenProjects(!openProjects);setOpenAbout(false);setOpenService(false)}}>
          <ArrowDown/>
        </div>
      </span>
      <div className={openProjects ? "side-navbar-sublist projects":"side-navbar-sublist closed"}>
        <Link to="/projects/environmental" onClick={() => {setOpenSide(false)}}>Environmental</Link>
        <Link to="/projects/gis" onClick={() => {setOpenSide(false)}}>GIS</Link>
      </div>

      <span className="side-navbar-listitem">
        <Link to="/services" onClick={()=> {dispatch(search(''));setOpenSide(!openSide)}}>SERVICES</Link>
        <div className="bars" onClick={() => {setOpenService(!openService);setOpenAbout(false);setOpenProjects(false)}}>
          <ArrowDown/>
        </div>
      </span>
      <div className={openService ? "side-navbar-sublist services":"side-navbar-sublist closed"}>
        <Link to="/services/gis" onClick={() => {setOpenSide(false);dispatch(search(''))}}>GIS</Link>
        <Link to="/services/consulting" onClick={() => {setOpenSide(false);dispatch(search(''))}}>Consulting</Link>
        <Link to="/services/assessment" onClick={() => {setOpenSide(false);dispatch(search(''))}}>Assessment</Link>
        <Link to="/services/remediation" onClick={() => {setOpenSide(false);dispatch(search(''))}}>Remediation</Link>
        <Link to="/services/other" onClick={() => {setOpenSide(false);dispatch(search(''))}}>Other</Link>
      </div>

      <span className="side-navbar-listitem">
        <Link to="/contact" onClick={() => setOpenSide(!openSide)}>CONTACT US</Link>
      </span>
      
    </div>
  )
}