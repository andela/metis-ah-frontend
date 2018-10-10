import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const cards = props => (
  props.featured.map((item, index) => (
    <div
      className={`featCards ${index <= 1 ? 'bigcard' : 'smallcard'}`}
      style={{
        background: `linear-gradient(rgba(19, 180, 122, 0), rgba(19, 180, 122, 0), black), url('${item.img}'), no-repeat`,
      }}
      key={item.title}
    >
      <div className="info">
        <h3>{item.title}</h3>
        <span>{item.date}</span>
      </div>
    </div>
  ))
);

const mapStateToProps = state => ({
  featured: state.featuredArticles.featuredArticles
});

export default connect(mapStateToProps)(cards);
