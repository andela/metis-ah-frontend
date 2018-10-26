import axios from 'axios';
import actionTypes from '../constants';

const url = (query = 'keyword', value) => `http://metis-ah-staging.herokuapp.com/api/v1/articles/search?${query}=${value}`;
const {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} = actionTypes;

const showLoading = (dispatch, actionType) => dispatch({
  type: actionType
});
const searchResult = (query, value) => (dispatch) => {
  showLoading(dispatch, SEARCH);
  axios.get(url(query, value), { headers: { Authorization: localStorage.getItem('userToken') } })
    .then(res => dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data,
    }))
    .catch((err) => {
      showLoading(dispatch, SEARCH);
      dispatch({ type: SEARCH_ERROR, payload: err.response.data.data.message });
    });
};
export default searchResult;
