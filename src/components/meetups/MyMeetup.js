import React, { Component } from "react";
import { getOnlyMyMeetup } from "../api.js";
import moment from "moment";

import "../style/MyMeetup.scss";

class MyMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = { myArray: [] };
  }

  componentDidMount() {
    console.log("hello CDM my meetup");

    //  console.log(this.props.currentUser);

    getOnlyMyMeetup().then(Response => {
      console.log("my meetup from BACKEND", Response.data);
      this.setState({
        myArray: Response.data.createdEvent
      });
    });
  }
  render() {
    const { myArray } = this.state;
    console.log("myArray BackEnd state");
    // console.log(typeof myArray);
    // console.log(JSON.stringify(myArray));
    console.log(typeof myArray);
    return (
      <section className='Mymeetup-container'>
        <h2> My meetup </h2>
        <div
        // className="MymeetupBorder"
        >
          {myArray.map((item, index) => {
            return (
              <ul className='MyMeetup-list-container MymeetupBorder '>
                <li key={index._id} className='listItem'>
                  <div className='listName'>
                    {item.name}
                  </div>
                  <div className='listName'>
                    {moment(item.eventDate).format(
                      "DD-MMMM-YY"
                    )}
                  </div>

                  <div className='listDescription'>
                    {item.description}
                  </div>
                  <div className='listInscrit'>
                    Nombre d'inscrit :
                    {item.GotoEvent && (
                      <span>
                        {item.GotoEvent.length}
                        {console.log(item.GotoEvent)}
                      </span>
                    )}
                    {/* <span>
                      {item.createdEvent.GotoEvent.fullName.map(
                        item => item.length
                      )}
                    </span> */}
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </section>
    );
  }
}

export default MyMeetup;
{
  /* {Object.keys(item.GotoEvent).map(
                      (keyName, i) => (
                        <li
                          className='travelcompany-input'
                          key={i}
                        >
                          <span className='input-label'>
                            key: {i} Name:
                            {item.GotoEvent[keyName]}
                          </span>
                        </li>
                      )
                    )} */
}
