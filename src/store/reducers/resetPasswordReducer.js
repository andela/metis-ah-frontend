import {
  VERIFY_USER_EMAIL_SUCCESS,
  VERIFY_USER_EMAIL_STARTED,
  VERIFY_USER_EMAIL_FAILED,
  RESET_PASSWORD_STARTED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS
} from '../constants';

const initialState = {
  successMessage: '',
  errorMessage: '',
  isLoading: false
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_USER_EMAIL_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case VERIFY_USER_EMAIL_SUCCESS:
      return {
        ...state,
        successMessage: action.message,
        isLoading: false
      };
    case VERIFY_USER_EMAIL_FAILED:
      return {
        ...state,
        errorMessage: action.message,
        isLoading: false
      };

    case RESET_PASSWORD_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        successMessage: action.message,
        isLoading: false
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        errorMessage: action.message,
        isLoading: false
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
