import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { profilInfo } from "../api.js";

import "../style/my-profil.scss";

function getGroupAdress(group) {
  return `/group/${group._id}`;
}
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { myInfo: [] };
  }
  componentDidMount() {
    profilInfo().then(response => {
      console.log("Response BE my profil", response.data);
      this.setState({ myInfo: response.data.userInfo });
    });
  }

  render() {
    const myInfo = this.state.myInfo;
    console.log(
      "my info ",
      " ",
      myInfo.map(el => el.followGroup)
      // .followGroup.map(el => "coucou" + el)
      // .map(i => i.followGroup).map(el => el.groupName)
    );
    return (
      <section className='myProfil-container'>
        <div className='profil-container--margin flex container'>
          <div className='left-container '>
            <div className='left-container-info flex'>
              <div className='title-container'>
                <h2>
                  {this.props.currentUser.userDoc.fullName}
                </h2>
              </div>
              <div className='infoMember-container flex'>
                <div className='cityInfo-container'>
                  <p>Lieu</p>
                  <span>Paris</span>
                </div>
                <div className='dateSocial-container flex'>
                  <div className='date-container'>
                    <p>Member Meetup depuis:</p>
                    <span>
                      {moment(
                        this.props.currentUser.userDoc
                          .createdAt
                      ).format("dddd DD MMMM")}
                    </span>
                  </div>
                  <div className='social-container'>
                    <p>Réseau sociaux :</p>
                    <span>fafa-icon todo</span>
                  </div>
                </div>
              </div>
              <div className='bio-container'>
                <span>Ajouter une bio</span>
              </div>
            </div>
            <div className='group-info-container'>
              <div className='titleG-container'>
                <h2>
                  Vous êtes membre de{" "}
                  {myInfo.map(el => el.followGroup.length)}{" "}
                  groupes
                </h2>
                <p>
                  Masquer mes groupes Meetup sur mon profil
                </p>
              </div>
              <div className='Group-icon-container'>
                <div className='left-side-container'>
                  {myInfo.map(el => {
                    return (
                      <ul>
                        {el.followGroup.map((infoG, id) => {
                          return (
                            <li
                              key={id}
                              className='grouplist'
                            >
                              <Link
                                to={getGroupAdress(infoG)}
                              >
                                <h4 className='groupName'>
                                  {infoG.groupName}
                                </h4>
                              </Link>

                              <span className='groupStatus'>
                                Member
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>

                <div className='right-side-container' />
              </div>
            </div>
          </div>
          <div className='right-container'>
            <div className='photo-container'>
              <img
                alt='noPhoto'
                src={
                  "https://secure.meetupstatic.com/s/img/2982428616572973604/noPhoto_80.gif"
                }
              />
              <span className='small'>
                Modifier votre photo
              </span>
            </div>
            <div className='clear'>
              <ul>
                <li />
              </ul>
            </div>
            <div className='Hobby-container'>
              <h3>Centres d'intérêt</h3>
              <span>Editer</span>
            </div>
            <div>
              <span>Pas encore ajoutée</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyProfile;
