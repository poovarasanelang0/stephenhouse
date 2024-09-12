import React from "react";
import "./Contactus.css"
import img1 from "../../Component/Contactus/Assets/Whatsapp Logo.png"
import img2 from "../../Component/Contactus/Assets/Location Pin.png"

import vedio from "../../Component/Contactus/Assets/Contact Us-2.mp4"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { PopupButton } from "react-calendly";


const Contactus = () => {
 
  return (
    <>
  
   
      <Header />


      <div className='container-fluid container_fluid_contactus'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12 d-flex Contact_content'>
            <div className="player_01 text-center">
              <video className="react_01  " src={vedio} loop autoPlay muted>
                Your browser does not support HTML video.
              </video>
            </div>
            <div className='Contact_content2'>
              <p>Sit back and relax while we get <br /> you your <button class="custom-btn btn-11">New-Gen Ai toy.<div class="dot"></div></button> <br />
                <span>Thus, the Power shift to you</span></p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12 address_Content_All '>
            <div className='address_Content_1'>
            <div >
                <PopupButton
                  url="https://calendly.com/stephenshouse-in/30min"

                  rootElement={document.getElementById("root")}
                  text="BOOK  1 : 1 CALL "
                  className="btn-14"
                />
              </div>
              <div><button className='custom-btn btn-14' onClick={() => {
                document
                  .getElementById("query")
                  .scrollIntoView({ behavior: "smooth" });
              }}>Drop in a query</button></div>
            </div>
            <div className='address_Content_2'>
              <ol>
                <li><span className='Content_13'>Tap here to open</span> <img src={img1} alt="" /></li>
                <li><p>Ph-number <span className='Content_11'>: +91-9967776771 <span className='Content_12'><i class="bi bi-copy"> Copy phone number</i></span></span></p></li>
                <li><p>Corporate office  <span className="">: First floor , B Wing,Brigade Tech Park,<br /><span className='Content_14'>Whitefield 556066.</span></span></p></li>
              </ol>
            </div>
          </div>
        </div>
        <div className='row' id='query'>
          <div className='col-lg-12'>
            <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                <div className="formbold-steps">
                  <h2>We appreciate you contacting us.</h2>
                </div>
                <h5 className="hello">TELL  US MORE ABOUT YOUR BUSINESS</h5>
                <div className="formbold-form-step-1 my-5 active">
                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="firstname" className="formbold-form-label">First name: <span className='star_color'> *</span> </label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder=""
                        id="firstname"
                        className="formbold-form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="formbold-form-label">Last name: <span className='star_color'> *</span> </label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder=""
                        id="lastname"
                        className="formbold-form-input"
                      />
                    </div>
                  </div>

                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="email" className="formbold-form-label">Work Email Address: <span className='star_color'> *</span> </label>
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        id="email"
                        className="formbold-form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="formbold-form-label"> Phone Number: <span className='star_color'> *</span> </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="formbold-form-input"
                      />
                    </div>
                  </div>



                </div>


                <div className="formbold-input-flex">
                 
                  <div className='formbold_Content1'>
                    <label htmlFor="Company:" className="formbold-form-label">Company:<span className='star_color'> *</span> </label>
                    <input
                      type="text"
                      name="company"
                      placeholder=""
                      id="company"
                      className="formbold-form-input"
                    />
                  </div>
                  <div className='formbold_Content1'>
                    <label htmlFor="Country" className="formbold-form-label">Country: <span className='star_color'> *</span> </label>
                    <input
                      type="text"
                      name="country"
                      placeholder=""
                      id="country"
                      className="formbold-form-input"
                    />
                  </div>
                 
                </div>

                <div className="formbold-form-step-2">
                  <div>
                    <label htmlFor="message" className="formbold-form-label">Help us outlining the project objective:</label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Let us know any additional information that is relevant for your business requirements"
                      className="formbold-form-input1 small-placeholder"
                    ></textarea>
                  </div>
                </div>


                <div className="formbold-form-btn-wrapper">
                  <button type="button" className="formbold-back-btn">
                    Submit
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row' id='call_back'>
          <div className='col-lg-12'>
            <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                <div className="formbold-steps">
                  <h2>Thank you for choosing to contact us.</h2>
                </div>
                <h5 className="hello">REQUEST A CALL BACK</h5>
                <div className="formbold-form-step-1 active">
                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="firstname" className="formbold-form-label">First name: <span className='star_color'> *</span></label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder=""
                        id="firstname"
                        className="formbold-form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="formbold-form-label">Last name: <span className='star_color'> *</span></label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder=""
                        id="lastname"
                        className="formbold-form-input"
                      />
                    </div>
                  </div>

                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="email" className="formbold-form-label">Work Email Address: <span className='star_color'> *</span></label>
                      <input
                        type="email"
                        name="email"
                        //   placeholder="example@mail.com"
                        id="email"
                        className="formbold-form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="formbold-form-label"> Phone Number: <span className='star_color'> *</span></label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="formbold-form-input"
                      />
                    </div>
                  </div>



                </div>


                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="date" className="formbold-form-label">Preferred Date: <span className='star_color'> *</span></label>
                    <input
                      type="text"
                      name="company"
                      placeholder=""
                      id="company"
                      className="formbold-form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="formbold-form-label">Preferred Date: <span className='star_color'> *</span></label>
                    <input
                      type="text"
                      name="country"
                      placeholder=""
                      id="country"
                      className="formbold-form-input"
                    />
                  </div>
                </div>

                <div className="formbold-form-btn-wrapper">
                  <button type="button" className="formbold-back-btn">
                    Submit 
                  </button>


                </div>
              </div>
            </div>
          </div>

        </div> */}

      </div>

      <Footer/>
    </>

  )
}

export default Contactus