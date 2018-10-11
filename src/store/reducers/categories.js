const initialState = {
  categories: [
    'HOME',
    'CULTURE',
    'TECH',
    'BUSINESS',
    'SELF',
    'POLITICS',
    'DESIGN',
    'SCIENCE',
    'POPULAR',
    'MORE'
  ],
  selected: 'HOME',
};

const categoriesReducer = (state = initialState, action) => {
  return state;
};

export default categoriesReducer;
