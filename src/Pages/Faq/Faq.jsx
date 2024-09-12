import React, { useState } from 'react';
import "./Faq.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';




const Faq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionStyles = {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderBottom: 'none',
        '&:before': {
            display: 'none', // Remove the default Material-UI divider line
        },
        '&.Mui-expanded': {
            margin: 0,
        },
        margin: 0,
    };
    const iconStyles = {
        fontSize: '1.2rem',  // Adjust the size as needed
    };

    return (
        <>
            <div className='container my-2'>
                <div className='row my-5'>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <div className='faq my-2'>
                            <h4 className='fw-bold'>General FAQs</h4>
                            <p>Everything you need to know about analytics and
                                how it works. Can’t find an answer?</p>

                                <a href="/" className="d-none d-lg-block"> Contact Us.</a>                         </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-7 col-md-12 col-12'>
                        <div>
                            {/* --------------------------------------------------------------------Q1----------------------------------- */}
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={handleChange('panel1')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel1' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>What is analytics?</Typography>
                                        {expanded === 'panel1' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span> Analytics is the systematic computational analysis of data or statistics. It involves applying data analysis techniques and tools to discover patterns, draw insights, and support decision-making processes.
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q2----------------------------------- */}

                            <Accordion
                                expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel2' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>What are the different types of analytics?</Typography>
                                        {expanded === 'panel2' && <hr />}
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>
                                            <span className='answarecolor'>Answer:</span> There are four main types of analytics:
                                            <br />
                                            Descriptive Analytics: Summaries historical data to understand what has happened.<br />
                                            Diagnostic Analytics: Examines data to understand why something happened.<br />
                                            Predictive Analytics: Uses historical data and statistical models to forecast future events.<br />
                                            Prescriptive Analytics: Recommends actions based on predictive insights to achieve desired outcomes.
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q3----------------------------------- */}
                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={handleChange('panel3')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>What tools are commonly used in analytics?</Typography>
                                        {expanded === 'panel3' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span>
                                            Common tools include:
                                            <ul>
                                                <li> Data Visualisation Tools: Tableau, Power BI</li>
                                                <li> Statistical Analysis Tools: R, SAS, SPSS</li>
                                                <li> Data Mining Tools: RapidMiner, KNIME</li>
                                                <li> Big Data Tools: Hadoop, Spark</li>
                                                <li> Programming Languages: Python, SQL </li>
                                            </ul>
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q4----------------------------------- */}
                            <Accordion
                                expanded={expanded === 'panel4'}
                                onChange={handleChange('panel4')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel4' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>What is big data analytics?</Typography>
                                        {expanded === 'panel4' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span>
                                            Big data analytics involves analysing large and complex data sets, often from various sources, to uncover hidden patterns, unknown correlations, and other insights. It requires advanced tools and technologies to process and analyse data at scale.                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q5----------------------------------- */}
                            <Accordion
                                expanded={expanded === 'panel5'}
                                onChange={handleChange('panel5')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel5' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>
                                            What is the difference between data analysis and data analytics?                                            </Typography>
                                        {expanded === 'panel5' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span>
                                            Data analysis is the process of inspecting, cleaning, transforming, and modelling data to discover useful information. Data analytics encompasses a broader scope, including data analysis, and involves using this information to make strategic business decisions.                                         </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q6----------------------------------- */}
                            <Accordion
                                expanded={expanded === 'panel6'}
                                onChange={handleChange('panel6')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel6' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>
                                            How can predictive analytics be used in my industry?</Typography>
                                        {expanded === 'panel6' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span>
                                            Predictive analytics can be used in various industries as follows:
                                            <ul>
                                                <li> Retail: Forecasting sales, optimising inventory, and personalising marketing.</li>
                                                <li> Healthcare: Predicting patient outcomes, optimising treatment plans, and managing resources.</li>
                                                <li> Finance: Credit scoring, fraud detection, and risk management.</li>
                                                <li> Manufacturing: Predictive maintenance, demand forecasting, and quality control.</li>
                                            </ul>
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q7----------------------------------- */}

                            <Accordion
                                expanded={expanded === 'panel7'}
                                onChange={handleChange('panel7')}
                                sx={accordionStyles}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel7' ? <RemoveIcon sx={iconStyles} /> : <AddIcon sx={iconStyles} />}
                                >
                                    <div className="faq-summary">
                                        <Typography className='Qcolor fw-bold'>

                                            What are the challenges of implementing analytics?</Typography>
                                        {expanded === 'panel7' && <hr />}
                                    </div>
                                </AccordionSummary>

                                <AccordionDetails className="accordion-content">
                                    <Typography>
                                        <p className='answertag'>  <span className='answarecolor'>Answer:</span>
                                            Common challenges include:
                                            <ul>
                                                <li>Data quality and integration issues</li>
                                                <li>Lack of skilled personnel</li>
                                                <li>Ensuring data privacy and security</li>
                                                <li>High costs of advanced tools and technologies</li>
                                                <li>Resistance to change within the organisation</li>
                                            </ul>
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* --------------------------------------------------------------------Q8----------------------------------- */}




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
