import rateArticle from '../../../src/store/reducers/rateArticle';

const initialState = {
  error: '',
  userRating: 0,
  averageRating: 0,
};

const rateArticleSuccess = {
  error: '',
  userRating: 1,
  averageRating: 1,
  userRatingError: '',
};

const rateArticleError = {
  error: 'Server unreachable at the moment',
  userRating: 0,
  averageRating: 0,
  userRatingError: 'Server unreachable at the moment',
};

describe('Report Article Reducer', () => {
  it('should set the initial state', () => {
    const state = rateArticle(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should update the state', () => {
    const action = {
      type: 'RATE_ARTICLE_SUCCESS',
      userRating: 1,
      averageRating: 1,
    };

    const state = rateArticle(undefined, action);
    expect(state).toEqual(rateArticleSuccess);
  });

  it('should hanle rate article error', () => {
    const action = {
      type: 'RATE_ARTICLE_FAILURE',
      userRating: 0,
      averageRating: 0,
      error: 'Server unreachable at the moment',
      userRatingError: '',
    };

    const state = rateArticle(undefined, action);
    expect(state).toEqual(rateArticleError);
  });
});
