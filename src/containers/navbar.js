import React, { useState } from 'react'

export default function Navbar() {

  const services = [{name: "Green Technologies"}, {name: "Range Sustainment"}, {name: "Environmental Services"}, {name: "Tsunami Services"}, {name: "International Management"}];
  const projects = [{name: "Environmental Projects"}, {name: "GIS Projects"}];

  return(
    <nav className="navbar">
      <NavitemLink>About</NavitemLink>
      <NavitemLink>Contact</NavitemLink>
      <div className="hies-name">
        <img src="images/new-hies.png" alt="hies logo"/>
        <h1 className="hies">HIES</h1>
      </div>
      <NavitemList list={projects}>Projects</NavitemList>
      <NavitemList list={services}>Services</NavitemList>
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
    return list.map(item => <li className="nav-dropdown-li">{item.name}</li>)
  }

  return(
    <ul className={open ? "nav-dropdown-open":"nav-dropdown-closed"} >
      {renderList()}
    </ul>
  )
}