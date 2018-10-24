import axios from 'axios';
import constants from '../constants';

const { FETCH_CATEGORIES } = constants;

export const getCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES,
  categories
});

export const getCategories = () => dispatch => axios
  .get('/categories')
  .then((response) => {
    const { data: { data: { categories } } } = response;
    dispatch(getCategoriesSuccess(categories));
  });
