import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { createGroup } from "../api";
import posed from "react-pose";
import("../style/add-group.scss");

const Div = posed.div({
  visible: {
    transition: { ease: "easeIn", duration: 1400 },
    y: 0,
    opacity: 1,
    x: 0,
    delayChildren: 250,
    staggerChildren: 200
  },
  closed: { y: 0, opacity: 0, x: 20 }
});
const Btn = posed.button({
  visible: {
    transition: { ease: "easeOut", duration: 2000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: {
    transition: { ease: "easeOut", duration: 1200 },
    y: 0,
    opacity: 0,
    x: 120
  }
});
const Div2 = posed.div({
  open: {
    transition: { ease: [0.01, 0.64, 0.99, 0.56] },
    // transition: { ease: "easeIn", duration: 1400 },
    opacity: 1,
    y: 0,
    x: 0,
    delayChildren: 250,
    staggerChildren: 200
  },
  closed: {
    transition: { ease: "easeOut", duration: 1200 },
    y: 0,
    opacity: 0,
    x: 120
  }
});
const Desc = posed.div({
  open: {
    transition: { ease: [0.01, 0.64, 0.99, 0.56] },

    // transition: { ease: "easeOut", duration: 5000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: {
    transition: { ease: "easeIn", duration: 1400 },
    opacity: 0,
    y: 0,
    x: 0
  }
});

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

  componentDidMount() {
    this.setState({ isVisible: true });
  }
  render() {
    const { currentUser } = this.props;
    const { isShow, isVisible, showStore } = this.state;

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
        <Div
          pose={isVisible ? "visible" : null}
          className='form-container GroupDetails-container'
        >
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
            <Btn
              onClick={e => this.togglenext(e)}
              // style={{
              //   display: this.state.showStore
              //     ? "block"
              //     : "none"
              // }}
              pose={showStore ? "visible" : "closed"}
            >
              next
            </Btn>
            {this.state.isShow && (
              <Div2
                pose={isShow ? "open" : "closed"}
                className='second'
              >
                <Desc className='description-container'>
                  <label>
                    <h2> description</h2>
                  </label>
                  <textarea
                    type='text'
                    name='description'
                    value={this.state.description}
                    onChange={e => this.handleChange(e)}
                  />
                </Desc>
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
              </Div2>
            )}
            <button>Save this group</button>
          </form>
        </Div>
      </section>
    );
  }
}

export default AddGroup;
