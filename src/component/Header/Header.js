import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" alt="Logo" className="logo" />
            <span className="company-name">Laniakea Capital</span>
          </a>

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}

          {/* <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">Services</a>
                </li>
                
              </ul>
            </div> */}

          {/* Add buttons to the right */}
          <div className="ml-auto d-none d-sm-block">
            <Link to="/login">
              <button className="btn btn-client-login">Client Login</button>
            </Link>
          </div>

          <div className="ml-auto d-sm-none login-button">
            <Link to="/login">
              <button className="btn btn-client-login">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
