import { STORE_PASSWORD_RESET_SUCCESS_MESSAGE, STORE_PASSWORD_RESET_ERROR_MESSAGE } from '../constants';

const initialState = {
  successMessage: '',
  errorMessage: ''
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PASSWORD_RESET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.message
      };
    case STORE_PASSWORD_RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
