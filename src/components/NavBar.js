import React, { Component } from "react";
import { Link } from "react-router-dom";

// import MyMeetup from "./meetups/MyMeetup";
// import { getLogOut } from "./api.js";
import "./style/Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleToggleSetting() {
    const oldFilter = this.state.isDrop;
    this.setState({ isDrop: !oldFilter });
  }

  render() {
    const { isDrop } = this.state;
    console.log(this.state);
    return (
      <div className='navBarContainer'>
        <div className='logoContainer'>
          <Link to='/' className='NoneLine redColor logo'>
            MeetupCloneLogo
          </Link>
          <div className='groupBtn '>
            <Link
              onClick={() => this.handleToggleSetting()}
              className='NoneLine redColor'
              to='/add-group'
            >
              <span> Create a new group</span>
            </Link>
          </div>
          <div className='explorer'>
            <Link to='/'>
              <span>Explorer</span>
            </Link>
          </div>
        </div>

        {this.props.currentUser ? (
          <nav className='nav-style-user '>
            <button
              onClick={() => this.handleToggleSetting()}
              className='headerBtn setting-user--button'
            >
              <i className='far fa-user user--setting NoneLine' />
            </button>
            {isDrop && (
              <div className='popup-bubble--right popup-bubble'>
                <div
                  className='dropdown-container  flex dropdown-menu bordered display--none'
                  id='nav-profile--dropdownMenu'
                >
                  <div className='leftSide'>
                    <ul>
                      <li>
                        <Link
                          onClick={() =>
                            this.handleToggleSetting()
                          }
                          className='NoneLine'
                          to='/add-meetup'
                        >
                          Add new Meetup
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='rightSide'>
                    <li>
                      <Link
                        onClick={() =>
                          this.handleToggleSetting()
                        }
                        className='NoneLine'
                        to='/my-meetup'
                      >
                        My meetup
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          this.handleToggleSetting()
                        }
                        className='NoneLine'
                        to='/my-profil'
                      >
                        My profil
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={event =>
                          this.props.logoutClick(event)
                        }
                      >
                        <Link
                          exact
                          to='/'
                          className='logout-btn'
                        >
                          Log Out
                        </Link>
                      </button>
                    </li>
                  </div>
                </div>
              </div>
            )}
          </nav>
        ) : (
          <nav className='nav-style'>
            <ul className='Nav-list-container'>
              <li>
                <Link className='NoneLine' to='/login'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/signup' className='NoneLine'>
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

export default Navbar;
