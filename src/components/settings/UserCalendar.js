import React, { Component } from "react ";
import { Calendar } from "react-calendar";

class MyCalendar extends Component {
  render() {
    return (
      <section className='myCalendar--section'>
        <div className='myCalendar--title'>
          <h2> Evénements prévus </h2>
        </div>
        <div className='myCalendar--calendar-container'>
          <Calendar />
        </div>
      </section>
    );
  }
}
export default MyCalendar;
