import React from 'react';
import PropTypes from 'prop-types';

const UpdateProfile = (props) => {
  const {
    image, firstname, lastname, username, email,
    interests, bio, modalIsOpen, closeModal, handleUpdateUser, readUrl,
  } = props;
  return (
    <div className={`modal ${modalIsOpen ? 'is-active' : false}`}>
      <div className="modal-background" />
      <form className="modal-card" onSubmit={handleUpdateUser}>
        <header className="modal-card-head">
          <p className="modal-card-title">Update Profile</p>
          <button type="button" className="delete" aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="container centerlized">
            <div className="UpdateProfile">
              <div className="field">
                <div className="Upload__image">
                  <img src={image} alt="update profile" id="js__picturepreview" />
                  <div className="Upload__overlay">
                    <i className="fas fa-camera fa-2x" />
                  </div>
                  <input type="file" name="image" id="fileUpload" onChange={readUrl} />
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="first name" name="firstname" defaultValue={firstname || ''} />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="lastname" name="lastname" defaultValue={lastname || ''} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="username" name="username" defaultValue={username || ''} />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email address" placeholder="email" name="email" defaultValue={email || ''} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="interest: separate with comma(,)"
                    name="interests"

                    defaultValue={
                                interests
                                  ? interests.join(',').trim('')
                                  : ''
                              }
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" type="text" placeholder="Bio" row="10" name="bio" defaultValue={bio || ''} />
                </div>
              </div>
              <div className="columns is-mobile Modal__action" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">

          <button className="button is-primary" type="submit">Save</button>

          <button className="button i is-default is-right" type="button" onClick={closeModal}>Cancel</button>

        </footer>
      </form>
    </div>

  );
};


UpdateProfile.propTypes = {
  handleUpdateUser: PropTypes.func.isRequired,
  readUrl: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default UpdateProfile;
