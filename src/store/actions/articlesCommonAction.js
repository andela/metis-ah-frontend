const articlesCommonAction = {
  success: (type, payload) => ({ type, payload }),
  failure: type => ({ type, payload: 'Unable to fetch data' })
};

export default articlesCommonAction;
