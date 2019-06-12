import React, { Component } from "react";

// import { Link } from "react-router-dom";

// function getMeetupAddress(meetup) {
//   return `/meetup/${meetup._id}`;
// }
class Meetuptest extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state  };
  // }

  // componentDidMount() {
  //   this.setState = {};
  // }
  render() {
    return (
      <div>
        <div>
          <h3>
            {" "}
            Other events by
            {/* {this.props.creaName} */}
          </h3>
          {/* {this.props.newArrTest.map(item => { */}
          return (
          <ul>
            <h3>
              {/* <Link
                // to={
                //   getMeetupAddress()
                  // item
                }
              >
              </Link>   {/* {item.name} */}
            </h3>
            <li>description :{/* {item.description} */}</li>
          </ul>
          {/* );
          })} */}
        </div>
      </div>
    );
  }
}

export default Meetuptest;
