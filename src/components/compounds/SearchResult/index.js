import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import ArticleCard from '../ArticleCard';

const SearchResult = (props) => {
  const { result, loading } = props;
  const articles = (props.data) ? props.data.searchResult.rows : '';
  return (!loading) ? (
    <div className="Search__Result">
      <h1>{result}</h1>
      <div className="Results" id="Results">
        <div className="columns" style={{ flexWrap: 'wrap' }}>
          {
          (articles.length > 0)
            ? articles.map(article => (<ArticleCard article={article} />))
            : ''
          }
        </div>
      </div>
    </div>
  ) : (
    <div
      className="loading"
      style={{
        display: 'flex',
        height: '100px',
        justifyContent: 'center'
      }}
    >
      <Loader
        type="Triangle"
        color="#4dd6a5"
        height="100"
        width="100"
      />
    </div>
  );
};
const mapStateToProps = ({ result }) => ({
  ...result
});
export default connect(mapStateToProps)(SearchResult);
