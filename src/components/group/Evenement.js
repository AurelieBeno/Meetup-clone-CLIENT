import React, { Component } from "react";
import moment from "moment";
import "../style/Evenement.scss";

class Evenement extends Component {
  constructor(props) {
    super(props);
    this.state = { allEvent: [] };
  }
  componentDidMount() {
    this.setState({
      allEvent: this.props.groupInfo
    });
  }

  render() {
    const eventArr = this.state.allEvent;
    // let result = eventArr.map(el => ({
    //   name: JSON.stringify(el.name),
    //   description: JSON.stringify(el.description),
    //   date: JSON.stringify(el.eventDate)
    // }));
    return (
      <section className='eventPage-container'>
        <div>
          <div className='aVenir list-container'>
            <p>à venir</p>
          </div>
          <div className='list-container'>
            {/* {console.log(eventArr.map(item => item))} */}
            {eventArr.map(el => {
              return (
                <ul className='item-container'>
                  {console.log(el.Event)}
                  {el.Event.map((item, id) => {
                    return (
                      <li key={id} className='li-container'>
                        <div className='date-container'>
                          <span>
                            {moment(item.eventDate).format(
                              "dddd DD MMMM"
                            )}
                          </span>
                        </div>
                        <div className='flex--column name-container'>
                          <h2 className='name'>
                            {item.name}
                          </h2>
                        </div>
                        <div className='flex--column description-container'>
                          <p>{item.description}</p>
                        </div>
                        <div className='countMember-container flex padding--bottom'>
                          <div className='count'>
                            <span>
                              {item.GotoEvent.length}
                            </span>
                            participant
                          </div>
                          <div className='btn-add-container'>
                            <button
                              // onClick={event =>
                              //   this.props.addLike(event)
                              // }
                              className='like rsvpIndicator-button rsvpIndicator-rsvp-yesButton'
                              data-swarm-button='default'
                              data-swarm-size='small'
                              data-swarm-width='grow'
                              type='button'
                            >
                              <span>Participer</span>
                            </button>
                            {/* <button
                              data-swarm='default'
                              data-swarm-size='default'
                              data-icon='left'
                              data-swarm-width='grow'
                            >
                              <span> Participer </span> */}
                            {/* </button> */}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Evenement;
