import React from 'react'
import "./Footer.css"
import FooterLog from "./Assets/SHOD Logo WHITE.png"

const Footer = () => {
  return (
    <>
      <div className='container-fluid background_footer  py-3 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='footerimg '>
                <img src={FooterLog} alt='' className='img-fluid'></img>
                <h6 className='text-white footermission'>Mission</h6>
                <p className='footerptag'>To be a catalyst for innovation and progress,
                  fostering a culture of creativity, curiosity, and
                  continuous learning in everything we do.</p>
              </div>


            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <div class="custom-footer">
                <h6>Company</h6>
                <ul class="list_font_size">
                  <li>Home</li>
                  <li>Services we offer</li>
                  <li>News</li>
                  <li>Data Protection Policy</li>
                  <li>Contact Us</li>
                </ul>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              <div class="custom-footer">
                <h6>Analytical Services</h6>
                <ul class="list_font_size">
                  <li>DATA Modernisation</li>
                  <li>Enterprise AI Services</li>
                  <li>Generative AI</li>
                  <li>AI Console</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <div class="custom-footer">
                <h6>Products</h6>
                <ul class="list_font_size">
                  <li>Information</li>
                  <li>Pricing</li>
                  <li>Login</li>                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <div class="custom-footer">
                <h6>Help</h6>
                <ul class="list_font_size">
                  <li>Apply for Jobs</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row  copyright'>
          <div className='col'>
            <div className='copyright1'>
              <span class=" text-white  connect_back ">Connect me to an expert</span>
              <h6 className=''>Copyright <i class="bi bi-c-circle"></i> 2024 Stephen's House of Design.All right reserved.</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
