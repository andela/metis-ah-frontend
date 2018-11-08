import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ProfileHero from 'Components/compounds/ProfileHero';
import ProfileBio from 'Components/compounds/ProfileBio';
import ProfileInterest from 'Components/compounds/ProfileInterest';
import ArticleContainer from 'Components/compounds/ProfileArticleContainer';
import { getUser } from '../../../store/actions/users';
import './index.scss';

class ProfileContainer extends Component {
  componentDidMount() {
    const { userId, getUserInfo } = this.props;
    getUserInfo(userId);
  }

  render() {
    const { loading, id } = this.props;
    return (
      <div className="container ProfileContainer">
        {
          !(loading) && id
            ? (
              <React.Fragment>
                <ProfileHero {...this.props} />
                <ProfileBio {...this.props} />
                <ProfileInterest {...this.props} />
                <ArticleContainer {...this.props} />
              </React.Fragment>
            )
            : (
              <div className="loading">
                <Loader
                  type="Triangle"
                  color="#4dd6a5"
                  height="100"
                  width="100"
                />
              </div>
            )
        }
      </div>
    );
  }
}


ProfileContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  id: PropTypes.number,
};

ProfileContainer.defaultProps = {
  id: 0
};

const mapDispatchToProps = dispatch => ({
  getUserInfo: userId => dispatch(getUser(userId))
});

const mapStateToProps = ({ users }) => ({
  ...users
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
