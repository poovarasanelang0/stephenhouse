import React from 'react'
import "./News.css"
import Slider from "react-slick";

import News1 from "../../Pages/HomePagesBottom/Assets/News-01.png"
import News2 from "../../Pages/HomePagesBottom/Assets/News-02.png"
import News3 from "../../Pages/HomePagesBottom/Assets/News-03.png"
import News4 from "../../Pages/HomePagesBottom/Assets/News-04.png"
import News5 from "../../Pages/HomePagesBottom/Assets/News-05.png"
import News6 from "../../Pages/HomePagesBottom/Assets/News-06.png"




const newsData = [
    {
        text: "PM visits Canara CANDI, the digital bank of Canara Bank. In Delhi, 2022 LIVE. A commercial space design project by SHOD.",
        imgSrc: News1
    },
    {
        text: "The Honourable Minister of Social Justice and Empowerment, Dr. Virendra Kumar, inaugurated the launch of the Scholarship and Fellowship Management Portal in December 2021.",
        imgSrc: News2
    },
    {
        text: "Kamal Hassan to inaugurate the digital bank of Canara Bank, Canara CANDI, Velechary Chennai. A design project by SHOD.",
        imgSrc: News4
    },
    {
        text: "Finance Minister Nirmala Sitharaman, along with the Honourable Prime Minister of India, Mr. Narendra Modi, are set to inaugurate the Digital Banking Units across India.",
        imgSrc: News5
    },
    {
        text: "The Honourable Minister of Social Justice and Empowerment, Dr. Virendra Kumar, inaugurated the launch of the Scholarship and Fellowship Management Portal in December 2021.",
        imgSrc: News6
    },
    {
        text: "SHOD,Director on being the industry Alum Gest of Honour 2022,NEFT,Mumbai Convocation",
        imgSrc: News3
    }
];



const News = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
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

            <div className='container Card_news_contact my-4'>
                <div className="row Card_news">
                    <h3 className='my-5 fontfamily'><span>News </span>: Top related stories</h3>
                    <div className='col'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {newsData.map((news, index) => (
                                    <div className="card-wrapper innewssilder" key={index}>
                                        <div className="card fixed-height-card" style={{ border: 'none' }}>
                                            <div className="card-body bg_secondary" style={{ marginBottom: '3px' }}>
                                                <p className="card-text1">{news.text}</p>
                                            </div>
                                            <img src={news.imgSrc} className="card-img-bottom fixed-image" alt="..." style={{ marginTop: '1px' }} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default News
