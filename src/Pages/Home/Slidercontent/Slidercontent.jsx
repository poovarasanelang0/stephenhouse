import React from 'react';
import Slider from "react-slick";
import './Slidercontent.css';
import img1 from "../../Home/Slidercontent/Assets/01.png";
import img3 from "../../Home/Slidercontent/Assets/03.png";
import Help from "../../Home/Slidercontent/Assets/Help1.png"

const Slidercontent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480, // Adjust for mobile screens
        settings: {
          slidesToShow: 1, // Show one slide at a time
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>


      <div className="container-fluid slider_container">

        <div className='container mainsilderrow'>
          <div className='row'>
            <div className='d-flex img_help'>
              <img src={Help} alt="Help" className='img-fluid' />
              <p>How Can We Help You ?</p>

            </div>

            <Slider {...settings}>
              <div className='slider-card Slider_content '>
                <div className='card-content Content_h3_content '>
                  <div className="text-background">
                    <h3 className='pad_y'>Digital Consulting</h3>
                    <p className='PTAG'>Speed up your transformation with our assessment and advisory services, proven methodologies, proprietary tools, and change management expertise.</p>
                  </div>
                  <img src={img1} alt="img1" className='img-fluid' />
                </div>

              </div>

              <div className='slider-card'>
                <div className='card-content background-image'>
                  <div className=''>
                    <h3 className='backimg_header'>Automation</h3>
                    <p className='PTAG_content1'>We are increasingly living in a world of systems, sensors, devices and a plethora of data sources. We specialise in linking disparate sources and automating information</p>
                  </div>
                  <span className='bottom_spantag'>All generating vast amounts of information every second leading to a landscape of interconnected data streams.</span>
                </div>
              </div>


              <div className='slider-card'>
                <div className='card-content Content_h3_content2'>
                  <div className='text-background2'>
                    <h3 >Platform Solutions</h3>
                    <p className='PTAG'>Integrate and implement reliable platforms into your digital infrastructure to enhance your supply chain and ERP environment, increasing operational agility, visibility, and performance.</p>
                  </div>
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className='slider-card'>
                <div className='card-content background-image1'>
                  <div className=''>
                    <h3 className='backimg_header'>Modern Engineering</h3>
                    <p className='PTAG_content1'>At Stephen's, companies can lay a trusted foundation that powers hybrid IT and multi-cloud infrastructures, eliminating data silos that lead to inefficient data use.</p>
                    <p className='bottom_spantag'>Develop your digital foundation and update your application and data environmen maximise the value of your data.</p>
                  </div>
                </div>
              </div>
              {/* demoooooo */}
              <div className='slider-card'>
                <div className='card-content background-3image'>
                  <div className=''>
                    <h3 className='backimg_header1'>Analytics and Ai</h3>
                    <p className='PTAG_content2'>Powered by a scalable Al framework that is built on a solid data foundation leveraging pre-built assets AutoMI transfer learning ML Ops synthetic data generation - we can minimise time-to-market and maximise business value.</p>

                  </div>
                  <span className='bottom_spantag1'>Businesses generate terabytes of data daily.<br /> Innovate - Get the most out of your data.</span>                </div>
              </div>
              <div className='slider-card'>
                <div className='card-content Content_h3_content3 '>

                  <h3 >SAP Offerings</h3>

                  <p className='PTAG_content3'>At Stephen's, we are digitising and transforming the <br />supply chain business, with a strong commitment to <br />amplifying SAP's significant technologies and the <br />value they bring to our customers.</p>

                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>


      <div className='container-fluid'>
        <div className='row'>
          <div className='container-fluid backcolor1 text-center '>
            <div className='container '>
              <div className='row'>
                <div className='col'>
                  <div className='my-4 py-2 atcolor text-center text-md-left'>
                    <h4 className=''>
                      At Stephen's, we help companies find incredible
                      ways to engage millions of people every day.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  );
}


export default Slidercontent;

