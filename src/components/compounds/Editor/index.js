import React from 'react';
import PropTypes from 'prop-types';
import ArticleEditor from 'Components/atoms/ArticleEditor';
import './style.scss';

const Editor = (props) => {
  const {
    articleDescription,
    articleTitle,
    articleTitleHandler,
    articleBody,
    articleBodyHandler,
    articleDescriptionHandler
  } = props;
  return (
    <div className="Inputs">
      <input type="text" value={articleTitle} onChange={articleTitleHandler} className="ArticleTitle" placeholder="Title" />
      <textarea type="text" maxLength="150" value={articleDescription} onChange={articleDescriptionHandler} className="ArticleDesc" placeholder="Description" />
      <ArticleEditor
        articleData={articleBody}
        articleOnChangeHandler={articleBodyHandler}
      />
    </div>
  );
};

Editor.propTypes = {
  articleBody: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  articleDescription: PropTypes.string.isRequired,
  articleBodyHandler: PropTypes.func.isRequired,
  articleTitleHandler: PropTypes.func.isRequired,
  articleDescriptionHandler: PropTypes.func.isRequired
};

export default Editor;
