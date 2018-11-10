import React, { Component, Fragment } from 'react';
import { connect } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { getAllNotifications, deleteOneNotification } from '../../../store/actions/notification';
import Pusher from 'pusher';
import './style.scss';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

class Notification extends Component {
  state = {
    isVisible: false
  }

  componentDidMount() {
    const { fetchAllNotifications } = this.props;
    fetchAllNotifications();
  }

  render() {
    const { count } = this.props;
    return (
      <Fragment>
        <div>
          <span className="notification-icon">{ <FaBell /> }</span>
          <span className="count">{count}</span>
        </div>
      </Fragment>
    );
  }
}

Notification.propTypes = {
  count: PropTypes.number.isRequired,
  fetchAllNotifications: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { notifications, count, error } = state;
  return {
    notifications,
    count,
    error
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllNotifications() {
    dispatch(getAllNotifications())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
