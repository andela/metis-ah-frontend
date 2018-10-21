import axios from 'axios';

import { STORE_PASSWORD_RESET_SUCCESS_MESSAGE, STORE_PASSWORD_RESET_ERROR_MESSAGE } from '../constants';

const baseUrl = 'http://localhost:8000/api/v1';


export const resetPassword = email => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/auth/reset-password`, { email });

    return dispatch({
      type: STORE_PASSWORD_RESET_SUCCESS_MESSAGE,
      message: response.data.data.message
    });
  } catch (error) {
    return dispatch({
      type: STORE_PASSWORD_RESET_ERROR_MESSAGE,
      message: error.response.data.message
    });
  }
};

export const resetVerifiedUserPassword = (userInfo, token) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/auth/reset-password/${token}`, { userInfo });

    return dispatch({
      type: STORE_PASSWORD_RESET_SUCCESS_MESSAGE,
      message: response.data.data.message
    });
  } catch (error) {
    return dispatch({
      type: STORE_PASSWORD_RESET_ERROR_MESSAGE,
      message: error.response.data.message
    });
  }
};
