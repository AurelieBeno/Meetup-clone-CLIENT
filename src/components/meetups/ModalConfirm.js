import React, { Component } from "react";
import "../style/modalConfirm.scss";

class ModalConfirm extends Component {
  render() {
    return (
      <section className='modal '>
        <div className={this.props.like ? "open" : "close"}>
          <div className='modal-window'>
            <div className='modal-header'>
              Confirmation
              <button className='modal-close'>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              You have add this meetup
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ModalConfirm;
