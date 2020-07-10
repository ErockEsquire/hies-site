import React from 'react'

export default function Navbar() {
  return(
    <nav className="navbar">
      <span>About</span>
      <span>Services</span>
      <div className="hies-name">
        <img src="images/new-hies.png" alt="hies logo"/>
        <h1 className="hies">HIES</h1>
      </div>
      <span>Projects</span>
      <span>Contact</span>
    </nav>
  )
}