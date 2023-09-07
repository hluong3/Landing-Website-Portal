import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>Contact Us</h5>
                    <p>Email: your@email.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="col-md-6">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled social-icons vertical-icons">
                        <li>
                        <a href="https://twitter.com/YourTwitterProfile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="1x"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="1x"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/YourLinkedInProfile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/YourGitHubProfile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"/>
                        </a>
                        </li>
                        {/* Add more social media icons as needed */}
                    </ul>
                </div>
            </div>
        </div>

    </footer>
  );
}

export default Footer;