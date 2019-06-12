import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// import { Alert } from "react-alert";
import { postLogIn } from "../api";

import "../style/Login.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: "",
      // currentUser: null, = delete to synchronize
      message: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //back-end integration
  handleSubmit(event) {
    event.preventDefault();

    // Submit login info to the backend
    postLogIn(this.state).then(response => {
      this.props.loginSuccess(response.data);
      this.setState({ isSubmit: true });
    });
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    // check currentUser (recieve from App.js)

    return this.props.currentUser ? (
      <Redirect to="/meetup" />
    ) : (
      <section className="loginContainer">
        {this.state.message && <h5>{this.state.message}</h5>}
        <div className="limiter">
          <div className="container-login">
            <div className="wrap-login100">
              <form
                className="signup-form login100-form validate-form"
                onSubmit={event => this.handleSubmit(event)}
              >
                <h2 className="login100-form-title p-b-26">
                  Welcome back to Meetup !
                </h2>
                <div className="wrap-input100 validate_input">
                  <input
                    value={this.props.email} // .props instead of .state to synchronize
                    onChange={event => this.genericSync(event)}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input100"
                  />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate_input">
                  <input
                    value={this.props.originalPassword} // .props instead of .state to synchronize
                    onChange={event => this.genericSync(event)}
                    type="password"
                    name="originalPassword"
                    placeholder="Password"
                    className="originalPassword input100"
                  />
                  <span className="focus-input100" data-placeholder="Email" />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">Log In</button>
                  </div>
                </div>
              </form>
              <div className="loginLinkContainer">
                <h5>
                  <u>
                    Not registered yet ? Please
                    <Link to="/signup">sign up. </Link>
                  </u>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;
