import axios from 'axios';
import { FETCH_CATEGORIES } from '../constants';

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
