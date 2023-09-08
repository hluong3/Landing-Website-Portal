import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import SmoothScroll from '../SmoothScroll/SmoothScroll'; 

function Footer() {
  return (
    <footer>
      <div className="container" style={{overflow:'hidden'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <img
                className="footer-logo-image"
                src="/images/footer-image.svg"
                alt="Laniakea Footer Logo"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ul className="navigation">
              <li>
                <SmoothScroll targetId="section1">About Us</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section5">Research</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section3">Investment Strategy</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section7">Contact Us</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section2">Team</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section6">Careers</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section4">For Project</SmoothScroll>
              </li>
              
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 icon-list">
            <ul className="list-unstyled social-icons vertical-icons">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    className="icon"
                    src="/images/telegram.svg"
                    alt="Telegram"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/images/twitter.svg" alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
