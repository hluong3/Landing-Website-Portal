import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="container">
            <div className="row heading padding-0 ">
                <div className="col-sm-12 col-md-6">
                    <div className="split-container padding-0">
                        <div className="heading-line"><hr/></div>
                        <div className="heading-text">ABOUT US</div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6"></div>
            </div>

            <div className="row content padding-0">
                <div className="col-sm-12 col-md-6">
                    <div className="split-container padding-0">
                        <div className="content-space d-none d-sm-block"></div>
                        <div className="content-text padding-0">
                            <p>Welcome to Laniakea — your gateway to the <span style={{'color':'#D41876'}}>'immeasurable heavens' of the digital asset</span> universe. Inspired by the vast galaxy supercluster, our name embodies our ambition to act as a nexus between discerning investors and groundbreaking projects, thereby facilitating mutual growth through seamless connections.</p>

                            <p>Employing focused investment strategies, we curate a portfolio designed for not just exponential growth but also as a catalyst for technological innovation. Through strategic partnerships, we cultivate vibrant ecosystems around our investments, encouraging active community engagement and forging synergies that amplify returns for all stakeholders.</p>

                            <p>At Laniakea, we serve as a bridge connecting investors to new projects and protocols, unlocking access to a realm of unexplored worlds brimming with investment opportunities.</p> 
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 d-none d-sm-block">
                    <img
                        src="/images/about-us.png"
                        alt="About Us"
                        className="image-right"
                    />
                </div>
            </div>

        </div>
        
    );
}

export default AboutUs;