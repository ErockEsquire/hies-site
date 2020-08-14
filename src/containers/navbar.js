import React, { useState } from 'react'
import '../style/navbar.scss'
import SideNav from './sidenavbar'
import { Link } from 'react-router-dom'
import { search } from '../redux-actions'
import { useDispatch } from 'react-redux'
import OutsideClickHandler from 'react-outside-click-handler';

export default function Navbar() {

  const about = [{name: "About Us", route: "/about"}, {name: "Leaders", route: "/about/leaders"}]
  const projects = [{name: "Environmental Projects", route: "/projects/environmental"}, {name: "GIS Projects", route: "/projects/gis"}];
  const services = [{name: "GIS Services", route: "/services/gis"}, {name: "Consulting Services", route: "/services/consulting"}, {name: "Assessment Services", route: "/services/assessment"}, {name: "Remediation Services", route: "/services/remediation"}, {name: "Other Services", route: "/services/other"}];

  const dispatch = useDispatch();
  const [openSide, setOpenSide] = useState(false)

  return(
    <nav className={"navbar set"}>
    
      <Link to={'/'}>
        <div className="hies-name">
          <img src="favicon.png" alt="hies logo"/>
          <div className="name">
            <h1 className="hies">HIES</h1>
            <p>Hawaii International Environmental Services</p>
          </div>
        </div>
      </Link>
      <div className="nav-items">
        <NavitemList list={about}><Link to="/about">About</Link></NavitemList>
        <NavitemList list={projects}><Link to="/projects">Projects</Link></NavitemList>
        <NavitemList list={services}><Link to="/services" onClick={()=> dispatch(search(''))}>Services</Link></NavitemList>
        <NavitemLink><Link to="/contact">Contact US</Link></NavitemLink>
      </div>

      <OutsideClickHandler
      onOutsideClick={() => {
        setOpenSide(false);
      }}
    >
      <div className="bars" onClick={() => setOpenSide(!openSide)}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </div>
      
      <SideNav openSide={openSide} setOpenSide={setOpenSide}/>
    </OutsideClickHandler>
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
  const dispatch = useDispatch();
  const renderList = () => {
    return list.map((item, index) => <Link className="nav-dropdown-a" key={index} to={`${item.route}`} onClick={()=> dispatch(search(''))}>{item.name}</Link>)
  }

  return(
    <ul className={open ? "nav-dropdown-open":"nav-dropdown-closed"} >
      {renderList()}
    </ul>
  )
}

