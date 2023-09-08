import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="disclaimer">
        <div className="row heading">
          <img className="disclaimer-image" src="/logo.png" alt="Disclaimer" />
          <p className="company-name">Laniakea</p>
        </div>
        <div className="row content">
          <p>
            Intellectual Property Rights: All content on this website is the
            property of Laniakea or its content providers and is protected by
            applicable intellectual property laws. Unauthorized use or
            reproduction is strictly prohibited. Use of Information: The
            information on this website is for informational and educational
            purposes only. Laniakea does not assume any liability for loss or
            damage due to reliance on the information. Accuracy of Information:
            Laniakea makes no warranties about the accuracy, reliability, or
            completeness of the website's content.Titles and Headings: Used for
            convenience and organizational purposes only and should not be used
            for interpretation. Legal Notices: Laniakea reserves the right to
            change, modify, or remove content at its sole discretion. Risk
            Disclosure: Investing in digital assets and web3 technologies
            carries inherent risks. Laniakea is not responsible for any losses
            incurred. Privacy Policy: By using this website, you consent to the
            collection and use of your information as outlined in our Privacy
            Policy. Jurisdiction and Governing Law: Subject to all applicable
            laws and will be governed by the laws of the jurisdiction in which
            Laniakea is registered. Indemniﬁcation: By using this website, you
            agree to indemnify and hold harmless Laniakea from any and all
            claims and expenses.
          </p>
        </div>
        <div className="row navigate">
          <Link to="/">
            <button className="btn btn-primary btn-client-login">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
