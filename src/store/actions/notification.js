/* eslint-disable */
import axios from 'axios';
import constants from '../constants';
import getNotifications from '../reducers/notification';

const {
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_SUCCESS,
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

const getNotificationSuccess = notification => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: notification
});

const getNotificationError = error => ({
  type: GET_NOTIFICATION_ERROR,
  payload: error
});

const markNotificationAsReadSuccess = () => ({
  type: MARK_NOTIFICATION_AS_READ_SUCCESS
});

const markNotificationAsReadError = error => ({
  type: MARK_NOTIFICATION_AS_READ_ERROR,
  payload: error
});

const markAllNotificationsAsReadSuccess = () => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS
});

const markAllNotificationsAsReadError = error => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ_ERROR,
  payload: error
});

const deleteReadNotificationError = error => ({
  type: DELETE_READ_NOTIFICATIONS_ERROR,
  payload: error
});

const deleteReadNotificationSuccess = () => ({
  type: DELETE_READ_NOTIFICATIONS_SUCCESS
});

const deleteOneNotificationSuccess = () => ({
  type: DELETE_ONE_NOTIFICATION_SUCCESS
})

const deleteOneNotificationError = error => ({
  type: DELETE_ONE_NOTIFICATION_ERROR,
  payload: error
});

const deleteAllNotificationsSuccess = () => ({
  type: DELETE_ALL_NOTIFICATIONS_SUCCESS
});

const deleteAllNotificationsError = error => ({
  type: DELETE_ALL_NOTIFICATIONS_ERROR,
  payload: error
});

export const getAllNotifications = () => dispatch => {
  return axios.get('/notifications/history')
  .then(response => {
    if (response.status === 'success') {
      dispatch(getNotificationSuccess(response.data));
    }
    return response;
  })
  .catch(() => {
    return dispatch(getNotificationError('Server unreachable at the moment'));
  })
}

export const getAllUnreadNotifications = () => dispatch => {
  return axios.get('/notifications')
  .then(response => {
    if (response.data.status === 'success') {
      return dispatch(getNotificationSuccess(response.data.data))
    }
    return response;
  })
  .catch(() => {
    dispatch(getNotificationError({error: 'Server unreachable at the moment'}))
  })
}

export const getOneNotification = (notificationId) => dispatch => {
  return axios.get(`notifications/${notificationId}`)
  .then(() => {
    return dispatch(getNotificationSuccess())
  })
  .catch(() => {
    return dispatch(getNotificationError({error: 'Server unreachable at the moment'}));
  })
}

export const markNotificationAsRead = (notificationId) => dispatch => {
  return axios.put(`/notifications/${notificationId}`)
  .then(() => {
    dispatch(markNotificationAsReadSuccess());
    return getNotifications();
  })
  .catch(() => {
    return dispatch(markNotificationAsReadError({error: 'Server is unreachable at the moment'}))
  })
}

export const markAllAsRead = () => dispatch => {
  return axios.put('/notifications')
  .then(() => {
     return dispatch(markAllNotificationsAsReadSuccess());
  })
  .catch(() => {
    dispatch(markAllNotificationsAsReadError({error: 'Server is unreachable at the moment'}))
  })
};

export const deleteReadNotifications = () => dispatch => {
  return axios.delete('/notifications/read')
  .then(() => {
    dispatch(deleteReadNotificationSuccess());
    return getNotifications();
  })
  .catch(() => {
    return dispatch(deleteReadNotificationError({error: 'Server is unreachable at the moment '}))
  })
};

export const deleteOneNotification = notificationId => dispatch => {
  return axios.delete(`notifications/${notificationId}`)
  .then(() => {
    dispatch(deleteOneNotificationSuccess());
    return getNotifications();
  })
  .catch(() => {
    dispatch(deleteOneNotificationError({error: 'Server unreachable at the momement'}))
  });
};

export const deleteAllNotifications = () => dispatch => {
  return axios.delete('/notifications')
  .then(() => {
    dispatch(deleteAllNotificationsSuccess());
    return getNotifications();
  })
  .catch(() => {
    return deleteAllNotificationsError({error: 'Server unreachable at the moment'})
  })  
}