import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://github.com/jdmendame" target="_blank" rel="noopener"><BsGithub/></a>
    <a href="https://www.linkedin.com/in/jestan-dale-mendame-9a800a234/" target="_blank" rel="noopener"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials