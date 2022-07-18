import React from 'react'
import './experience.css'
import {FaCheckCircle} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
       <h5>What Skills I Have</h5>
       <h2>My Experience</h2>

<div className="container experience_container">
  <div className="experience_frontend">
    <h3>Frontend</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
           <div>
            <h4>HTML</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>CSS</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>Bootstrap</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>ReactJS</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>Javascript</h4>
           </div>
        </article>
      </div>
  </div>
<div className="experience_backend">
  <h3>Backend</h3>
  <div className="experience_content">
    <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>NodeJS</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>MongoDB</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>MySQL</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>AWS Amplify</h4>
           </div>
        </article>
        <article className='experience_details'>
          <FaCheckCircle className='experience_icon'/>
          <div>
            <h4>Express JS</h4>
           </div>
        </article>
    </div>

    </div>

</div>


    </section>
  )
}

export default Experience