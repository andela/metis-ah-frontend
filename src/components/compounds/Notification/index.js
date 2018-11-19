import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FaBell } from "react-icons/fa";
import PropTypes from "prop-types";
import Pusher from "pusher-js";
import toastr from "toastr";
import { PUSHER_APP_KEY, PUSHER_APP_CLUSTER } from "../../../../config.json";
import {
  getAllNotifications,
  getAllUnreadNotifications,
  markAsRead,
  markAllAsRead,
  deleteOneNotification,
  deleteAllNotifications
} from "../../../store/actions/notification";
import rubbishBin from "../../../static/images/rubbishBin.png";
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
    const { fetchAllNotifications, userId } = this.props;
    const channel = pusher.subscribe(`notify-${userId}`);
    channel.bind(`channel-${userId}`, data => {
      fetchAllNotifications();
      toastr.success(data.message);
    });
    fetchAllNotifications();
  }

  toggleVisibility = () => {
    this.setState(prevState => ({
      notificationVisible: !prevState.notificationVisible
    }));
  };

  static getDerivedStateFromProps(props, state) {
    if (props.count !== state.count) {
      return { count: props.count };
    }
    return null;
  }

  fetchAllNotifications = () => {
    const { fetchAllNotifications } = this.props;
    fetchAllNotifications();
  };

  markAsRead = async event => {
    const {
      markNotificationAsRead,
      fetchAllNotifications,
      history
    } = this.props;
    const { id, notifiableid, action, isread } = event.target.dataset;

    if (action === "user") {
      history.push(`/users/${notifiableid}`);
    } else if (action === "article") {
      history.push(`/articles/${notifiableid}/view`);
    }
    await markNotificationAsRead(id);
    fetchAllNotifications();
  };

  markAllNotificationsAsRead = async () => {
    const { markAllNotificationsAsRead, fetchAllNotifications } = this.props;
    await markAllNotificationsAsRead();
    fetchAllNotifications();
  };

  deleteNotification = async event => {
    this.setState({
      notificationVisible: false
    });
    const { deleteNotification, fetchAllNotifications } = this.props;
    const { id } = event.target.dataset;
    await deleteNotification(id);
    
    setTimeout(() => {
      fetchAllNotifications(); 
    }, 2000); 
    
  };

  deleteAllNotifications = () => {
    const { deleteNotifications } = this.props;
    deleteNotifications();
  };

  render() {
    const { count, notifications } = this.props;
    const { notificationVisible } = this.state;

    const sortedNotifications = notifications => {
      const unReadNotifications = notifications.filter(notification => {
        return notification.isRead === false;
      });
      const readNotifications = notifications.filter(notification => {
        return notification.isRead === true;
      });
      return [...unReadNotifications, ...readNotifications];
    };

    const newNotifications = sortedNotifications(notifications);

    return (
      <Fragment>
        <div className="notification-group" onClick={this.toggleVisibility}>
          {/* eslint-disable-next-line */}
          <span className="notification-icon" role="button">
            <FaBell />
          </span>
          {count === 0 ? null : (
            <span className="count">
              <span>{count}</span>
            </span>
          )}
        </div>
        <div className={notificationVisible ? "notifications" : ""}>
          {notificationVisible ? (
            <div>
              {newNotifications.length === 0 ? (
                <h3 className="notif-heading-unstyled">No notifications</h3>
              ) : (
                <div className="notification-header">
                  <h3 className="notif-heading">Notifications</h3>
                  <div className="notif-actions">
                    <span onClick={this.markAllNotificationsAsRead}>
                      Mark All as read
                    </span>
                    <span onClick={this.deleteAllNotifications}>Clear All</span>
                  </div>
                </div>
              )}

              {newNotifications.map(notification => (
                <div key={notification.id}>
                  <div className="notification-item">
                    <div className="notification-item__header">
                      <p className="date">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                      <div className="mark_delete">
                        <img
                          className="delete_btn"
                          onClick={this.deleteNotification}
                          data-id={notification.id}
                          src={rubbishBin}
                          alt="delete button"
                        />
                      </div>
                    </div>
                    <p
                      className={
                        notification.isRead ? "action" : "action-unread"
                      }
                      onClick={this.markAsRead}
                      data-notifiableid={notification.notifiableId}
                      data-id={notification.id}
                      data-action={notification.notifiable}
                      data-isread={notification.isRead}
                    >
                      {notification.action}
                    </p>
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
  const { notifications, count, error, loading } = notification;
  return {
    notifications,
    count,
    error,
    loading,
    userId: authUser.user.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllUnreadNotifications() {
    dispatch(getAllUnreadNotifications());
  },
  fetchAllNotifications() {
    dispatch(getAllNotifications());
  },
  markNotificationAsRead(id) {
    dispatch(markAsRead(id));
  },
  markAllNotificationsAsRead() {
    dispatch(markAllAsRead());
  },
  deleteNotification(id) {
    dispatch(deleteOneNotification(id));
  },
  deleteNotifications() {
    dispatch(deleteAllNotifications());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notification)
);
