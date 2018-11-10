import constants from '../constants';

const {
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_ERROR,
  MARK_NOTIFICATION_AS_READ_STARTED,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_ERROR,
  MARK_ALL_NOTIFICATIONS_AS_READ_STARTED,
  MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS,
  MARK_ALL_NOTIFICATIONS_AS_READ_ERROR,
  DELETE_READ_NOTIFICATIONS_STARTED,
  DELETE_READ_NOTIFICATIONS_ERROR,
  DELETE_READ_NOTIFICATIONS_SUCCESS,
  DELETE_ONE_NOTIFICATION_STARTED,
  DELETE_ONE_NOTIFICATION_SUCCESS,
  DELETE_ONE_NOTIFICATION_ERROR,
  DELETE_ALL_NOTIFICATIONS_STARTED,
  DELETE_ALL_NOTIFICATIONS_SUCCESS,
  DELETE_ALL_NOTIFICATIONS_ERROR
} = constants;

const initialState = {
  error: '',
  count: 0,
  notifications: [],
};

const getNotifications = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: action.payload.notifications,
        count: action.payload.count
      };
    case GET_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export const deleteNotification = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ONE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        message: 'Notification deleted successfully'
      };
    case DELETE_ONE_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default getNotifications;
