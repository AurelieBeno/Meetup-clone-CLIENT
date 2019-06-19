import React, { Component } from "react";

class Apropos extends Component {
  constructor(props) {
    super(props);
    this.state = { groupInfo: [] };
  }
  componentDidMount() {
    console.log("coucou CDM", this.props.groupInfo);
    this.setState({ groupInfo: this.props.groupInfo });
  }
  render() {
    const { groupInfo } = this.state;
    return (
      <div>
        <h2>A propos de ce groupe</h2>
        <div className='apropos-content'>
          {groupInfo.map(item => {
            return <div>{item.description} </div>;
          })}
        </div>
      </div>
    );
  }
}

export default Apropos;
