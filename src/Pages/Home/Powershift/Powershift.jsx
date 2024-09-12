import React from 'react'
import "./Powershift.css"
import Card from '../Card/Card'

const Powershift = () => {

    return (
        <>
            <div className='container-fluid demotop'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 Power_shift'>
                        <h1>Power-Shift : Powered by AI</h1>
                        <h4>Shaping Tomorrow's World, Today.</h4>
                        <p>At Stephen's House of Analytics, we aid you in the process of designing <br />and
                            implementing algorithms or computational methods to find <br /> solutions to
                            complex problems.</p>
                    </div>
                </div>

            </div>
            <div className='container-fluid marigintopinc'>
                <div className='row'>
                    <div className='container-fluid h3_content'>
                        <div className='maindiv'>
                            <h3 className='d-flex flex-column flex-sm-row fs-2'>
                                It’s healthy to be organised.
    
                                <p className='fontsize'>It promotes both productivity and well-being.</p>
                            </h3>
                        </div>

                    </div>
                    <div className='Power_shift_2'>
                        <h1>Harness the power of AI.</h1>
                        <p>AI in analytics can have a significant impact on your organisation. By harnessing the <br />
                            power of AI, you can gain a competitive edge, drive innovation, and achieve better <br />
                            outcomes in various domains and industries. </p>
                        <span>Here are some key benefits:</span>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <Card />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Powershift