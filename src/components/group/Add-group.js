import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { createGroup } from "../api";
import("../style/add-group.scss");

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      description: "",
      category: " Paris, Fr",
      isShow: false,
      isSubmitSuccessful: false,
      showStore: true
    };
  }

  togglenext(event) {
    event.preventDefault();
    this.setState({ isShow: true, showStore: false });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit(event) {
    event.preventDefault();

    // Send this.state to the backend of SAVING
    createGroup(this.state).then(response => {
      console.log("Create Group", response.data);
      // Update the state for our redirect
      this.setState({
        isSubmitSuccessful: true
      });
    });
  }

  render() {
    const { currentUser } = this.props;
    const { isShow } = this.state;

    // const { groupName, category, description } = this.state;
    return this.state.isSubmitSuccessful ? (
      <Redirect to='meetup' />
    ) : (
      <section className='addGroup-container GroupDetails-container'>
        <div>
          <h1> Créer un groupe Meetup</h1>
          <p>
            Nous vous aiderons à trouver les bonnes
            personnes pour votre groupe.
          </p>
        </div>
        <div>
          <span>Etape 1 de 4</span>
        </div>
        <div className='form-container GroupDetails-container'>
          <form
            onSubmit={event => this.handleSubmit(event)}
          >
            <label>
              <h2> Group Name</h2>
            </label>
            <input
              type='text'
              name='groupName'
              value={this.state.groupName}
              onChange={this.handleChange}
            />
            <button
              onClick={e => this.togglenext(e)}
              style={{
                display: this.state.showStore
                  ? "block"
                  : "none"
              }}
            >
              next
            </button>
            {this.state.isShow && (
              <div className='second'>
                <div className='description-container'>
                  <label>
                    <h2> description</h2>
                  </label>
                  <textarea
                    type='text'
                    name='description'
                    value={this.state.description}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className='category-container'>
                  <label>
                    <h2> category</h2>
                  </label>
                  <input
                    type='text'
                    name='category'
                    value={this.state.category}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
            )}
            <button>Save this group</button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddGroup;
