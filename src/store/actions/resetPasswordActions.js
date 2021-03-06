import axios from 'axios';
import Alert from 'Utils/helpers/alert';
import constants from '../constants';

const {
  VERIFY_USER_EMAIL_SUCCESS,
  VERIFY_USER_EMAIL_STARTED,
  VERIFY_USER_EMAIL_FAILED,
  RESET_PASSWORD_STARTED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS
} = constants;

const clientUrl = 'https://metis-ah-frontend.herokuapp.com';


export const resetPassword = email => async (dispatch) => {
  dispatch({
    type: VERIFY_USER_EMAIL_STARTED
  });

  try {
    const response = await axios.post('/users/auth/reset-password', { email, callbackUrl: clientUrl });

    Alert.success(`${response.data.data.message}`);
    return dispatch({
      type: VERIFY_USER_EMAIL_SUCCESS,
      message: response.data.data.message
    });
  } catch (error) {
    Alert.error(error.response.data.message);
    return dispatch({
      type: VERIFY_USER_EMAIL_FAILED,
      message: error.response.data.message
    });
  }
};

export const resetVerifiedUserPassword = (newPassword, token, history) => async (dispatch) => {
  dispatch({
    type: RESET_PASSWORD_STARTED
  });

  try {
    const response = await axios.put(`/users/auth/reset-password/${token}`, { password: newPassword, callbackUrl: clientUrl });

    Alert.success(response.data.data.message);
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      message: response.data.data.message
    });
    return history.push('/');
  } catch (error) {
    Alert.error(error.response.data.data.message);
    return dispatch({
      type: RESET_PASSWORD_FAILED,
      message: error.response.data.data.message
    });
  }
};
