import React, { Component } from "react";
// import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <section className='personalDetails-container'>
        <form className='personalDetails-form'>
          <h1>Choose your topics</h1>
          {/* <Form.Field> */}
          <label>
            <h2>Topics</h2>
          </label>
          <input
            type='checkbox'
            placeholder='Age'
            onChange={this.props.handleChange("age")}
            defaultValue={values.age}
          />
          <input
            type='checkbox'
            placeholder='Age'
            onChange={this.props.handleChange("age")}
            defaultValue={values.age}
          />
          <input
            type='checkbox'
            placeholder='Age'
            onChange={this.props.handleChange("age")}
            defaultValue={values.age}
          />

          <label>Description</label>
          <input
            type='text-area'
            name='description'
            placeholder='Description'
            onChange={this.props.handleChange(
              "description"
            )}
            defaultValue={values.description}
          />
          {/* </Form.Field> */}
          <button onClick={this.back}>Back</button>
          <button onClick={this.saveAndContinue}>
            Save And Continue{" "}
          </button>
        </form>
      </section>
    );
  }
}

export default PersonalDetails;
