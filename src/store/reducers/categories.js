import { FETCH_CATEGORIES } from 'Constants';

const initialState = {
  categories: [],
  selected: 'HOME',
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
