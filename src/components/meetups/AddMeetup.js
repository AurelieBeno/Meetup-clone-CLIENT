import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
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

const AddMeetup = props => {
  const [meetupName, setMeetupName] = useState("");
  const [description, setDescription] = useState("");

  const [eventDate, setEventDate] = useState(new Date());
  const [
    isSubmitSuccessful,
    setIsSubmitSuccessful
  ] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [group, setGroup] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [groupInfo, setGroupInfo] = useState([]);

  const handleAddMeetup = event => {
    event.preventDefault();
    addMeetup({
      description,
      name: meetupName,
      eventDate,
      group
    }).then(response => {
      console.log("Add Meetup", response.data);
      // Update the state for our redirect
      setIsSubmitSuccessful(true);
      // setShowModal(false);
      // this.setState({
    });
  };
  useEffect(() => {
    console.log("info is comming");
    getUserInfo().then(response => {
      console.log("USERinfo CDM", response.data);
      setUserInfo(response.data.user);
      setGroupInfo(response.data.group);
    });
  }, []);

  const handleToggle = event => {
    setShowModal(!showModal);
  };
  const handleClose = event => {
    setShowModal(!showModal);
  };

  return isSubmitSuccessful ? (
    <Redirect to='meetup' />
  ) : (
    <div className='add-meetup'>
      <div>
        <h2>
          Add a meetup {props.currentUser.userDoc.fullName}
        </h2>
        <form onSubmit={event => handleAddMeetup(event)}>
          <label>
            <h2>Where do you want to create ? </h2>
            <select
              name='group'
              onChange={e => setGroup(e.target.value)}
            >
              <option />

              {groupInfo.map(item => {
                return (
                  <option
                    value={item.groupName}
                    key={item._id}
                  >
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
            value={meetupName}
            onChange={e => setMeetupName(e.target.value)}
          />
          <div className='description--container flex flex-column'>
            <label>Description:</label>
            <textarea
              name='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className='event--container flex flex-column'>
            <label>Date event:</label>

            <Calendar
              onChange={e => setEventDate(e)}
              value={eventDate}
              name='eventDate'
            />
          </div>

          <div>
            <p onClick={e => handleToggle(e)}>
              Save this meetup
            </p>
          </div>
        </form>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
        name={meetupName}
        description={description}
        event={eventDate}
      >
        {!meetupName || !description ? (
          <div>
            <h2>
              <span>
                Merci de saisir les informations manquantes.
                <p>
                  <span>
                    {!meetupName
                      ? "Il manque le nom"
                      : null}
                  </span>
                  <br />
                  <span>
                    {!description
                      ? "il manque la description"
                      : null}
                  </span>
                </p>
              </span>
            </h2>
          </div>
        ) : (
          <div>
            <Modal.Header closeButton>
              <ModalTitle>
                <h3>Confirmation</h3>
              </ModalTitle>
            </Modal.Header>
            <ModalBody>
              <div className='animated'>
                <p>Nom de Meetup: </p>
                <p className='intro'>{meetupName}</p>
              </div>
              <div className='animated'>
                <p> Votre description: </p>
                <p className='enterRight'>{description}</p>
              </div>
              <div className='animated'>
                <p>Date choisie: </p>
                <p className='enterRight'>
                  {moment(eventDate).format("DDD ddd MMM")}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant='secondary'
                onClick={e => handleClose(e)}
              >
                Close
              </Button>
              <Button
                variant='primary'
                onClick={event => handleAddMeetup(event)}
              >
                Valider l'événement
              </Button>
            </ModalFooter>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AddMeetup;
