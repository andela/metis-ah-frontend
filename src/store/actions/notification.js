/* eslint-disable */
import axios from "axios";
import constants from "../constants";

const {
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  GET_NOTIFICATION_LOADING,
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

const getNotificationsStarted = () => ({
  type: GET_NOTIFICATION_STARTED
});

const getNotificationsLoading = isLoading => ({
  type: GET_NOTIFICATION_LOADING,
  payload: isLoading
});

const getNotificationsSuccess = notification => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: notification
});

const getNotificationsError = error => ({
  type: GET_NOTIFICATION_ERROR,
  payload: error
});

const markAsReadStarted = () => ({
  type: MARK_NOTIFICATION_AS_READ_STARTED
});

const markAsReadSuccess = message => ({
  type: MARK_NOTIFICATION_AS_READ_SUCCESS,
  payload: message
});

const markAsReadError = error => ({
  type: MARK_NOTIFICATION_AS_READ_ERROR,
  payload: error
});

const deleteOneNotificationStarted = () => ({
  type: DELETE_ONE_NOTIFICATION_STARTED
});

const deleteOneNotificationSuccess = id => ({
  type: DELETE_ONE_NOTIFICATION_SUCCESS,
  payload: id
});

const deleteOneNotificationError = error => ({
  type: DELETE_ONE_NOTIFICATION_ERROR,
  payload: error
});

const deleteAllNotificationsStarted = () => ({
  type: DELETE_ALL_NOTIFICATIONS_STARTED
});

const deleteAllNotificationsSuccess = message => ({
  type: DELETE_ALL_NOTIFICATIONS_SUCCESS,
  payload: message
});

const deleteAllNotificationsError = error => ({
  type: DELETE_ALL_NOTIFICATIONS_ERROR,
  payload: error
});

export const getAllNotifications = () => dispatch => {
  dispatch(getNotificationsLoading(true));
  return axios
    .get("/notifications/history")
    .then(response => {
      dispatch(getNotificationsLoading(false));
      if (response.data.status === "success") {
        dispatch(getNotificationsSuccess(response.data.data));
      }
    })
    .catch(error => {
      dispatch(getNotificationsLoading(false));
      if (error.response) {
        dispatch(getNotificationsError(error.response.message));
      }
      return dispatch(
        getNotificationsError({ error: "Server unreachable at the moment" })
      );
    });
};

export const getAllUnreadNotifications = () => dispatch => {
  dispatch(getNotificationsStarted());
  return axios
    .get("/notifications")
    .then(response => {
      if (response.data.status === "success") {
        return dispatch(getNotificationsSuccess(response.data.data));
      }
      return response;
    })
    .catch(() => {
      dispatch(
        getNotificationsError({ error: "Server unreachable at the moment" })
      );
    });
};

export const markAsRead = notificationId => dispatch => {
  dispatch(markAsReadStarted());
  return axios
    .put(`/notifications/${notificationId}`)
    .then(response => {
      if (response.data.status === "success") {
        dispatch(markAsReadSuccess(response.data.data));
      }
    })
    .catch(error => {
      if (error.response) {
        dispatch(markAsReadError(error.response.message));
      }
      dispatch(markAsReadError(error));
    });
};

export const markAllAsRead = () => dispatch => {
  dispatch(markAsReadStarted());
  return axios
    .put("/notifications")
    .then(response => {
      if (response.data.status === "success") {
        dispatch(markAsReadSuccess())
      }
    })
    .catch(error => {
      if (error.response) {
        dispatch(markAsReadError(error.response.data.message));
      }
      dispatch(markAsReadError({ error: "Server unreachable at the moment" }));
    });
};

export const deleteOneNotification = notificationId => dispatch => {
  dispatch(deleteOneNotificationStarted());
  return axios
    .delete(`/notifications/${notificationId}`)
    .then(response => {
      if (response.data.status === "success") {
        dispatch(deleteOneNotificationSuccess(notificationId));
      }
    })
    .catch(error => {
      if (error.response) {
        dispatch(deleteOneNotificationError(error.response.message));
      }
      dispatch(
        deleteOneNotificationError({
          error: "Server unreachable at the moment"
        })
      );
    });
};

export const deleteAllNotifications = () => dispatch => {
  dispatch(deleteAllNotificationsStarted());
  return axios
    .delete("/notifications")
    .then(response => {
      if (response.data.status === "success") {
        dispatch(deleteAllNotificationsSuccess(response.data.data));
        getAllNotifications();
      }
    })
    .catch(error => {
      console.log(error);
      if (error.response) {
        dispatch(deleteAllNotificationsError(error.response.message));
      }
      dispatch(deleteAllNotificationsError(error));
    });
};
