import axios from 'axios';
import actionTypes from '../constants';
import articlesCommonAction from './articlesCommonAction';

const { success, failure } = articlesCommonAction;
const url = 'https://metis-ah-staging.herokuapp.com/api/v1/articles/featured';
const { UPDATE_FEATURED_SUCCESS, UPDATE_FEATURED_FAILURE } = actionTypes;

const updateFeaturedArticles = () => dispatch => axios
  .get(url)
  .then(res => dispatch(success(UPDATE_FEATURED_SUCCESS, res.data.data.featuredArticles)))
  .catch(() => dispatch(failure(UPDATE_FEATURED_FAILURE)));

export default updateFeaturedArticles;
