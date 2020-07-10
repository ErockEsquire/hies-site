import React from 'react'

export default function Navbar() {
  return(
    <nav className="navbar">
      <a href="">About</a>
      <a href="">Services</a>
      <div className="hies-name">
        <img src="images/new-hies.png" alt="hies logo"/>
        <h1 className="hies">HIES</h1>
      </div>
      <a href="">Projects</a>
      <a href="">Contact</a>
    </nav>
  )
}