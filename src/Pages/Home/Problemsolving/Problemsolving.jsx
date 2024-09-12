import React from 'react';
import './Problemsolving.css';
import vedio3 from "../../Home/Problemsolving/Assets/Desktop.mp4";
import img7 from "../../Home/Problemsolving/Assets/0001.webp"
import img8 from "../../Home/Problemsolving/Assets/0002.webp"
import img9 from "../../Home/Problemsolving/Assets/0003.webp"
import img10 from "../../Home/Problemsolving/Assets/0004.webp"
import img11 from "../../Home/Problemsolving/Assets/0005.webp"
import img12 from "../../Home/Problemsolving/Assets/0006.webp"
import img13 from "../../Home/Problemsolving/Assets/0007.webp"


import Marquee from "react-fast-marquee";



const Problemsolving = () => {
    return (
        <div className='container problemcontainer'>
            <div className='row'>
                <div className='col-lg-12  col-12 Problem_solving'>
                    <h5 className='fs-1'>Problem solving at <span>Stephen’s</span></h5>
                    <p className='centered-text'>Create value and solve complex data problems. It's about harnessing the power <br /> of data to solve complex problems, unlocking new opportunities, and achieving <br />strategic objectives with confidence.</p>
                    <button>Gain Insights</button>
                </div>
            </div>
            <div className='row lapvideos'>
                <div className='col-lg-12 Problem_solving_2 py-1'>
                    <div className="player_wrapper04">
                        <video className="react_player04 my-lg-2 py-lg-1" src={vedio3} loop autoPlay muted>
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 my-3 Technology_Content">
                    <h1>Technology Platform</h1>
                </div>
                <div className="container  companies py-3">
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
                   
                </div>
            </div>

        </div>
    );
}

export default Problemsolving;
