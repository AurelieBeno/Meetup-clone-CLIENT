import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style/Modal.scss";
import posed from "react-pose";

const Section = posed.section({
  open: {
    transition: { ease: "easeInOut", duration: 1400 },
    x: 0,
    delayChildre: 0,
    straggerChildre: 200,
    opacity: 1,
    delay: 0
  },
  closed: {
    x: 10,
    delay: 0,
    opacity: 0
  }
});

//Animations
const Div = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1400 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 20 }
});
const H1 = posed.h1({
  open: {
    transition: { ease: "easeOut", duration: 2000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 30 }
});
const P = posed.p({
  open: {
    transition: { ease: "easeOut", duration: 2000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 0 }
});

const Footer = posed.footer({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 40 }
});
const ButtonWrap = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1500 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 400 }
});

class ButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false, open: false };
  }

  // this.handleShow = this.handleShow.bind(this);
  // this.handleClose = this.handleClose.bind(this);

  // cdm for animation
  componentDidMount() {
    this.setState({ isOpen: true });
  }

  showModal() {
    this.setState({ show: true });
  }
  closeModal() {
    this.setState({ show: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      // <section>
      //   <div onClick={event => this.showModal(event)}>
      //     hello button
      //   </div>
      //   {/* {this.state.modalShow && (
      //     <div>SHOW MODAL FC OK</div>
      //   )} */}
      // </section>
      <section pose={isOpen ? "open" : "closed"}>
        <div className='container'>
          <div className='row'>
            {/* <H1>
              <span>coucou </span>
            </H1>
            <P>c'est un test </P> */}
            <ButtonWrap>
              <button
                className='btn--modal'
                // variant='primary'
                // size='lg'
                onClick={() => this.props.member()}
              >
                Demander è rejoindre le groupe
              </button>
            </ButtonWrap>
          </div>
        </div>

        <Modal
          className='modal-content'
          // style={
          // position: absolute;
          // top: 30%;
          // left: 22%;
          // height: 31%;
          // width: 200px;
          // background-color: rgba(147, 112, 219,0.4);
          // }
          centered
          show={this.state.show}
          onHide={() => this.closeModal()}
        >
          <Modal.Header>
            <Modal.Title>Title ,</Modal.Title>
          </Modal.Header>
        </Modal>
      </section>
    );
  }
}
export default ButtonGroup;
