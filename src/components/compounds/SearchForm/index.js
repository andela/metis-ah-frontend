import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchResult from '../../../store/actions/searchResult';

class SearchForm extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const form = event.target;
    const query = form[0];
    const value = form[1];
    dispatch(searchResult(query.value, value.value));
  }

  render() {
    return (
      <form className="Search__Form" onSubmit={this.handleOnSubmit}>
        <div className="select">
          <select name="query">
            <option value="keyword">keyword</option>
            <option value="author">Author's Name</option>
            <option value="tag">Tags</option>
          </select>
        </div>
        <div className="field flex--1">
          <div className="control">
            <input className="input" name="value" type="search" placeholder="Search..." />
          </div>
        </div>
        <div className="Search__Action">
          <button className="button is-default" type="submit"><i className="fas fa-search" /></button>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SearchForm);
