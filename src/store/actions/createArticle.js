import axios from 'axios';
import AutoSave from 'Utils/AutoSave';
import constants from '../constants';

const {
  SAVE_ARTICLE_STARTED,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILED,
  SAVE_TAGS
} = constants;

const saveArticleStarted = () => ({
  type: SAVE_ARTICLE_STARTED
});

const saveArticleFailed = error => ({
  type: SAVE_ARTICLE_FAILED,
  error
});

const saveArticleSuccess = message => ({
  type: SAVE_ARTICLE_SUCCESS,
  message
});

const saveTags = tags => ({
  type: SAVE_TAGS,
  tags
});

export const createArticle = (article, history) => (dispatch) => {
  dispatch(saveArticleStarted());
  return axios.post('/articles', article)
    .then((response) => {
      dispatch(saveArticleSuccess(response.data.data.message));
      history.push(`/articles/${response.data.data.article.id}`);
      AutoSave.clear('articleTitle');
      AutoSave.clear('articleDescription');
      AutoSave.clear('articleBody');
    })
    .catch((error) => {
      dispatch(saveArticleFailed(error.response.data.data.message));
    });
};

export const getTags = () => dispatch => axios.get('/tags')
  .then((response) => {
    dispatch(saveTags(response.data.data.tags));
  })
  .catch(() => null);
