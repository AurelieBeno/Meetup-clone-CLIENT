import React, { Component } from "react";
// import Calendar from "react-calendar";
import { Redirect } from "react-router-dom";
import { addMeetup, getUserInfo } from "../api.js";

import "../style/add-meetup.scss";

class AddMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      createdBy: "",
      group: "",
      eventDate: new Date(),
      isSubmitSuccessful: false,
      userInfo: [],
      groupInfo: []

      // date: new Date()
    };
  }
  componentDidMount() {
    getUserInfo().then(response => {
      console.log("USERinfo CDM", response.data);
      this.setState({
        userInfo: response.data.user,
        groupInfo: response.data.group
      });
    });
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddMeetup(event) {
    event.preventDefault();
    // this.props.updUsr();
    // Send this.state to the backend of SAVING
    addMeetup(this.state).then(response => {
      console.log("Add Meetup", response.data);
      // Update the state for our redirect
      this.setState({
        isSubmitSuccessful: true
      });
    });
  }

  render() {
    const { currentUser } = this.props;
    const { userInfo, groupInfo } = this.state;
    JSON.stringify(userInfo);

    console.log(groupInfo);

    return this.state.isSubmitSuccessful ? (
      <Redirect to='meetup' />
    ) : (
      <div className='add-meetup'>
        <h2>Add a meetup {currentUser.userDoc.fullName}</h2>
        <form
          onSubmit={event => this.handleAddMeetup(event)}
        >
          <label>
            <h2>Where do you want to create ? </h2>

            <select
              name='group'
              onChange={e => this.handleChange(e)}
            >
              <option />
              {groupInfo.map(item => {
                return (
                  <option value={item.groupName}>
                    {item.groupName}
                  </option>
                );
              })}
            </select>
          </label>

          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name='description'
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <label>Date event:</label>
          <input
            type='date'
            name='eventDate'
            value={this.state.eventDate}
            onChange={e => this.handleChange(e)}
          />
          {/* <Calendar onChange={this.handleChange} value={this.state.eventDate} /> */}

          <button>Save this meetup</button>
        </form>
      </div>
    );
  }
}

export default AddMeetup;
