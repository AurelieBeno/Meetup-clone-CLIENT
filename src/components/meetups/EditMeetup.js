import React, { Component } from "react";

import { editEvent } from "../api.js";

class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: this.props.Name,
      description: this.props.Description,
      eventId: this.props.Item,
      isSubmitSuccessful: false
    };
  }

  handleFormSubmit = event => {
    const name = this.state.title;
    const description = this.state.description;

    event.preventDefault();
  };

  handleFormSubmit = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeTitle = event => {
    this.setState({
      newName: event.target.value
    });
  };

  handleChangeDesc = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleEditEvent(event) {
    event.preventDefault();

    editEvent(this.state).then(response => {
      console.log("Edit Meetup", response.data);
      // Update the state for our redirect
      this.setState({
        isSubmitSuccessful: true
        // showModal: false
      });
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h3> Edit form</h3>

        <form
          onSubmit={event => this.handleEditEvent(event)}
        >
          <label>Name : </label>
          <input
            type='text'
            name='title'
            value={this.state.newName}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description</label>
          <textarea
            name='description'
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />

          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default EditMeetup;
