import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Alert from "Utils/helpers/alert";

import {
  reportArticle,
  clearMessage
} from "../../../store/actions/reportArticle";
import "./style.scss";

const modalRoot = document.getElementById("modal");

class ReportArticle extends Component {
  el = document.createElement("div");

  state = {
    reasonForReport: "",
    description: ""
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const { clearResponseMessage } = this.props;
    clearResponseMessage();
    modalRoot.removeChild(this.el);
  }

  handleChange = event => {
    this.setState({
      reasonForReport: event.target.value
    });
  };

  updateReportBody = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleSubmitReport = event => {
    event.preventDefault();
    const { makeReport, articleId, closeModal } = this.props;
    const { reasonForReport, description } = this.state;

    if (reasonForReport === "" || reasonForReport === undefined) {
      return Alert.error("Please select reason for the report");
    }
    if (description === "" || description === undefined) {
      return Alert.error("Please add a short description of the report");
    }

    makeReport(articleId, reasonForReport, description).then(response => {
      if (response) {
        closeModal();
      }
    });
  };

  render() {
    const { closeModal, loading, message, error } = this.props;
    const { reasonForReport } = this.state;

    return ReactDOM.createPortal(
      <Fragment>
        <div className="reportArticle">
          {error ? Alert.error(error) : null}
          {message ? Alert.success(message) : null}
          <span className="closeButton" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </span>
          <div className="reportArticleModal">
            <div className="report_header">
              <h2>Report Article</h2>
            </div>
            <div className="reportReasons">
              <li>
                <label>
                  <input
                    type="radio"
                    checked={reasonForReport === "Discrimination"}
                    onChange={this.handleChange}
                    value="Discrimination"
                  />
                  Discrimination
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    checked={reasonForReport === "Plagiarism"}
                    onChange={this.handleChange}
                    value="Plagiarism"
                  />
                  Plagiarism
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    checked={reasonForReport === "Sexual Content"}
                    onChange={this.handleChange}
                    value="Sexual Content"
                  />
                  Sexual Content
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    checked={reasonForReport === "Offensive Language"}
                    onChange={this.handleChange}
                    value="Offensive Language"
                  />
                  Offensive Language
                </label>
              </li>
            </div>
            <div className="reportForm">
              <form onSubmit={this.handleSubmitReport}>
                <textarea
                  onChange={this.updateReportBody}
                  className="reportBody"
                  placeholder="Add a short description of the report"
                />
                <div className="buttonGroup">
                  <button
                    type="button"
                    className="cancelButton"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="submitButton"
                    disabled={loading}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>,
      modalRoot
    );
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
  makeReport(articleId, violation, description) {
    return dispatch(reportArticle(articleId, violation, description));
  },
  clearResponseMessage() {
    return dispatch(clearMessage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportArticle);
