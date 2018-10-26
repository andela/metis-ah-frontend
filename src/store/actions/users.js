import axios from 'axios';
import alert from '../../util/helpers/alert';
import constants from '../constants';

const {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES,
  GET_ARTICLES_ERROR
} = constants;


const showLoading = (dispatch, actionType) => dispatch({
  type: actionType
});

export const fetchArticles = id => (dispatch) => {
  dispatch({
    type: GET_ARTICLES
  });
  axios.get(`https://metis-ah-staging.herokuapp.com/api/v1/authors/articles/${id}`, { headers: { Authorization: localStorage.getItem('userToken') } })
    .then(res => dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data.data.articles,
    }))
    .catch((err) => {
      showLoading(dispatch, GET_ARTICLES);
      dispatch({ type: GET_ARTICLES_ERROR, payload: err.response.data.data.message });
      window.location.href = '/';
    });
};

export const getUser = id => (dispatch) => {
  showLoading(dispatch, GET_PROFILE);
  axios.get(`https://metis-ah-staging.herokuapp.com/api/v1/users/${id}`, { headers: { Authorization: localStorage.getItem('userToken') } })
    .then((res) => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data.data.user,
      });
    })
    .catch((err) => {
      const failed = (err.response === undefined) ? 'Fail to process your request' : err.response.data.data.message;
      const error = (err.response === undefined) ? 'An error occur please try again' : err.response.data.data.messagese;
      showLoading(dispatch, GET_PROFILE);
      dispatch({ type: GET_PROFILE_ERROR, payload: error || failed });
      alert.error((error) || failed);
      window.location.href = '/';
    });
};

export const updateUser = formData => (dispatch) => {
  showLoading(dispatch, UPDATE_PROFILE);
  axios.put('https://metis-ah-staging.herokuapp.com/api/v1/users/update', formData, { headers: { Authorization: localStorage.getItem('userToken'), 'Content-Type': 'multipart/form-data', } })
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data.data
      });

      return alert.success(`${res.data.data.message}`);
    })
    .catch((err) => {
      showLoading(dispatch, UPDATE_PROFILE);
      const failed = (err.response === undefined) ? 'Fail to process your request' : err.response.data.data.message;
      const error = (err.response === undefined) ? 'An error occur please try again' : err.response.data.data.messagese;
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: error || failed
      });
      alert.error((error) || failed);
    });
};
