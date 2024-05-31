import React, { useState } from 'react'
import './Terms.css'
import Fb_logo from '../../assets/fb.png'
import Twitter_logo from '../../assets/twitter.png'
import Linkedin_logo from '../../assets/linkedin.png'

const Terms = () => {
    const [currentDate , setCurrentDate] = useState(new Date().getFullYear())
  
  return (
    <>
    <hr />
    <div className='terms'>
        <div className="terms-text">
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
        <div className="social-links">
            <img src={Fb_logo} alt="" />
            <img src={Twitter_logo}alt="" />
            <img src={Linkedin_logo} alt="" />

        </div>
      
    </div>
    <hr />
    <div className="copyright-text">
        <p>Copyright © [{currentDate}] OPEN SCHOOL  Learners Academy. All rights reserved.</p>
    </div>
    </>
  )
}

export default Terms
