import React, { useState } from 'react'
import '../style/navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const about = [{name: "About Us", route: "/about"}, {name: "Leaders", route: "/leaders"}]
  const projects = [{name: "Environmental Projects", route: "/environmental-projects"}, {name: "GIS Projects", route: "/gis-projects"}];
  const services = [{name: "GIS Services", route: "/services/gis"}, {name: "Consulting Services", route: "/services/consulting"}, {name: "Assessment Services", route: "/services/assessment"}, {name: "Remediation Services", route: "/services/remediation"}, {name: "Other Services", route: "/services/other"}];

  return(
    <nav className={"navbar set"}>
      <Link to={'/'}>
        <div className="hies-name">
          <img src="images/new-hies.png" alt="hies logo"/>
          <div className="name">
            <h1 className="hies">HIES</h1>
            <p>Hawaii International Environmental Services</p>
          </div>
        </div>
      </Link>
      <div className="nav-items">
        <NavitemList list={about}>ABOUT US</NavitemList>
        <NavitemList list={projects}>PREVIOUS PROJECTS</NavitemList>
        <NavitemList list={services}>ENVIRONMENTAL SERVICES</NavitemList>
        <NavitemLink>REQUEST A QUOTE</NavitemLink>
      </div>
    </nav>
  )
}

const NavitemLink = (props) => {
  return(
    <div className="nav-item">
      <span>
        {props.children}
      </span>
    </div>
  )
}

const NavitemList = (props) => {
  const { list } = props
  const [ open, setOpen ] = useState(false)
  return(
    <div className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span>
        {props.children}
      </span>
      <Dropdown list={list} open={open}></Dropdown>
    </div>
  )
}

const Dropdown = ({ list, open }) => {
  const renderList = () => {
    return list.map((item, index) => <Link className="nav-dropdown-a" key={index} to={`${item.route}`}>{item.name}</Link>)
  }

  return(
    <ul className={open ? "nav-dropdown-open":"nav-dropdown-closed"} >
      {renderList()}
    </ul>
  )
}