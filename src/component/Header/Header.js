import React from 'react';
import './Header.scss'

function Header() {
    return (
      <header className="fixed-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="logo"
              />
              <span>Laniakea</span>
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
              <button className="btn btn-primary btn-client-login">Client Login</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

export default Header;