import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import SmoothScroll from "../SmoothScroll/SmoothScroll";

function Footer() {
  return (
    <footer>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <img
                className="footer-logo-image"
                src="/images/footer_bg.png"
                alt="Laniakea Footer Logo"
              />
            </div>
          </div>
        </div>
        <div className="row info">
          <div className="col-md-8">
            <ul className="navigation">
              <li>
                <SmoothScroll targetId="section1">About Us</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section2">Team</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section3">
                  Investment Strategy
                </SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section4">For Projects</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section5">Research</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section6">Careers</SmoothScroll>
              </li>
              <li>
                <SmoothScroll targetId="section7">Contact Us</SmoothScroll>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 icon-list">
            <ul className="list-unstyled social-icons vertical-icons">
              <li>
                <a
                  href="https://twitter.com/portal_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src="/images/telegram.svg"
                    alt="Telegram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/portal_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src="/images/twitter.svg"
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 d-flex justify-content-center mb-2">
            <div className="login-button">
              <Link to="/login">
                <button className="btn login-button">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
