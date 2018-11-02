import React from 'react'
import PropTypes from 'prop-types'
import './style.scss';
import time_past from 'time_past';

const SingleArticleHeader = (props) => {
  return (
    <div className="singleArticleHeader">
    <div>
        <img className="img" src={props.img} />
      <div className="author">
        <img className="profile" src={props.profile} />
      <div className="name"> {props.author}</div>
      </div>
    </div>
      <h1 className="title">{props.title}</h1>
    <p className="time">{props.createdDate? time_past(props.createdDate): null}</p>
    </div>
  )
}

export default SingleArticleHeader
