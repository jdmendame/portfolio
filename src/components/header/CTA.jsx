import React from 'react'
import CV from "../../assets/cv.pdf"

const CTA = () => {
  return (
    <div className='cta'>
    {/* download = download attribute added to link */}
      <a href={CV} download className='btn'>Download CV</a>  
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      {/* <a href='https://www.linkedin.com/in/jestan-dale-mendame-9a800a234/' className='btn btn-white'>See LinkIn Profile</a> */}
    </div>
  )
}

export default CTA

