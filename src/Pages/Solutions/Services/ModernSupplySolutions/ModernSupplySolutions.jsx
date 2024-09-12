import React from 'react'
import "./ModernSupplySolutions.css"
import Header from '../../../../Component/Header/Header'
import vedio1 from "../../Services/ModernSupplySolutions/Assets/1.mp4"
import img1 from "../../Services/ModernSupplySolutions/Assets/1.png";
import img2 from "../../Services/ModernSupplySolutions/Assets/2.png";
import img3 from "../../Services/ModernSupplySolutions/Assets/3.png";
import img4 from "../../Services/ModernSupplySolutions/Assets/4.png";
import img5 from "../../Services/ModernSupplySolutions/Assets/5 (2).png";
import img6 from "../../Services/ModernSupplySolutions/Assets/6.png";

const ModernSupplySolutions = () => {
    return (
        <>
            <Header />
            <div className='container-fluid Container_Modern my-5'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 my-3 Modern_Solution_Content1'>
                        <h1>Solving Complex Challenges in the Modern Supply Chain</h1>
                        <p>Building the Backbone of Data Excellence that shall empower your businesses</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="player_wrapper01_Modern text-center">
                            <video className="react_player01_Modern  " src={vedio1} loop autoPlay muted>
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 Modern_Solution_Content2'>
                        <h4>Why settle for ordinary when you can strategically outpace the competition?</h4>
                        <p>To thrive in today’s digital-first world, you need speed, visibility, automation, and resilience. </p>
                        <span>
                            Our comprehensive portfolio of digital transformation services—encompassing strategy, design, development, and <br /> implementation—across various technologies positions us to help you create a smarter, more agile digital enterprise.
                        </span>
                    </div>
                </div>

                <div className='row d-flex'>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img1} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img2} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img3} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
                     <div className='row d-flex'>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img4} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img5} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card_container">
                            <div className="card cards">
                                <div className='card-Box card_Box_front'>
                                    <p>STRATEGISE</p>
                                    <img src={img6} alt="" className='Card_imge' />
                                    <h3>Digital Consulting</h3>
                                    <span>Shaping Smarter Digital Organisations</span>
                                </div>
                                <div className='card-Box card_Box_back'>
                                    <h5 className="card_title">Digital Consulting</h5>
                                    <p className="card_text">Shaping Smarter Digital Organisations</p>
                                    <span className='span_text'>Disruption and change are everyday realities when managing a supply chain. Removing the vulnerabilities and risks associated with change requires thoughtful and dynamic strategies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
                     <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 design_phase'>
                        <h2>What follows next? It's the design phase.</h2>
                        <p><span>Design Matters</span>, if you want people to use your new tools, a brilliant algorithm needs to be presented in an attractive package that captures attention.</p>
                        <p>Most users can’t read code or interpret the output of a model. To act on these insights, they need user-friendly dashboards that facilitate decision-making and scenario testing.</p>
                        <button>Learn More On Dashboard Experience</button>

                    </div>

                </div>
            </div>
           
          

        </>
    )
}

export default ModernSupplySolutions