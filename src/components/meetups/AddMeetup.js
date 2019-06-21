import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import moment from "moment";
import {
  Modal,
  Button,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "react-bootstrap";

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
      groupInfo: [],
      showModal: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

    addMeetup(this.state).then(response => {
      console.log("Add Meetup", response.data);
      // Update the state for our redirect
      this.setState({
        isSubmitSuccessful: true,
        showModal: false
      });
    });
  }

  onChange = eventDate => {
    this.setState({ eventDate });
  };

  handleToggle() {
    this.setState({ showModal: true });
  }
  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    const { currentUser } = this.props;
    const {
      userInfo,
      groupInfo,
      showModal,
      name,
      description
    } = this.state;
    JSON.stringify(userInfo);

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
          <div className='description--container flex flex-column'>
            <label>Description:</label>
            <textarea
              name='description'
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className='event--container flex flex-column'>
            <label>Date event:</label>

            <Calendar
              onChange={this.onChange}
              value={this.state.eventDate}
              name='eventDate'
            />
          </div>

          <div onClick={() => this.handleToggle()}>
            <h3>Save this meetup</h3>
          </div>
        </form>
        <Modal
          show={this.state.showModal}
          onHide={this.handleClose}
          name={this.state.name}
          description={this.state.description}
          event={this.state.eventDate}
        >
          <Modal.Header closeButton>
            <ModalTitle>
              <h3>Confirmation</h3>
            </ModalTitle>
          </Modal.Header>
          <ModalBody>
            <div className='animated'>
              <p>Nom de Meetup: </p>
              <p className='intro'>{this.state.name}</p>
            </div>
            <div className='animated'>
              <p> Votre description: </p>
              <p className='enterRight'>
                {this.state.description}
              </p>
            </div>
            <div className='animated'>
              <p>Date choisie: </p>
              <p className='enterRight'>
                {moment(this.state.eventDate).format(
                  "DDD dd MMM"
                )}
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              variant='secondary'
              onClick={this.handleClose}
            >
              Close
            </Button>
            <Button
              variant='primary'
              onClick={event => this.handleAddMeetup(event)}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMeetup;
