import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { postSignup } from "../api.js";

import "../style/Signup.scss";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      originalPassword: ""
      // currentUser: null, = delete to synchronize
      // avatar: "",
      // message: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //back-end integration
  handleSubmit(event) {
    event.preventDefault();

    postSignup(this.state).then(response => {
      console.log(("Sign Up Result", response.data));
      this.props.signupSuccess(response.data);
    });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    // check currentUser (recieve from App.js)
    const { currentUser } = this.props;

    //   var el = document.getElementById("avatar");
    //   var myFile = document.getElementById("hidden");

    //   if (myFile) {
    //     myFile.addEventListener("change", () => {
    //       el.innerHTML = "File uploaded";
    //     });
    //   }
    return (
      <section className='SignupPage'>
        {currentUser ? (
          <Redirect to='/' />
        ) : (
          // <div className="container-login">
          //   {console.log(currentUser.userDoc.fullName)}
          //   <h2 className="login100-form-title"> You are signed up!</h2>
          //   <p className="loginLinkContainer">
          //     Welcome, {currentUser.userDoc.fullName}! Your ID is
          //     <b>{currentUser.userDoc._id}</b>
          //   </p>
          //   <Link to="add-meetup">Add a new meetup</Link>
          // </div>
          <div className='limiter'>
            <div className='container-login'>
              <div className='wrap-login100'>
                <form
                  className='signup-form login100-form validate-form'
                  onSubmit={event =>
                    this.handleSubmit(event)
                  }
                >
                  <h2 className='login100-form-title p-b-26'>
                    Sign Up
                  </h2>
                  <div className='wrap-input100 validate_input'>
                    <input
                      className='input100'
                      onChange={event =>
                        this.genericOnChange(event)
                      }
                      value={this.state.fullName}
                      name='fullName'
                      type='text'
                      placeholder='Your first name'
                    />
                    <span
                      className='focus-input100'
                      data-placeholder='Email'
                    />
                  </div>
                  <div className='wrap-input100 validate_input'>
                    <input
                      className='input100'
                      onChange={event =>
                        this.genericOnChange(event)
                      }
                      value={this.state.email}
                      name='email'
                      type='email'
                      placeholder='Your email adress'
                    />
                  </div>
                  <div className='wrap-input100 validate_input'>
                    <input
                      className='input100'
                      onChange={event =>
                        this.genericOnChange(event)
                      }
                      value={this.state.orginalPassword}
                      name='originalPassword'
                      type='password'
                      placeholder='Create a password'
                    />
                  </div>
                  <div className='container-login100-form-btn'>
                    <div className='wrap-login100-form-btn'>
                      <div className='login100-form-bgbtn' />
                      <button className='login100-form-btn'>
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
                <div className='loginLinkContainer'>
                  <h5>
                    Already registered ? Please
                    <Link to='/login' className='loginLink'>
                      log in.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
