import constants from "../constants";

const {
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  MARK_NOTIFICATION_AS_READ_STARTED,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_ERROR,
  DELETE_ONE_NOTIFICATION_STARTED,
  DELETE_ONE_NOTIFICATION_SUCCESS,
  DELETE_ONE_NOTIFICATION_ERROR,
  DELETE_ALL_NOTIFICATIONS_STARTED,
  DELETE_ALL_NOTIFICATIONS_SUCCESS,
  DELETE_ALL_NOTIFICATIONS_ERROR
} = constants;

const initialState = {
  error: "",
  count: 0,
  notifications: []
};

const unreadNotificationCount = notifications => {
  const unReadNotificationCount = notifications.filter(
    notification => notification.isRead === false
  );
  return unReadNotificationCount.length;
};

const filterNotification = (notifications, notificationId) => {
  const updatedNotifications = notifications.filter(
    notification => notification.id !== Number(notificationId)
  );
  return updatedNotifications;
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION_STARTED:
      return {
        ...state
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: action.payload.notifications,
        count: unreadNotificationCount(action.payload.notifications)
      };
    case GET_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case MARK_NOTIFICATION_AS_READ_STARTED:
      return {
        ...state
      };
    case MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
        count: unreadNotificationCount(action.payload.notifications)
      };
    case MARK_NOTIFICATION_AS_READ_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_ONE_NOTIFICATION_STARTED: {
      return {
        ...state,
      };
    }
    case DELETE_ONE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_ONE_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_ALL_NOTIFICATIONS_STARTED:
      return {
        ...state
      };
    case DELETE_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        count: 0,
        notifications: []
      };
    case DELETE_ALL_NOTIFICATIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default notifications;