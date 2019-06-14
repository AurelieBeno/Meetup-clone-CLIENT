import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import MeetupList from "./components/meetups/MeetupList";
import MeetupDetails from "./components/meetups/MeetupDetails";
import Signup from "./components/auth/signup";
import Login from "./components/auth/Login";
import Navbar from "./components/NavBar";

import {
  getMeetupList,
  getLogOut,
  postMemberDde
} from "./components/api";
import HomePage from "./components/HomePage";
// import Footer from "./components/Footer";
import AddMeetup from "./components/meetups/AddMeetup";
import MyMeetup from "./components/meetups/MyMeetup";
import AddGroup from "./components/group/Add-group";
import GroupDetails from "./components/group/Group-details";
import MyProfile from "./components/settings/MyProfile";
// import ContainerForm from "./components/wizzarForm/ContainerForm";
// import AuthService from "./components/auth/auth-service";

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo
      // productArray: []
    };
  }
  updateUser(newUser) {
    if (newUser) {
      // save the user info in localStorage if we are login in4
      //( Turn it into a JSON string before we save)
      localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
      );
    } else {
      // Delete the user info from localStorage if we are logging off
      localStorage.removeItem("currentUser");
    }

    this.setState({ currentUser: newUser });
  }

  componentDidMount() {
    getMeetupList().then(response => {
      this.setState({ meetupArray: response.data });
    });
  }

  logoutClick() {
    // Logout to the backend
    console.log("something happened");

    getLogOut().then(response => {
      console.log("Log out", response.data);
      // set the currentUser state to empty
      this.updateUser(null);
    });
  }
  onChange(e) {
    const value = e.target.value;
    console.log("hello" + value);
  }

  memberGroup() {
    console.log("member demande happen");
    postMemberDde().then(response => console.log(response));
  }
  render() {
    console.log(
      JSON.stringify(this.state.currentUser) +
        "App currentUser"
    );
    return (
      <div>
        <header className='App-header'>
          <div className='headerNav-container'>
            <Navbar
              currentUser={this.state.currentUser}
              logoutClick={event => this.logoutClick(event)}
              updateUser={user => this.updateUser(user)}
              loginSuccess={user => this.updateUser(user)}
            />
          </div>
        </header>

        {/* // <div /> // <Redirect exact to={`/`} /> */}

        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <HomePage
                  onChange={e => this.onChange(e)}
                />
              );
            }}
          />
          {/* <Route
            path=''
            render={() => {
              return (
                <groupFollowList
                  currentUser={this.state.currentUser}
                />
              );
            }}
          /> */}
          <Route
            path='/login'
            render={() => {
              return (
                <Login
                  currentUser={this.state.currentUser}
                  loginSuccess={user =>
                    this.updateUser(user)
                  }
                />
              );
            }}
          />
          <Route
            path='/signup'
            render={() => {
              return (
                //  Send App's surrentUser state as a prop to SighUpPage

                <Signup
                  currentUser={this.state.currentUser}
                  // send App's updateUser () method as a prop for updating state
                  signupSuccess={user =>
                    this.updateUser(user)
                  }
                />
              );
            }}
          />
          <Route
            path='/add-meetup'
            render={() => {
              return (
                //  Send App's surrentUser state as a prop to SighUpPage

                <AddMeetup
                  currentUser={this.state.currentUser}
                  // updUsr={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path='/add-group'
            render={() => {
              return (
                <AddGroup
                  currentUser={this.state.currentUser}
                  // updUsr={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path='/my-meetup'
            render={() => {
              return (
                <MyMeetup
                  currentUser={this.state.currentUser}
                  // updUsr={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path='/meetup/:meetupId'
            render={props => {
              return (
                <MeetupDetails
                  postInfo={props}
                  meetupArray={this.state.meetupArray}
                  currentUser={this.state.currentUser}
                  // id={match.params.id}
                />
              );
            }}
          />
          <Route
            exact
            path='/meetup'
            render={() => {
              return (
                <MeetupList
                  meetupArray={this.state.meetupArray}
                  currentUser={this.state.currentUser}
                />
              );
            }}
          />
          <Route
            path='/group/:groupId'
            render={props => {
              return (
                <GroupDetails
                  groupInfo={props}
                  meetupArray={this.state.meetupArray}
                  currentUser={this.state.currentUser}
                  memberGroup={event =>
                    this.memberGroup(event)
                  }
                  // id={match.params.id}
                />
              );
            }}
          />
          <Route
            path='/my-profil'
            render={() => {
              return (
                <MyProfile
                  currentUser={this.state.currentUser}
                />
              );
            }}
          />
          {/* Route component={NotFound} /> */} */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
