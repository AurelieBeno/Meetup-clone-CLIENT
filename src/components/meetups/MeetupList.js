import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { getMeetupList } from "../api.js";
import "../style/MeetupList.scss";

// returns the dynamic URL for phone details
function getMeetupAddress(meetup) {
  return `/meetup/${meetup._id}`;
}

function getGroupAdress(group) {
  return `/group/${group._id}`;
}

class MeetupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetupArray: [],
      createBy: {},
      group: []
    };
  }

  componentDidMount() {
    getMeetupList()
      // Get data from our Express API
      .then(response => {
        // ALWAYS console.log(response.data) to see what the API gave you
        console.log("Meetup Liste", response.data);
        // Save the Json
        this.setState({
          meetupArray: response.data.meetupInfo,
          eventDates: response.data.event
        });
      });
  }

  render() {
    const { meetupArray } = this.state;
    // console.log(
    //   "**********hello meetupArray.meetup************"
    // );

    // console.log(eventDates, " :event dates");
    return (
      <section className='meetupList-container'>
        {/* {eventDates.map(date => {
          return (
            <section>
              <div>
                {moment(date).format("dddd DD MMMM")}
              </div>

              <div />
            </section>
          );
        })} */}
        <div>
          <div className='list-wrapper'>
            {meetupArray.map((item, index) => {
              return (
                <ul
                  key={index}
                  className='list-container searchResults resetList clearfix'
                >
                  <li className='date-indicator'>
                    {moment(item.eventDate).format(
                      "dddd DD MMM"
                    )}
                  </li>

                  <li className='event-listening-container-li'>
                    <ul className='event-listing-container'>
                      <li className='row event-listening clearfix doc-padding last'>
                        <div className='row-item row-item--shrink text--secondary'>
                          <p>9:00</p>
                        </div>
                        <div className='row--item'>
                          <div className='chunk'>
                            <div className='text--labelSecondary '>
                              <Link
                                className='link-group'
                                to={getGroupAdress(
                                  item.group
                                )}
                              >
                                <span>
                                  {item.group.groupName}
                                </span>
                              </Link>
                            </div>
                            <Link
                              className='link-name'
                              to={getMeetupAddress(item)}
                            >
                              {item.name}
                            </Link>

                            <div className='text--secondary clearfix'>
                              {item.GotoEvent.length <=
                              0 ? (
                                <div>
                                  <span>
                                    Pas encore d'inscrit
                                  </span>
                                </div>
                              ) : item.GotoEvent.length ===
                                1 ? (
                                <div className='attendee-count'>
                                  {item.GotoEvent.length}
                                  <span className='margin--left'>
                                    personnes y-va
                                  </span>
                                </div>
                              ) : (
                                <div>
                                  {item.GotoEvent.length}
                                  <span className='margin--left'>
                                    personnes y-vont
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className='list-item' />
                </ul>
              );
            })}
          </div>
          ); })}
        </div>{" "}
        */}
      </section>
    );
  }
}

export default MeetupList;
