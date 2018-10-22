import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon/build/ckeditor';
import './style.scss';
import { CK_TOKEN_URL, CK_UPLOAD_URL } from '../../../../config.json';

const ArticleEditor = (props) => {
  const { articleData } = props;
  return (
    <div>
      <CKEditor
        config={{
          cloudServices: {
            tokenUrl: CK_TOKEN_URL,
            uploadUrl: CK_UPLOAD_URL
          },
          image: {
            toolbar: [
              'imageTextAlternative',
              '|', 'imageStyle:alignLeft',
              'imageStyle:full',
              'imageStyle:aligncenter',
              'imageStyle:alignRight',
              'imageStyle:side'],
            styles: [
              'full',
              'alignCenter',
              'alignLeft',
              'side',
              'alignRight'
            ]
          },
        }}
        editor={BalloonEditor}
        data={articleData}
        onChange={(event, editor) => props.articleOnChangeHandler(event, editor)}
      />
    </div>
  );
};

ArticleEditor.propTypes = {
  articleData: PropTypes.string.isRequired,
  articleOnChangeHandler: PropTypes.func.isRequired
};

export default ArticleEditor;
