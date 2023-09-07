import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
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
              <a href="#section1">About Us</a>
            </li>
            <li>
              <a href="#section3">Research</a>
            </li>
            <li>
              <a href="#section3">Investment Strategy</a>
            </li>
            <li>
              <a href="#section6">Contact Us</a>
            </li>
            <li>
              <a href="#section2">Team</a>
            </li>
            <li>
              <a href="#section5">Careers</a>
            </li>

            <li>
              <a href="#section4">For Project</a>
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
    </footer>
  );
}

export default Footer;
