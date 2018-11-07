import constants from '../constants';
const {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} = constants;

const initialState = {
  loading: true,
  profile: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return initialState;
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case UPDATE_PROFILE:
      return initialState;
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
        loading: false
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
