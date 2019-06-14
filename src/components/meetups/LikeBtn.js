import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../style/likeAndComment.scss";

class LikesBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        {this.props.meetup.GotoEvent ===
        this.props.currentUser.userDoc._id ? (
          <div>
            <p>Deja inscrit</p>
          </div>
        ) : (
          <div className='likeAndComment-container flex-item rsvpIndicator-button--border'>
            <Button
              onClick={event => this.props.addLike(event)}
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
              onClick={event =>
                this.props.removeLike(event)
              }
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
        )}
      </section>
    );
  }
}

export default LikesBtn;
