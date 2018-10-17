import axios from '../../util/axiosInstance';
import {
  SET_HERO_CONTENT, FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAIL
} from '../constants';

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

export const getArticle = category => (dispatch) => {
  dispatch(getArticleStarted());
  axios
    .get(`/categories/${category}`)
    .then((response) => {
      const { data } = response.data;
      dispatch(getArticleSuccess(data.articles));
      dispatch(setHeroContent({
        ...data.category,
        buttonIsVisible: false,
        className: 'article-hero'
}));
    })
    .catch((error) => {
      const { data: { data: message } } = error.response;
      dispatch(getArticleFail(message));
      console.log(error.response);
    });
};
