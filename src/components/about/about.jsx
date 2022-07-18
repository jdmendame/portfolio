import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {MdOutlineFolderSpecial} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsBugFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about_container">
       <div className="about_me">
         <div className="about_me-image">
           <img src={ME} alt="About Image" />
         </div>  
       </div>

      <div className='about_content'>
        <div className="about_cards">
          <article className="about_card">
            <RiAwardFill className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about_card">
            <MdOutlineFolderSpecial className='about_icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>

          <article className="about_card">
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>20+ Worlwide</small>
          </article>

          
          <article className="about_card">
            <BsBugFill className='about_icon'/>
            <h5>Bugs Fixed</h5>
            <small>Too many...</small>
          </article>



        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error, incidunt sunt suscipit labore sint odit ab eos tempore animi amet, dolor hic mollitia? Natus consequatur impedit voluptate recusandae odio?</p>

        <a href='#contact' className="btn btn-primary">Let's Talk!</a>
      </div>
    </div> 
    

 

    </section>

  
  )
}

export default About