import React, { Component } from "react";
import { getMeetupList } from "./api";

// import "./style/HomePage.css";
import MeetupList from "./meetups/MeetupList";
import SearchBar from "./SearchBar";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { meetupArray: [], createBy: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    getMeetupList()
      // Get data from our Express API
      .then(response => {
        // ALWAYS console.log(response.data) to see what the API gave you
        console.log("Meetup Liste", response.data);
        // Save the Json
        this.setState({
          meetupArray: response.data.meetup,
          createBy: response.data.creator
        });
      });
  }

  render() {
    const { meetupArray } = this.state;
    console.log(meetupArray);
    return (
      <section id="homepage">
        <div className="searchEvent">
          <SearchBar />
          {/* <form id="Form">
            <div className="dropdow callout">
              <input
                type="text"
                className="dropdown-toggle ellipzise"
                placeholder="Rechercher"
                size="30"
                // value="Rechercher"
                onChange={this.props.onChange}
              />
              {/* <ul className='dropdown-menu'>
                <li></li>
              </ul> */}
          {/* <button type="submit" />
            </div>
            <label htmlFor="" className="labelFormSearch">
              dans un rayon de <span>5 km </span> de
              <span> Paris,FR</span>
            </label>
          </form>  */}
        </div>
        <div>
          <MeetupList />
        </div>
      </section>
    );
  }
}

export default HomePage;
