import React, { Component } from "react";
// import { relaiveTimeRounding } from "moment";
// import moment from "moment";
import { Link, Switch, Route } from "react-router-dom";
import { getGroupDetail, postMemberDde } from "../api.js";
import Apropos from "./Apropos.js";

import "../style/groupDetails.scss";
// import Button from "./Button.js";
import ButtonGroup from "./Button.js";
import Evenement from "./Evenement.js";

class GroupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { groupArray: [], isSubmit: false };
  }

  componentDidMount() {
    const { params } = this.props.groupInfo.match;
    console.log(params);
    window.scrollTo(0, 0);

    getGroupDetail(params.groupId).then(response => {
      console.log("RESPONSE BACK END CDM", response.data);
      this.setState({
        groupArray: response.data.groupInfo,
        checkOwner: response.data.res,
        checkUsr: response.data.checkUser
      });
    });
  }

  addGo(ev) {
    const r = this.state.groupArray.map(i => i._id);
    const addMember = {
      group: r.toString(),
      liker: this.props.currentUser.userDoc._id
    };
    postMemberDde(addMember).then(response => {
      console.log(
        "RESPONSE ADD MEMBER BACK END ",
        response.data
      );
      this.setState({ isSubmit: true });
    });
  }

  render() {
    console.log(
      " CURRENT USER ID",
      this.props.currentUser.userDoc._id
    );
    const { groupArray, checkOwner, checkUsr } = this.state;
    console.log("groupArray render()");
    return (
      <section className=''>
        {groupArray.map(item => {
          return (
            <div className='container'>
              <div className='img-container'>
                IMG background
              </div>
              <div className='list-container'>
                <div>
                  <h2>{item.groupName}</h2>
                </div>
                <div>
                  <div className='localisation-container'>
                    <span className='localisation-span'>
                      <i className='fas fa-map-pin' />
                    </span>
                    <span>
                      <p>Paris, France</p>
                    </span>
                  </div>
                  <div className='member-container'>
                    <span className='member-span'>
                      <i className='fas fa-user-friends' />
                    </span>
                    <span>
                      {item.member.length} membres
                    </span>
                  </div>
                  <div className='ownerInfo'>
                    <span className='owner-span'>
                      <i className='fas fa-address-book' />
                    </span>
                    <span>Organisé par </span>
                    <span className='fullName'>
                      {item.owner.fullName}
                    </span>
                  </div>

                  <div className='joinGroup'>
                    {checkUsr.length > 1 ? (
                      <div>
                        <span> Group follow </span>
                      </div>
                    ) : (
                      <div>
                        {checkOwner === "yes" ? (
                          <div>
                            <span> This is your group</span>
                          </div>
                        ) : (
                          !this.state.isSubmit && (
                            <div className='joinGroup-btn'>
                              <ButtonGroup
                                member={event =>
                                  this.addGo(event)
                                }
                                group={
                                  this.state.groupArray
                                }
                                currentUser={
                                  this.state.currentUser
                                }
                                meetupArray={
                                  this.state.meetupArray
                                }
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                  {this.state.isSubmit && (
                    <div>
                      <span>
                        <h2> Is submit</h2>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <section className='apropos'>
                <ul className='apropos-container'>
                  <Link to='/group/apropos'>A propos</Link>
                  <Link to='/group/evenement'>
                    Evenements
                  </Link>
                  <Link>Membres</Link>
                  <Link>Photos</Link>
                  <Link>Discussions</Link>
                  <Link>Plus</Link>
                </ul>

                <Switch>
                  <Route
                    path='/group/apropos'
                    render={props => {
                      return (
                        <Apropos
                          // propsInfo={props}
                          groupInfo={this.state.groupArray}
                        />
                      );
                    }}
                  />
                  <Route
                    path='/group/evenement'
                    render={props => {
                      return (
                        <Evenement
                          currentUser={
                            this.props.currentUser
                          }
                          groupInfo={this.state.groupArray}
                          meetupArray={
                            this.props.meetupArray
                          }
                        />
                      );
                    }}
                  />
                </Switch>
              </section>
            </div>
          );
        })}
      </section>
    );
  }
}

export default GroupDetails;
