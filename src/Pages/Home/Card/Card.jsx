import React from 'react';
import Slider from 'react-slick';
import './Card.css';
import vedio1 from "../../Home/Card/Assets/1.mp4";
import vedio2 from "../../Home/Card/Assets/2.mp4";
import vedio3 from "../../Home/Card/Assets/3.mp4";

const Card = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='container'>
            <div className='row'>
                {/* Desktop layout - 3 cards in a row */}
                <div className='col-lg-12 col-md-12 col-12 mb-4 d-none d-md-flex justify-content-center col_flex'>
                    <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                        <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                            <video
                                className="react_player01"
                                src={vedio1}
                                loop
                                autoPlay
                                muted
                                style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                Your browser does not support HTML video.
                            </video>
                        </div>
                        <div className="card-body card_body">
                        <h5 className="card-title11">Improve Decision Making</h5>
                        <p className="card-text11">AI algorithms can uncover patterns, trends, and correlations that may be difficult for humans to identify manually. This leads to more accurate and comprehensive data analysis, providing deeper insights and enabling data-driven decision-making.</p>
                        </div>
                    </div>

                    <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                        <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                            <video
                                className="react_player01"
                                src={vedio2}
                                loop
                                autoPlay
                                muted
                                style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                Your browser does not support HTML video.
                            </video>
                        </div>
                        <div className="card-body card_body">
                        <h5 className="card-title11">Automate Repetitive Tasks</h5>
                        <p className="card-text11">AI automates repetitive and time-consuming tasks. Thus, data experts can focus on interpreting results, formulating strategies, and generating innovative ideas. Automation also reduces the risk of human error, leading to more reliable and consistent results.</p>
                        </div>
                    </div>

                    <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                        <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                            <video
                                className="react_player01"
                                src={vedio3}
                                loop
                                autoPlay
                                muted
                                style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                Your browser does not support HTML video.
                            </video>
                        </div>
                        <div className="card-body card_body">
                        <h5 className="card-title11">Identify New Opportunities</h5>
                        <p className="card-text11">It can uncover hidden opportunities and potential areas for the growth of new business. AI algorithms can identify market trends, customer segments, and emerging patterns that may not be apparent through traditional analysis.</p>
                        </div>
                    </div>
                </div>

                {/* Mobile layout - slider */}
                <div className="d-md-none">
                    <Slider {...sliderSettings}>
                        <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                            <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                                <video
                                    className="react_player01"
                                    src={vedio1}
                                    loop
                                    autoPlay
                                    muted
                                    style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                            <div className="card-body card_body">
                            <h5 className="card-title11">Improve Decision Making</h5>
                            <p className="card-text11">AI algorithms can uncover patterns, trends, and correlations that may be difficult for humans to identify manually. This leads to more accurate and comprehensive data analysis, providing deeper insights and enabling data-driven decision-making.</p>
                            </div>
                        </div>

                        <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                            <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                                <video
                                    className="react_player01"
                                    src={vedio2}
                                    loop
                                    autoPlay
                                    muted
                                    style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                            <div className="card-body card_body">
                            <h5 className="card-title11">Automate Repetitive Tasks</h5>
                            <p className="card-text11">AI automates repetitive and time-consuming tasks. Thus, data experts can focus on interpreting results, formulating strategies, and generating innovative ideas. Automation also reduces the risk of human error, leading to more reliable and consistent results.</p>
                            </div>
                        </div>

                        <div className="card h-100 applyborder_rad" style={{ width: '350px', border: 'none', borderRadius: "10px" }}>
                            <div className="player_wrapper01_1" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                                <video
                                    className="react_player01"
                                    src={vedio3}
                                    loop
                                    autoPlay
                                    muted
                                    style={{ width: '100%', height: '100%', borderRadius: "10px" }}>
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                            <div className="card-body card_body">
                            <h5 className="card-title11">Identify New Opportunities</h5>
                            <p className="card-text11">It can uncover hidden opportunities and potential areas for the growth of new business. AI algorithms can identify market trends, customer segments, and emerging patterns that may not be apparent through traditional analysis.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Card;
