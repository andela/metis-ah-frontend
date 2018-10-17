import axios from 'axios';
import constants from '../constants';
import checkError from '../../util/helpers/error';
import axiosInstance from '../../util/axiosInstance';

const {
  SET_CURRENT_USER, USER_SIGNUP_FAILED,
  USER_SIGNUP_STARTED,
  MODAL_SHOW,
  MODAL_CLOSE,
  SIGNUP_SUCCESS,
} = constants;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user.data
});

const signupSuccessful = user => ({
  type: SIGNUP_SUCCESS,
  payload: user.data
});

export const userFail = () => ({
  type: USER_SIGNUP_FAILED
});

export const closeModal = () => ({
  type: MODAL_CLOSE
});

export const showModal = () => ({
  type: MODAL_SHOW
});

export const userStarted = () => ({
  type: USER_SIGNUP_STARTED
});

export const createUser = (postData, history) => (dispatch) => {
  dispatch(userStarted());
  return axios.post('/users/auth/signup', postData)
    .then((response) => {
      toastr.success(response.data.data.message);
      dispatch(signupSuccessful(response.data));
      dispatch(closeModal());
      history.push('/SuccessSignup');
    })
    .catch((error) => {
      checkError(error);
      dispatch(userFail());
    });
};

export const loginUser = postData => (dispatch) => {
  dispatch(userStarted());
  return axios.post('/users/auth/login', postData)
    .then((response) => {
      const user = JSON.stringify(response.data.data);
      toastr.success(response.data.data.message);
      dispatch(setCurrentUser(response.data));
      localStorage.setItem('user', `${user}`);
      dispatch(closeModal());
    })
    .catch((error) => {
      checkError(error);
      dispatch(userFail());
    });
};

export const socialAuth = (media, code) => (dispatch) => {
  switch (media) {
    case ('twitter'):
      if (code.oauth_token && code.oauth_verifier) {
        return axiosInstance.get(`users/auth/${media}/redirect?oauth_token=${code.oauth_token}&oauth_verifier=${code.oauth_verifier}`)
          .then((response) => {
            console.log(response);
            dispatch(setCurrentUser(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return;
    default:
      console.log(media);
      if (code.code) {
        return axiosInstance.get(`users/auth/${media}/redirect?code=${code.code}`)
          .then((response) => {
            console.log(response);
            dispatch(setCurrentUser(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
  }
};
