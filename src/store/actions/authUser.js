import axios from 'axios';
import constants from '../constants';
import checkError from '../../util/helpers/error';

const {
  SET_CURRENT_USER,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_STARTED,
  MODAL_SHOW,
  MODAL_CLOSE,
  SIGNUP_SUCCESS,
  RESET_CURRENT_USER,
  TOGGLE_USER_MENU,
  LOGOUT,
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

export const resetCurrentUser = user => ({
  type: RESET_CURRENT_USER,
  payload: user,
});

export const toggleMenu = () => ({
  type: TOGGLE_USER_MENU,
});

export const logoutUser = (history) => {
  localStorage.removeItem('user');
  history.push('/');

  return {
    type: LOGOUT,
  };
};

export const createUser = (postData, history) => (dispatch) => {
  dispatch(userStarted());
  return axios.post('/users/auth/signup', {
    ...postData,
    verifyURL: 'https://metis-ah-frontend-staging.herokuapp.com',
  })
    .then((response) => {
      toastr.success(response.data.data.message);
      dispatch(signupSuccessful(response.data));
      dispatch(closeModal());
      history.push('/SuccessSignup');
    })
    .catch((error) => {
      checkError(error);
      dispatch(userFail());
      console.log('failed');
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

export const socialAuth = (media, code, history) => (dispatch) => {
  switch (media) {
    case ('twitter'):
      if (code.oauth_token && code.oauth_verifier) {
        return axios.get(`/users/auth/${media}/redirect?oauth_token=${code.oauth_token}&oauth_verifier=${code.oauth_verifier}`)
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.data));
            dispatch(setCurrentUser(response.data));
            history.push('/');
          });
      }
      return;
    default:
      if (code.code) {
        return axios.get(`/users/auth/${media}/redirect?code=${code.code}`)
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.data));
            dispatch(setCurrentUser(response.data));
            history.push('/');
          });
      }
  }
};
export const verifyAccount = verifyToken => (dispatch) => {
  return axios.put(`/users/verify/${verifyToken}`)
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.data));
      toastr.success('Your account has been verified');
      dispatch(setCurrentUser(response.data));
    })
    .catch(() => {
      toastr.error('Could not verify you account at this time');
    });
};
