import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser, getUser } from '../../../store/actions/users';
import ProfileStats from '../ProfileStats';
import './index.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    borderRadius: '4px',
    padding: '0'
  }
};


Modal.defaultStyles.overlay.backgroundColor = 'rgba(17, 17, 17, 0.74)';
Modal.defaultStyles.overlay.zIndex = '40';
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

class ProfileHero extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modlIsOpen
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
   fetchUserProfile(userId);
   e.target.reset();
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
       : 'Name: not specified'}`;
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
                   <Modal
                     isOpen={modalIsOpen}
                     onAfterOpen={this.afterOpenModal}
                     onRequestClose={this.closeModal}
                     style={customStyles}
                     contentLabel="Example Modal"
                   >
                     <div className="CloseModal">
                       <button type="button" onClick={this.closeModal}><i className="fas fa-times" /></button>
                       <h1 className="Modal__title">
                          Update Profile
                       </h1>
                     </div>
                     <hr className="line" />
                     <div className="container centerlized">
                       <form className="UpdateProfile" onSubmit={this.handleUpdateUser}>
                         <div className="field">
                           <div className="Upload__image">
                             <img src={image} alt="update profile" id="js__picturepreview" />
                             <div className="Upload__overlay">
                               <i className="fas fa-camera fa-2x" />
                             </div>
                             <input type="file" name="image" id="fileUpload" onChange={this.readUrl} />
                           </div>
                         </div>
                         <div className="columns is-mobile">
                           <div className="column">
                             <div className="field">
                               <div className="control">
                                 <input className="input" type="text" placeholder="first name" name="firstname" onChange={this.han} defaultValue={firstname || ''} />
                               </div>
                             </div>
                           </div>
                           <div className="column">
                             <div className="field">
                               <div className="control">
                                 <input className="input" type="text" placeholder="lastname" name="lastname" onChange={this.han} defaultValue={lastname || ''} />
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="columns is-mobile">
                           <div className="column">
                             <div className="field">
                               <div className="control">
                                 <input className="input" type="text" placeholder="username" name="username" onChange={this.han} defaultValue={username || ''} />
                               </div>
                             </div>
                           </div>
                           <div className="column">
                             <div className="field">
                               <div className="control">
                                 <input className="input" type="email address" placeholder="email" name="email" onChange={this.han} defaultValue={email || ''} />
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
                               onChange={this.han}
                               defaultValue={
                                interests
                                  ? interests.join(',')
                                  : ''
                              }
                             />
                           </div>
                         </div>
                         <div className="field">
                           <div className="control">
                             <textarea className="textarea" type="text" placeholder="Bio" row="10" name="bio" onChange={this.han} defaultValue={bio || ''} />
                           </div>
                         </div>
                         <div className="columns is-mobile Modal__action">
                           <div className="column">
                             <button className="button is-rounded is-primary" type="submit">Save</button>
                           </div>
                           <div className="column is-right">
                             <button className="button is-rounded is-default is-right" type="button" onClick={this.closeModal}>Cancel</button>
                           </div>
                         </div>
                       </form>
                     </div>
                   </Modal>
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
