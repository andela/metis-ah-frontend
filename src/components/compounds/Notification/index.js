import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FaBell } from "react-icons/fa";
import PropTypes from "prop-types";
import Pusher from "pusher-js";
import toastr from "toastr";
import { PUSHER_APP_KEY, PUSHER_APP_CLUSTER } from "../../../../config.json";
import {
  getAllUnreadNotifications,
  deleteOneNotification,
  markNotificationAsRead
} from "../../../store/actions/notification";
import "./style.scss";

const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_APP_CLUSTER,
  encrypted: true
});

class Notification extends Component {
  state = {
    notificationVisible: false
  };

  componentDidMount() {
    // document.addEventListener("click", this.handleFocusOut);
    const { fetchAllNotifications, userId } = this.props;
    const channel = pusher.subscribe(`notify-${userId}`);
    channel.bind(`channel-${userId}`, data => {
      fetchAllNotifications();
      toastr.success(data.message);
    });
    fetchAllNotifications();
  }

  handleFocusOut = event => {

      this.setState({
        notificationVisible: false
      });
    
  };

  toggleVisibility = event => {
    this.setState(prevState => ({
      notificationVisible: !prevState.notificationVisible
    }));
  };

  markNotificationAsRead = event => {
    this.setState({
      notificationVisible: false
    });
    const { markAsRead, history } = this.props;
    const { id, action } = event.target.dataset;

    if (action === "user") {
      markAsRead(id);
      history.push(`/users/${id}`);
    }
    if (action === "article") {
      markAsRead(id);
      history.push(`/articles/${id}/view`);
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  render() {
    const { count, notifications } = this.props;
    const { notificationVisible } = this.state;

    return (
      <Fragment>
        <div className="notification-group">
          {/* eslint-disable-next-line */}
          <span
            className="notification-icon"
            onClick={this.toggleVisibility}
            role="button"
          >
            <FaBell />
          </span>
          {count === 0 ? null : (
            <span className="count">
              <span>{count}</span>
            </span>
          )}
        </div>
        <div
          className={notificationVisible ? "notifications" : ""}
          ref={this.setWrapperRef}
        >
          {notificationVisible ? (
            <div>
              {notifications.length === 0 ? (
                <h3 className="notif-heading-unstyled">No notifications</h3>
              ) : (
                <h3 className="notif-heading">Notifications</h3>
              )}

              {notifications.map(notification => (
                <div key="notification.id">
                  <div className="notification-item">
                    <p className="date">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </p>
                    {notification.notifiable === "user" ? (
                      <p
                        className="action"
                        onClick={this.markNotificationAsRead}
                        data-id={notification.notifiableId}
                        data-action={notification.notifiable}
                      >
                        {notification.action}
                      </p>
                    ) : (
                      <p
                        className="action"
                        onClick={this.markNotificationAsRead}
                        data-id={notification.notifiableId}
                        data-action={notification.notifiable}
                      >
                        {notification.action}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

Notification.propTypes = {
  count: PropTypes.number.isRequired,
  fetchAllNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
  const { notification, authUser } = state;
  const { notifications, count, error } = notification;
  return {
    notifications,
    count,
    error,
    userId: authUser.user.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllNotifications() {
    dispatch(getAllUnreadNotifications());
  },
  deleteNotification(id) {
    dispatch(deleteOneNotification(id));
  },
  markAsRead(id) {
    dispatch(markNotificationAsRead(id));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notification)
);
