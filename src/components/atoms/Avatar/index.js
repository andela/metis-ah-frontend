import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserMenu from 'Components/compounds/UserMenu';
import { toggleMenu } from '../../../store/actions/authUser';
import avatarImage from '../../../static/images/placeholder.png';

import './style.scss';

class Avatar extends React.Component {
  state = {
    isDropDownVisible: false
  }

  toggleDropdown = () => {
    this.setState({
      isDropDownVisible: !this.state.isDropDownVisible
    });
  }

  render() {
    const {
      className, image, updatedImage
    } = this.props;

    return (
      <div id="user-profile-menu">
        <button type="button" className={className} onClick={this.toggleDropdown}>
          <img className="image" alt="avatar" src={updatedImage || image} />
          <i className="fas fa-chevron-down" />
        </button>
        {this.state.isDropDownVisible ? <UserMenu /> : null}
      </div>
    );
  }
}

Avatar.defaultProps = {
  updatedImage: avatarImage,
};

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  updatedImage: PropTypes.string,
};

Avatar.defaultProps = {
  className: 'atom__avatar',
};

const mapStateToProps = state => ({
  image: state.authUser.user.image || avatarImage,
  updatedImage: (state.user !== undefined) ? state.user.image : null
});

export default connect(mapStateToProps)(Avatar);
