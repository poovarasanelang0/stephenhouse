import React, { useState } from 'react';
import "./HomePagesBottom.css"
import Brand1 from "./Assets/Kiran Logo File.jpg"
import Brand2 from "./Assets/Wockhardth Logo.jpg"
import Brand3 from "./Assets/IIM Logo.png"
import Brand4 from "./Assets/Canara Logo-01.jpg"




const HomePagesBottom = () => {

    return (
        <>

            {/* <div className='container-fluid backcolor'>
                <div className='row'>
                    <div className='col'>
                        <div className='my-4 py-4 atcolor'>
                            <h5 className='d-flex justify-content-center'>At Stephen's We help companies find incredible <br /> way to engage millions of people every day.</h5>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container margintopmove'>
                <div className='row headermar'>
                    <h4 className='d-flex justify-content-center centerheader fw-bold text-center mt-3 mt-sm-5 py-3 py-sm-5'>
                        We are blessed to work with leading brands
                    </h4>
                    <div className='col-lg-3 col-md-6 col-12 mb-3 text-center'>
                        <div className='imgsize'>
                            <img src={Brand1} alt="Brand1" className='img-fluid' />
                        </div>

                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-3 text-center'>
                        <div className='imgsize'>
                            <img src={Brand2} alt="Brand2" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-3 text-center'>
                        <div className='imgsize'>
                            <img src={Brand3} alt="Brand3" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-3 text-center'>
                        <div className='imgsize'>
                            <img src={Brand4} alt="Brand4" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HomePagesBottom
