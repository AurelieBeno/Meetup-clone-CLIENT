import React, { useState, useEffect } from "react";

import { postGotToEvent } from "../api.js";
import { Button } from "react-bootstrap";
import "../style/likeAndComment.scss";

const LikesBtn = props => {
  const [user, setUser] = useState([
    props.currentUser.userDoc._id
  ]);
  const [event, setEvent] = useState([props.meetup]);

  const [isAdd, setIsAdd] = useState(props.liked);
  console.log(isAdd);
  const handleAdd = e => {
    console.log("handleAdd");
    e.preventDefault();
    const addLike = { event, user };
    postGotToEvent(addLike).then(Response => {
      console.log("response to like", Response.data);
      setIsAdd(true);
    });
  };
  console.log(props);
  return (
    <section>
      <div className='likeAndComment-container flex-item rsvpIndicator-button--border'>
        <Button
          onClick={event => handleAdd(event)}
          className='like rsvpIndicator-button rsvpIndicator-rsvp-yesButton'
          data-swarm-button='default'
          data-swarm-size='small'
          data-swarm-width='grow'
          type='button'
        >
          <span>
            <i className='fas fa-check valign--middle' />
          </span>
        </Button>

        <Button
          // onClick={event => this.props.removeLike(event)}
          data-swarm-button='default'
          data-swarm-size='small'
          data-swarm-width='grow'
          type='button'
          className='Unlike rsvpIndicator-button rsvpIndicator-rsvp-noButton'
        >
          <span>
            <i className='fas fa-times valign--middle' />
          </span>
        </Button>
      </div>
      {isAdd && (
        <div>
          <h1>Add to event </h1>
        </div>
      )}
    </section>
  );
};

export default LikesBtn;
