import React, { useState, useEffect } from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="container-fluid">
      <div className="about-us">
        <div className="row image p-md-0">
          <div className="col-sm-12 p-md-0">
            <img src="/images/about_us_bg.png" alt="About Us" />
          </div>
        </div>

        <div className="row heading p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              <div className="heading-line">
                <hr />
              </div>
              <div className="heading-text">About Us</div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row content p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              <div className="d-none d-sm-block"></div>
              <div className="content-text p-md-0">
                <p>
                  Welcome to Laniakea — your gateway to the{" "}
                  <span className="highlight">
                    'immeasurable heavens' of the digital asset
                  </span>{" "}
                  universe. Inspired by the vast galaxy supercluster, our name
                  embodies our ambition to act as a nexus between discerning
                  investors and groundbreaking projects, thereby facilitating
                  mutual growth through seamless connections.
                </p>

                <p>
                  Employing focused investment strategies, we curate a portfolio
                  designed for not just exponential growth but also as a
                  catalyst for technological innovation. Through strategic
                  partnerships, we cultivate vibrant ecosystems around our
                  investments, encouraging active community engagement and
                  forging synergies that amplify returns for all stakeholders.
                </p>

                <p>
                  At Laniakea, we serve as a bridge connecting investors to new
                  projects and protocols, unlocking access to a realm of
                  unexplored worlds brimming with investment opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
