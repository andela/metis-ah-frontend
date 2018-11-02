import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserMenu from 'Components/compounds/UserMenu';
import { toggleMenu } from '../../../store/actions/authUser';
import avatarImage from '../../../static/images/placeholder.png';

import './style.scss';

const Avatar = (props) => {
  const {
    toggle, className, image, updatedImage
  } = props;
  return (
    <div>
      <button type="button" className={className} onClick={e => toggle(e)}>
        <img className="image" alt="avatar" src={updatedImage || image} />
      </button>
      <UserMenu />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  updatedImage: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: 'atom__avatar',
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu()),
});

const mapStateToProps = state => ({
  image: state.authUser.user.image || avatarImage,
  updatedImage: (state.user !== undefined) ? state.user.image : null
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
