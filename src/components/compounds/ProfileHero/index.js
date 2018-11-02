import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser, getUser } from '../../../store/actions/users';
import ProfileStats from '../ProfileStats';
import './index.scss';
import UpdateProfile from '../UpdateProfile';

class ProfileHero extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen
    }));
  }

  closeModal = () => {
    this.setState(() => ({
      modalIsOpen: false
    }));
  }


  readUrl = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = document.getElementById('js__picturepreview');
      img.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleUpdateUser = (e) => {
    e.preventDefault();
    const { updateUserProfile, userId, fetchUserProfile } = this.props;
    const FD = new FormData(e.target);
    this.setState(() => ({
      modalIsOpen: false
    }));
    updateUserProfile(FD);
    return fetchUserProfile(userId);
  }

  render() {
    const {
      image, firstname, lastname, username, email, followed,
      interests, bio, articles, ratings, bookmarks, follower
    } = this.props;
    const name = `${
      (firstname && firstname.trim() !== '')
     && (lastname || lastname.trim() !== '')
        ? `${firstname} ${lastname}`
        : ''}`;
    const { modalIsOpen } = this.state;
    return (
      <div className="Profile">
        <div className="columns is-half-desktop">
          <div className="column is-three-fifths">
            <div className="Profile__content">
              <div className="columns">
                <div className="column is-one-quarter is-paddingless MarginRight--25">
                  <div className="Profile__img">
                    <img src={image || 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png'} alt="Author's profile" />
                  </div>
                </div>
                <div className="column is-paddingless">
                  <div className="Profile__info">
                    <h1 className="Profile__name">{ name }</h1>
                    <h5 className="Profile__email">
                      {email || 'No email yet'}
                    </h5>
                    <h5 className="Profile__username">
@
                      {username || 'No username specified'}
                    </h5>
                  </div>
                  <div className="Profile__action MarginTop--10">
                    <button type="button" className="btn btn-primary Profile__edit" onClick={this.openModal}>
                      <i className="far fa-edit" />
                      <span>Edit</span>
                    </button>
                    <UpdateProfile
                      modalIsOpen={modalIsOpen}
                      closeModal={this.closeModal}
                      firstname={firstname}
                      lastname={lastname}
                      bio={bio}
                      interests={interests}
                      email={email}
                      username={username}
                      readUrl={this.readUrl}
                      handleUpdateUser={this.handleUpdateUser}
                      image={image}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="column">
            <ProfileStats
              articles={articles}
              ratings={ratings}
              bookmarks={bookmarks}
              follower={follower}
              followed={followed}
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateUserProfile: formdata => dispatch(updateUser(formdata)),
  fetchUserProfile: userId => dispatch(getUser(userId))
});

const mapStateToProps = ({ users }, ownProps) => ({
  ...ownProps,
  ...users
});

ProfileHero.propTypes = {
  updateUserProfile: PropTypes.func.isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  bookmarks: PropTypes.arrayOf.isRequired,
  followed: PropTypes.arrayOf.isRequired,
  follower: PropTypes.arrayOf.isRequired,
  articles: PropTypes.arrayOf.isRequired,
  interests: PropTypes.arrayOf.isRequired,
  ratings: PropTypes.arrayOf.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHero);
