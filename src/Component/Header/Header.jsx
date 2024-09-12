import React, { useState } from 'react';
import img1 from "../../Component/Header/Assets/12.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-12 Header_Contant my-3'>
          <div className='img_logo'>
            <a href="/"><img src={img1} alt="Logo"  /></a>
          </div>
          <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='offcanvas-header'>
              <span className='close-button' onClick={toggleMenu}>×</span>
            </div>
            <div className='offcanvas-content'>
              <a href="">HOUSE</a>
              <a href="">SOLUTIONS</a>
              <a href="">INSIGHTS</a>
              <a href="">CONTACT US</a>
              <button>Schedule a call</button>
            </div>
          </div>
          <div className='toggle-button' onClick={toggleMenu}>
            ☰
          </div>
          <div className='large_screen'>
            <div className='atagmove'>
            <a href="/Parallex" className='home_btn'>HOUSE</a>
              <a href="/ModernSupplySolutions">SOLUTIONS</a>
              <a href="/Open">INSIGHTS</a>
              <a href="/Contactus">CONTACT US</a>
            </div>
            
              <button>Schedule a call</button>
            </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
