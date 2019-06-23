import React, { useState, useEffect } from "react";
import { getOnlyMyMeetup } from "../api.js";
import moment from "moment";

import EditMeetup from "../meetups/EditMeetup";
import "../style/MyMeetup.scss";

const MyMeetup = props => {
  const [myArray, setmyArray] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = e => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    getOnlyMyMeetup().then(Response => {
      console.log("my meetup from BACKEND", Response.data);
      setmyArray(Response.data.createdEvent);
    });
  }, []);

  let content = (
    <React.Fragment>
      <section className='Mymeetup-container'>
        <h2> My meetup </h2>
        <div>
          {myArray.map(item => {
            return (
              <ul className='MyMeetup-list-container MymeetupBorder '>
                <li key={item._id} className='listItem'>
                  <div className='listName'>
                    {item.name}
                    <div className='edit-container'>
                      <span onClick={e => toggleForm(e)}>
                        Editer/Modifier
                      </span>
                    </div>
                    <div>
                      {showForm && (
                        <EditMeetup
                          edit={e => props.edit(e)}
                          Item={item._id}
                          Name={item.name}
                          Description={item.description}
                        />
                      )}
                    </div>
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
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
  return content;
};
export default MyMeetup;
