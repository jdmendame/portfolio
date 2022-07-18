import React from 'react'
import './nav.css'
import {GoHome} from "react-icons/go"
import {AiOutlineUser} from "react-icons/ai"
import {RiComputerLine} from "react-icons/ri"
import {TbHeartHandshake} from "react-icons/tb"
import {BsPhoneVibrate} from "react-icons/bs"
import {useState} from 'react'


const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiComputerLine/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><TbHeartHandshake/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsPhoneVibrate/></a>

    </nav>
  )
}

export default Nav