const mockReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MOCK':
      return state;
    default:
      return state;
  }
};

export default mockReducer;
