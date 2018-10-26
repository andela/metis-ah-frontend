import constants from 'Constants';

const { FETCH_CATEGORIES } = constants;

const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
