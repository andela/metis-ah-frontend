import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import reportArticle from "../../store/actions/reportArticle";
import './style.scss;'

const modalRoot = document.getElementById("modal");

class ReportArticle extends Component {
  el = document.createElement("div");
  
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  reportArticle = (violation, description) => {
    const { makeReport } = this.reportArticle;
  }

  render() {
    return (
      <Fragment>
        <div className='report_article'>
          
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { reportArticle } = state;
  const { message, error, loading } = reportArticle;
  return {
    message,
    error,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  makeReport(violation, description) {
    return dispatch(reportArticle(violation, description));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportArticle);
