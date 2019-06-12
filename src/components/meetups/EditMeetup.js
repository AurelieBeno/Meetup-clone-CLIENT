import React, { Component } from "react";
import axios from "axios";

class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theMeetup.title,
      description: this.props.theMeetup.description
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios
      .put(`http:localhost:5000/api/meetups/${this.props.theMeetup._id}`, {
        title,
        description
      })
      .then(() => {
        this.props.getTheMeetup();
      })
      .catch(error => console.log(error));
  };

  handleFormSubmit = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeDesc = event => {
    this.setState({
      description: event.target.value
    });
  };
  render() {
    return (
      <div>
        <hr />
        <h3> Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default EditMeetup;
