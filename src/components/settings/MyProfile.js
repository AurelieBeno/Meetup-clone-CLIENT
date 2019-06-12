import React, { Component } from "react";
import moment from "moment";
import "../style/my-profil.scss";

class MyProfile extends Component {
  render() {
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
                <h2>Member de 3 Meetups</h2>
                <span>
                  Masquer mes groupes Meetup sur mon profil
                </span>
              </div>
              <div className='Group-icon-container'>
                <div className='left-side-container'>
                  <ul>
                    <li>
                      <p>Group name</p>
                      <p>Membre</p>
                    </li>
                    <li>
                      <p>IronHack Paris</p>
                    </li>
                    <p>Membre</p>
                  </ul>
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
