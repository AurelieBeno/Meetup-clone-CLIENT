import React, { Component } from "react";
// import { Form, Button } from "semantic-ui-react";

class GroupDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { groupsName, description } = this.props;
    return (
      <section className='GroupDetails-container'>
        <form>
          <h1 className>Enter Group Details</h1>
          <label>
            <h2> Group name </h2>
          </label>
          <input
            placeholder='Group Name'
            onChange={this.props.handleChange("groupName")}
            defaultValue={this.props.groupName}
            name='groupName'
          />
          <label>
            <h2> Où souhaitez-vous créer votre groupe ?</h2>
          </label>
          <input
            type='disable'
            onChange={this.props.handleChange("city")}
            defaultValue={this.props.city}
          />
          {/* // // <a>Modifier la ville</a> */}

          <button onClick={this.saveAndContinue}>
            Save And Continue
          </button>
        </form>
      </section>
    );
  }
}

export default GroupDetails;
