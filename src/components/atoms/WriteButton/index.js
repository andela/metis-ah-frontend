import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const WriteButton = props => (
  <button id="app-write-button" type="button" className="button btn app-general-button write_button" onClick={() => props.history.push('/articles/new')}>
    <strong>WRITE</strong>
  </button>
);

WriteButton.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default WriteButton;
