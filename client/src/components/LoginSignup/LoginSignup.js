import React from 'react';

import './LoginSignup.css';

function LoginSignup() {
    
    let el = document.querySelector('.tabs');
    let instance = M.Tabs.init(el, {});
    
    return (
        <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
          <div className="card">
            <div className="card-tabs">
              <ul className="tabs">
                <li className="tab col s6"><a className="active" href="#sign-in">Login</a></li>
                <li className="tab col s6"><a href="#register">Register</a></li>
              </ul>
            </div>
            {/* login form */}
            <div className="card-content grey lighten-4">
              <div className="card">
                <form className="login-form">
                  <div id="sign-in" className="card-content">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email-login" type="email" className="validate" />
                        <label htmlFor="email-login">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password-login" type="password" className="validate" />
                        <label htmlFor="password-login">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s10 offset-s1">
                        <button style={{width: '100%'}} className="btn btn-large waves-effect waves-light" type="submit" name="action">LOGIN</button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* register form */}
                <form className="register-form">
                  <div id="register" className="card-content">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="firstname-register" type="text" className="validate" />
                        <label htmlFor="firstname-register">First Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="lastname-register" type="text" className="validate" />
                        <label htmlFor="lastname-register">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email-register" type="email" className="validate" />
                        <label htmlFor="email-register">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password-register" type="password" className="validate" />
                        <label htmlFor="password-register">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="confirm-password-register" type="password" className="validate" />
                        <label htmlFor="confirm-password-register">Confirm Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s10 offset-s1">
                        <button style={{width: '100%'}} className="btn btn-large waves-effect waves-light" type="submit" name="action">REGISTER</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}