import React from 'react';
import PropTypes from 'prop-types';

const ProfileStats = ({
  articles, ratings, bookmarks, follower, followed
}) => (
  <div className="Profile__stat MarginLeft__20">
    <div className="ProfileStat__item">
      <div className="columns is-mobile">
        <div className="column is-two-fifths">
          <i className="fas fa-users ProfileStat--icon" />
          <span className="ProfileStat--label">Followers:</span>
        </div>
        <div className="column ProfileStat--value">
          {follower.length || 0}
          {' '}
        </div>
      </div>
    </div>
    <div className="ProfileStat__item">
      <div className="columns is-mobile">
        <div className="column is-two-fifths">
          <i className="fas fa-users ProfileStat--icon" />
          <span className="ProfileStat--label">Following:</span>
        </div>
        <div className="column ProfileStat--value">
          {followed.length || 0}
          {' '}
        </div>
      </div>
    </div>
    <div className="ProfileStat__item">
      <div className="columns is-mobile">
        <div className="column is-two-fifths">
          <i className="fas fa-bookmark ProfileStat--icon" />
          <span className="ProfileStat--label">Bookmarks:</span>
        </div>
        <div className="column ProfileStat--value">{bookmarks.length || 0}</div>
      </div>
    </div>
    <div className="ProfileStat__item">
      <div className="columns is-mobile">
        <div className="column is-two-fifths">
          <i className="fas fa-newspaper ProfileStat--icon" />
          <span className="ProfileStat--label">Articles:</span>
        </div>
        <div className="column ProfileStat--value">{articles.length || 0}</div>
      </div>
    </div>
    <div className="ProfileStat__item">
      <div className="columns is-mobile">
        <div className="column is-two-fifths">
          <i className="far fa-star ProfileStat--icon" />
          <span className="ProfileStat--label">Ratings:</span>
        </div>
        <div className="column ProfileStat--value">{ratings.length || 0}</div>
      </div>
    </div>
  </div>

);

ProfileStats.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  ratings: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  follower: PropTypes.arrayOf(PropTypes.object).isRequired,
  followed: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProfileStats;
