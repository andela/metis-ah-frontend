import constants from '../constants';

const {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} = constants;

const initialState = {
  loading: false,
  result: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        loading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case SEARCH_ERROR:
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
