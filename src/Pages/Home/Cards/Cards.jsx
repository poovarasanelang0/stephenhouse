import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';


import "./Cards.css";
import img1 from "../../Components/Cards/Assests/1.png";
import img2 from "../../Components/Cards/Assests/2.png";
import img3 from "../../Components/Cards/Assests/3.png";
import img4 from "../../Components/Cards/Assests/4.png";
import img5 from "../../Components/Cards/Assests/5.png";
import img6 from "../../Components/Cards/Assests/6.png";
import img7 from "../../Components/Cards/Assests/0001.webp";
import img8 from "../../Components/Cards/Assests/0002.webp";
import img9 from "../../Components/Cards/Assests/0003.webp";
import img10 from "../../Components/Cards/Assests/0004.webp";
import img11 from "../../Components/Cards/Assests/0005.webp";
import img12 from "../../Components/Cards/Assests/0006.webp";
import img13 from "../../Components/Cards/Assests/0007.webp";

const Cards = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container container_card my-4">
     
      <div className="row">
        <div className="col-lg-12">
          <h1>Technology Platform</h1>
        </div>
        <div className="container py-3">
          <div className="row justify-content-center companies">
            <Marquee>
              <div className="col-auto">
                <img src={img7} alt="Company 1" className="image" />
              </div>
              <div className="col-auto">
                <img src={img8} alt="Company 2" className="image" />
              </div>
              <div className="col-auto">
                <img src={img9} alt="Company 3" className="image" />
              </div>
              <div className="col-auto">
                <img src={img10} alt="Company 4" className="image" />
              </div>
              <div className="col-auto">
                <img src={img11} alt="Company 5" className="image" />
              </div>
              <div className="col-auto">
                <img src={img12} alt="Company 6" className="image" />
              </div>
              <div className="col-auto">
                <img src={img13} alt="Company 7" className="image" />
              </div>
            </Marquee>
          </div>
          <div className="py-3">
            <p>We have strong partnerships with the world's top tech companies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
