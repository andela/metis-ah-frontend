import axios from 'axios';
import alert from '../../util/helpers/alert';
import constants from '../constants';
import { resetCurrentUser } from './authUser';

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
  axios.get(`https://metis-ah-staging.herokuapp.com/api/v1/authors/articles/${id}`)
    .then(res => dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data.data.articles,
    }))
    .catch((err) => {
      showLoading(dispatch, GET_ARTICLES);
      dispatch({ type: GET_ARTICLES_ERROR, payload: err.response.data.data.message });
    });
};

export const getUser = id => (dispatch) => {
  showLoading(dispatch, GET_PROFILE);
  axios.get(`https://metis-ah-staging.herokuapp.com/api/v1/users/${id}`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data.data.user,
      });
    })
    .catch((err) => {
      const error = (err.response === undefined)
        ? err.response.data.data.messagese
        : "You're not signed in please login";
      showLoading(dispatch, GET_PROFILE);
      dispatch({ type: GET_PROFILE_ERROR, payload: error });
    });
};

export const updateUser = (formData, history) => (dispatch) => {
  showLoading(dispatch, UPDATE_PROFILE);
  axios.put('https://metis-ah-staging.herokuapp.com/api/v1/users/update', formData)
    .then((res) => {
      dispatch(resetCurrentUser(res.data.data.user));
      localStorage.setItem('user', JSON.stringify(res.data.data.user));
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data.data
      });

      return alert.success(`${res.data.data.message}`);
    })
    .catch((err) => {
      showLoading(dispatch, UPDATE_PROFILE);
      if (err.response.status === 401) {
        dispatch({
          type: UPDATE_PROFILE_ERROR,
          payload: "You're not signed in, please login"
        });
        alert.success("You're not signed in, Please login");
        return history.push('/');
      }
    });
};
