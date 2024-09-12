import React from "react";
import "./Open.css";
import Header from "../../Header/Header"
import post from "../Assets/post-image-1.png";
import videocase from "../Assets/Use Cases.mp4";
import tools from "../Assets/Tools.png";
import Helath from "../Assets/IconHealthCare.png";
import finanical from "../Assets/IconFinancial.png";
import enegry from "../Assets/IconEnegry.png";
import insurance from "../Assets/IconInsurance.png";
import manufacturing from "../Assets/IconManufacturing.png";
import retail from "../Assets/IconRetail.png";
import life from "../Assets/IconLifeScience.png";
import sector from "../Assets/IconPublicSector.png";
import Footer from "../../Footer/Footer";
import News from "../../News/News";

const Open = () => {
  return (
    <>
    <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <video
              className="videoCase"
              src={videocase}
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>

        <div className="row container-info contain">
          <div className="content1 col-lg-2 col-md-12"></div>
          <div className=" col-lg-8 col-md-12 my-4">
            <img className="img-tool" src={tools} alt="" />
            <h1 className="h1-edit1">
              Before you start building, let us understand
              how can analytics helps in different industries.

            </h1>

           
            <p className="content2">
              A good dashboard design present business insights derived from
              data in a way that's easy to understand. in a well designed
              dashboard, the differnet components seamlessly mesh with one
              another to provide views of the data that give end users
              actionable insights for data-driver decisons and operations tasks,
              while also allowing them to drill down to see more graular
              data if needed{" "}
            </p>

            <h1 className="h1-edit3">Use Cases</h1>
            <h4 className="h4-edits">
              <span className="span-edit1">
                A wide range of Industries and Job roles leverage AI analytics
                techniques. Here are some <br />{" "}
                <span className="span-edit2">
                  common predictive analytics examples across different
                  industries
                </span>
              </span>{" "}
            </h4>

            {/* case */}

            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="vl"></div>
                  <div className="use-cases-grid">
                    <div className="border_bottom">
                      <div className="use-case1">
                        <i className="icon insurance-icon">
                          <img className="image1" src={insurance} alt="" />
                        </i>
                        <h4 className="h4_heading">Insurance companies</h4>
                        <p>
                          may use AI analytics to assess and
                          <br />
                          predict risks associated with policy <br />{" "}
                          applications and determine the <br /> likelihood of
                          future claims
                        </p>
                        <div className="hl"></div>
                      </div>
                      <div className="use-case1 ">
                        <i className="icon retail-icon">
                          <img className="image1" src={retail} alt="" />
                        </i>
                        <h4 className="h4_heading">
                          Retailers and CPG <br /> companies
                        </h4>
                        <p>
                          can leverage it to analyse past <br /> promotion
                          effectiveness and <br /> predict which offers will be
                          most <br />
                          effective in the future
                        </p>
                        <div className="hl"></div>
                      </div>
                      <div className="use-case1">
                        <i className="icon energy-icon">
                          <img className="image1" src={enegry} alt="" />
                        </i>

                        <h4 className="h4_heading">
                          Energy and utilities <br />
                          sectors
                        </h4>
                        <p>
                          can utilise it to analyse historical <br /> equipment
                          failures and predict <br /> future energy demands
                          based on <br />
                          past consumption patterns
                        </p>
                        <div className="hl"></div>
                      </div>
                      <div className="use-case1">
                        <i className="icon manufacturing-icon">
                          <img className="image1" src={manufacturing} alt="" />
                        </i>
                        <h4 className="h4_heading">
                          Manufacturing and <br />
                          supply chain operations
                        </h4>
                        <p>
                          can use it to forecast demand,
                          <br /> optimise inventory management,
                          <br /> and identify factors leading to <br />{" "}
                          production failures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="use-cases-grid">
                    <div className="border_bottom">
                      <div className="use-case2">
                        <i className="icon financial-icon">
                          <img className="image1" src={finanical} alt="" />
                        </i>
                        <h4 className="h4_heading">Financial service firms</h4>
                        <p>
                          can utilise to predict loan default <br />{" "}
                          probabilities, detect fraud, and <br /> forecast
                          market movements for <br /> better investment
                          decisions
                        </p>
                        <div className="bl"></div>
                      </div>
                      <div className="use-case2">
                        <i className="icon healthcare-icon">
                          <img className="image1" src={Helath} alt="" />
                        </i>
                        <h4 className="h4_heading">Healthcare companies</h4>

                        <p>
                          may employ it to forecast patient <br /> admissions
                          and readmissions,
                          <br /> enabling better management of <br /> patient
                          care and resource allocation
                        </p>

                        <div className="bl1"></div>
                      </div>
                      <div className="use-case2">
                        <i className="icon life-sciences-icon">
                          <img className="image1" src={life} alt="" />
                        </i>
                        <h4 className="h4_heading">
                          Life sciences <br /> organisations
                        </h4>
                        <p>
                          can employ it to develop patient <br /> personas and
                          predict the likelihood <br />
                          of non-adherence to treatment
                        </p>
                        <br />

                        <div className="bl2"></div>
                      </div>
                      <div className="use-case2">
                        <i className="icon public-sector-icon">
                          <img className="image1" src={sector} alt="" />
                        </i>
                        <h4 className="h4_heading">The public sector</h4>
                        <p>
                          can leverage it to analyse population <br /> trends,
                          plan infrastructure <br /> investments, and make
                          informed <br />
                          decisions for public works projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="row ">
          <div className="col-lg-12 col-12 col-md-12 Open_Gain_Content">
            <h1>Gain Valuable Insights with the </h1>
            <h1>Assistance of Power BI Experts</h1>
            <ul>
              <li>Integrate high impact analytics and business intelligence product with minimal <br/>upfront costs</li>
              <li>Understand project outcome and pricing</li>
            </ul>
            <button className="btn-16">Connect me to an expert</button>
          </div>

        </div>
      </div>
      <News/>
      <Footer/>
    </>
  );
};

export default Open;
