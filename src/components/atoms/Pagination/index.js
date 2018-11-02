import React from 'react';
import PaginationList from '../PaginationList';
import './index.scss';

const Pagination = () => (
  <div className="ArticlePagination pagination is-rounded" role="navigation" aria-label="pagination">
    <ul className="pagination-list">
      <li><a href="/" className="pagination-link" aria-label="Goto page 1">&lt;&lt;</a></li>
      <PaginationList />
      <li><a href="/" className="pagination-link" aria-label="Goto page 5">&gt;&gt;</a></li>
    </ul>
  </div>
);

export default Pagination;
