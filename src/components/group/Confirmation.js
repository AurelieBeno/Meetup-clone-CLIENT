import React, { Component } from "react";
// import { Button, List } from "semantic-ui-react";
import { createGroup } from "../api.js";

class Confirmation extends Component {
  componentDidMount() {}

  // handleSubmit(event) {
  //   event.preventDefault();

  //   // Submit login info to the backend
  // }

  saveAndContinue = e => {
    e.preventDefault();
    const { description, groupName, category } = this.props;
    // console.log(this.props.values);
    createGroup(this.props.values).then(response => {
      console.log("Add Group", response.data);
      this.props.nextStep();
      // this.setState({ isSubmit: true });
    });
  };
  handleAddMeetup(event) {
    event.preventDefault();

    // Send this.state to the backend of SAVING
    createGroup(this.state).then(response => {
      console.log("Add Meetup", response.data);
      // Update the state for our redirect
      this.setState({
        isSubmitSuccessful: true
      });
    });
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        groupName,
        category,
        email,
        age,
        city,
        description
      }
    } = this.props;

    return (
      <div>
        <h1 className='ui centered'>
          Confirm your Details
        </h1>
        <p>
          Click Confirm if the following details have been
          correctly entered
        </p>
        <div>
          <form
            onSubmit={event => this.handleAddGroup(event)}
          >
            <div>
              <input
                type='text'
                defaultValue={this.props.groupName}
              />
            </div>
            <div>
              <textarea
                type='text'
                defaultValue={this.props.description}
              />
            </div>
            <div>
              <input
                type='text'
                defaultValue={this.props.category}
              />
            </div>
            <button onClick={this.saveAndContinue}>
              Save this group
            </button>
          </form>
          {/* <div>
            <div name='groupName' />
            <div>Group Name: {groupName}</div>
          </div>
          <div>
            <div name='users' />
            <div>Last Name: {lastName}</div>
          </div>
          <div>
            {/* <div name='mail' />
            <div>
              <a href='mailto:jack@semantic-ui.com'>
                {email}
              </a>
            </div> */}
        </div>
        {/* <div>
            <div name='calendar' />
            <div>{age} Years</div>
          </div> */}
        {/* <div>
            <div name='marker' />
            <div>
              {city}, {description}
            </div>
          </div>
        </div> */}

        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>
          Confirm
        </button>
      </div>
    );
  }
}

export default Confirmation;
