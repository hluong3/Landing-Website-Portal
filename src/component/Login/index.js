import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleChangeEmail = (e) => {
    setInvalid(false);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setInvalid(false);
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    
    setInvalid(true);
  };

  return (
    <div className="container">
      <div className="login">
        <div className="row heading">
          <img className="login-image" src="/logo.png" alt="Login" />
          <span className="company-name">Laniakea Capital</span>
        </div>

        <div className="row content">
          <div className="col-md-3"></div>

          <div className="col-sm-12 col-md-6">
            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  
                  placeholder="email@example.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  
                  placeholder="Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>

              { invalid && (
                <label className="message-error">Invalid Login</label>
              )}
              
              <button type="submit" className="btn btn-login">Login</button>

              <Link to="/">
                <button className="btn btn-home">Home</button>
              </Link>

              
            </form>

            

            
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
