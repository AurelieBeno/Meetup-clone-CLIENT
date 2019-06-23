import React, { useState, useEffect } from "react";
import { getMeetupList } from "./api";

// import "./style/HomePage.css";
import MeetupList from "./meetups/MeetupList";
import SearchBar from "./SearchBar";

const HomePage = props => {
  const [meetupArray, setMeetupArray] = useState([]);
  const [createBy, setCreateBy] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    getMeetupList().then(response => {
      // ALWAYS console.log(response.data) to see what the API gave you
      console.log("Meetup Liste", response.data);
      // Save the Json
      setMeetupArray(response.data.meetupInfo);
      setCreateBy(response.data.creator);
    });
  }, []);

  return (
    <section id='homepage'>
      <div className='searchEvent'>
        <SearchBar />
      </div>
      <div>
        <MeetupList />
      </div>
    </section>
  );
};

export default HomePage;
