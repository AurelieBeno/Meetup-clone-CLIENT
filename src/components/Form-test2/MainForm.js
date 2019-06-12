import React, { Component } from "react";
import { createGroup } from "../api";
class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      description: "",
      groupName: "",
      category: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { description, groupName, category } = this.state;
    createGroup(this.state).then(response => {
      console.log("Add Group", response.data);
    });
    alert(`Your registration detail: \n 
           description: ${description} \n 
           groupName: ${groupName} \n
           category: ${category}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          React Wizard Form <span>🧙‍♂️</span>
        </h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            description={this.state.description}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            groupName={this.state.groupName}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            category={this.state.category}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='form-group'>
      <label htmlFor='description'>description</label>
      <input
        className='form-control'
        id='description'
        name='description'
        type='text'
        placeholder='Enter description'
        value={props.description}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className='form-group'>
      <label htmlFor='groupName'>groupName</label>
      <input
        className='form-control'
        id='groupName'
        name='groupName'
        type='text'
        placeholder='Enter groupName'
        value={props.groupName}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor='category'>category</label>
        <input
          className='form-control'
          id='category'
          name='category'
          type='category'
          placeholder='Enter category'
          value={props.category}
          onChange={props.handleChange}
        />
      </div>
      <button className='btn btn-success btn-block'>
        Sign up
      </button>
    </React.Fragment>
  );
}

export default MasterForm;
