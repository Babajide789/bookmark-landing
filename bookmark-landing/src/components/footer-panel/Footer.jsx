import React from 'react'
import logo from "../../assets/images/logo-bookmark-white.svg"

import "./Footer.css"

import FBicon from "../../assets/images/icon-facebook.svg"
import Xicon from "../../assets/images/icon-twitter.svg"

const Footer = () => {
  return (
    <>
      <div className="footer-panel">
        <div className="footer-container">
          <div className="logo">
            <img src={logo} alt="Bookmark logo" />
          </div>

          <div className="footer-link">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>

          <div className="social-media-icon">
            <img src={FBicon} alt="Facebook" />
            <img src={Xicon} alt="Twitter" />
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Footer
