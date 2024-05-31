import React from 'react'
import './Footer.css'
import Logo from '../../assets/Ellipse 3.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/Icon.png'

const Footer = () => {
  return (
    <footer>
        <div className='open-school'>
            <h3>OPEN SCHOOL</h3>
            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            <div className="contact">
                <img src={mail_icon} alt="" />
                <span>hello@littelearners.com</span>
            </div>
            <div className="contact">
                <img src={phone_icon} alt="" />
                <span>+91 91813232309</span>
            </div>
        </div>
        <div className="footer-logo">
            <img src={Logo} alt="" />
        </div>
        <div className="footer-navigations">
            <div className="home">
                <h3>Home</h3>
                <p>Features</p>
                <p>Our Testimonials</p>
                <p>FAQ</p>
            </div>
            <div>
                <h3>About Us</h3>
                <p>Our Mission</p>
                <p>Our Vission</p>
                <p>Awards and Recognitions</p>
                <p>History</p>
                <p>Teachers</p>
            </div>
            <div className="academics">
                <h3>Academics</h3>
                <p>Special Features</p>
                <p>Gallery</p>
            </div>
            <div className="map">
                <h3>Contact Us</h3>
                <p>Information</p>
                <p>Map & Direction</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
