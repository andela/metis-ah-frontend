/* eslint-disable */
import axios from 'axios';
import constants from '../constants';

const {
  GET_NOTIFICATION_STARTED,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR
} = constants;

const getNoficationStarted = started => ({
  type: GET_NOTIFICATION_STARTED,
  payload: started
});

const getNoficationSuccess = notification => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: notification
});

const getNotificationError = error => ({
  type: GET_NOTIFICATION_ERROR,
  payload: error
});

export const getNotification = () => dispatch => {
  dispatch(getNotificationStarted(true));
  return axios.get('/')
}

