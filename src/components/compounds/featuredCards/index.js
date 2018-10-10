import React from 'react';
import { connect } from 'react-redux';

import classes from './style.css';

const cards = props => (
  props.featured.map((item, index) => (
    <div
      className={`${classes.featCards} ${index <= 1 ? classes.bigcard : classes.smallcard}`}
      style={{
        background: `linear-gradient(rgba(19, 180, 122, 0), rgba(19, 180, 122, 0), black), url('${item.img}'), no-repeat`,
      }}
      key={item.title}
    >
      <div className={classes.info}>
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
