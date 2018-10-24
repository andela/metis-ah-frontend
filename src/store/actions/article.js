import axios from 'axios';
import constants from 'Constants';

const {
  SET_HERO_CONTENT, FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAIL
} = constants;

export const setHeroContent = category => ({
  type: SET_HERO_CONTENT,
  heroContent: category,
});

export const getArticleStarted = () => ({
  type: FETCH_ARTICLE_START
});

export const getArticleSuccess = articles => ({
  type: FETCH_ARTICLE_SUCCESS,
  articles
});

export const getArticleFail = error => ({
  type: FETCH_ARTICLE_FAIL,
  error
});

export const getArticle = (categoryId, heroContent) => (dispatch) => {
  dispatch(getArticleStarted());
  dispatch(setHeroContent({
    ...heroContent,
    buttonIsVisible: false,
    className: 'article-hero'
  }));
  return axios
    .get(`/categories/${categoryId}`)
    .then((response) => {
      const { data } = response.data;
      dispatch(getArticleSuccess(data.articles));
      if (!heroContent) {
        dispatch(setHeroContent({
          ...data.category,
          buttonIsVisible: false,
          className: 'article-hero'
        }));
      }
    })
    .catch((error) => {
      const { data: { data: message } } = error.response;
      dispatch(getArticleFail(message));
    });
};
