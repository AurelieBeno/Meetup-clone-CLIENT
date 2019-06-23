/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import moment from "moment";

import {
  getMeetupDetails
  // postGotToEvent
} from "../api.js";

import "../style/meetupDetails.scss";

// import Meetuptest from "./MeetupTest.js";
import LikesBtn from "./LikeBtn";
// import ModalConfirm from "./ModalConfirm.js";

function getGroupAdress(group) {
  return `/group/${group._id}`;
}

const MeetupDetails = props => {
  const [meetupArray, setMeetupArray] = useState([]);
  const [newArrTest, setNewArrTest] = useState([]);
  const [groupArr, setGroupArr] = useState([]);
  // const [otherEvent, setOtherEvent] = useState([]);
  // const [creaName, setCreaName] = useState("");
  const [isClick, setIsClick] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [goTo, setGoTo] = useState([]);
  // const [post, setPost] = useState([]);
  const [liker, setLiker] = useState([]);

  useEffect(() => {
    const { params } = props.postInfo.match;
    console.log("PROPS IN CDM", props);
    console.log("useEffet run");
    window.scrollTo(0, 0);

    getMeetupDetails(params.meetupId).then(response => {
      setMeetupArray(response.data.meetupInf);
      setNewArrTest(response.data.userInf);
      setGroupArr(response.data.groupInf);
      setGoTo(response.data.test);
    });
    // console.log(goTo, " + ", meetupArray, " + ", groupArr);
  }, []);

  const myGo = goTo.map(i => i);
  return (
    <section className='meetupDetails-container'>
      <div className='eventPageHead stripe'>
        <div className='bouds bouds--wide'>
          <div className='pageHead--wrapper'>
            <div className='pageHead'>
              <div className='flex flex--column atMedium_flex--row flex--alignTop pageHead-pageTitle'>
                <div className='dateDisplay--wrapper'>
                  <time className='dateDisplay valignChildren--center'>
                    <span className='dateDisplay-day'>
                      <span>
                        {moment(
                          meetupArray.eventDate
                        ).format("DD")}
                      </span>
                    </span>
                    <span className='dateDisplay-month text--tiny'>
                      <span>
                        {moment(
                          meetupArray.eventDate
                        ).format("MMM")}
                      </span>
                    </span>
                  </time>
                </div>
                <div className='flex-item flex-item--2 pageHead--titleArea'>
                  <p className='pageHead-pageTitleLabel text--medium text--secondary'>
                    <time className='eevntStatusLabel'>
                      <span>
                        {moment(
                          meetupArray.eventDate
                        ).format("dddd DD MMM YYYY")}
                      </span>
                    </time>
                  </p>
                  <h1 className='pageHead-headline text--pageTitle'>
                    {meetupArray.name}
                  </h1>
                  <div className='flex flex--row--alignCenter flex--alignCenter event-info-hosts text--small'>
                    <div className='flex-item flex-item--shrink'>
                      <a
                        className='avatar avatar--person'
                        href='#'
                      />
                    </div>
                    <div className='flex-item event-info-hosts-text text--secondary text--small valign--middle wrap--singleLine--truncate'>
                      <Link to='#'>
                        <span>
                          <span className='text--secondary text--small'>
                            Animé par
                            <span className='link'>
                              {newArrTest.fullName}
                            </span>
                          </span>
                        </span>
                      </Link>
                      <Link to={getGroupAdress(groupArr)}>
                        <p className='text--secondary text--small wrap--singleLine--truncate'>
                          <span>
                            De
                            <span className='event-info-group--groupName link'>
                              {groupArr.groupName}
                            </span>
                          </span>
                        </p>
                      </Link>
                      <span className='groupPrivacyLabelTooltil text--secondary test--small'>
                        <div>
                          <span className='infoToggle-label'>
                            <span>Group public</span>
                          </span>
                          <div className='popup'>
                            <div className='popup-trigger'>
                              <button
                                type='button'
                                data-swarm-button='reset'
                                data-swarm-size='default'
                              >
                                <span className='infoToggle-trigger align-center'>
                                  ?
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex-item pageHead-pageAcions'>
                  <div className='flex-item rsvpIndicator-button--border' />
                  <div className='rsvpIndicator span--100'>
                    <div className='eventStatusIndicator padding--bottom'>
                      <p className='eventStatusIndicator-status display--inline text--bold padding--right-half'>
                        <span>Vous y aller ? </span>
                      </p>
                      <p className='eventStatusIndicator-status display--inline text--secondary'>
                        <span>Il reste 22 places</span>
                      </p>
                    </div>
                    <div className='flex flex--row flex--spaceBetween'>
                      {myGo.map(i => {
                        console.log(i);
                        return i.length > 0 ? (
                          <div>
                            <span>
                              Vous etes deja inscrit
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className='flex-item rsvpIndicator-button--border'>
                              <LikesBtn
                                liked={isClick}
                                addLike={liker}
                                meetup={meetupArray}
                                currentUser={
                                  props.currentUser
                                }
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className='flex flex--row flex--noGutters padding--tip padding--bottom border--bottom border--top margin--top text--small'>
                    <div className='flex-item flex-item--shrink'>
                      <span className='event-share-label text--bold padding--right-half valign--middle'>
                        <span> Partager :</span>
                      </span>
                    </div>

                    <div className='flex-item flex-item--shrink'>
                      <button
                        type='button'
                        className='event-share-facebook padding--right-half'
                      >
                        <span>
                          <i className='fab fa-facebook-square' />
                        </span>
                      </button>
                    </div>

                    <div className='flex-item flex-item--shrink'>
                      <button
                        type='button'
                        s
                        className='event-share-twitter padding--right-half'
                      >
                        <span>
                          <i className='fab fa-twitter' />
                        </span>
                      </button>
                    </div>

                    <div className='flex-item flex-item--shrink'>
                      <button type='button'>
                        <span>
                          <i className='fab fa-linkedin' />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetupDetails;
