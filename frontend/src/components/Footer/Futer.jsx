import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets.js';

const Futer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> Follow us on social media for updates and special offers. Your satisfaction is our priority. Terms and conditions apply. Subscribe to our newsletter for exclusive deals. Thank you for choosing us for your dining needs.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 8912127800</li>
            <li>contact@tomato.gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">CopyRight 2024 © Tomato.com - All Right Reserved</p>
    </div>
  );
}

export default Futer;
