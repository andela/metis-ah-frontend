import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Alert from 'Utils/helpers/alert';

import {
  reportArticle,
  clearMessage,
} from '../../../store/actions/reportArticle';
import './style.scss';

const modalRoot = document.getElementById('modal');

const options = [
  { value: 'Discrimination', label: 'Discrimination' },
  { value: 'Plagiarism', label: 'Plagiarism' },
  { value: 'Sexual Content', label: 'Sexual Content' },
  { value: 'Offensive Language', label: 'Offensive Language' },
];

class ReportArticle extends Component {
  el = document.createElement('div');

  state = {
    reasonForReport: null,
    description: '',
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const { clearResponseMessage } = this.props;
    clearResponseMessage();
    modalRoot.removeChild(this.el);
  }

  handleChange = reasonForReport => {
    this.setState({ reasonForReport });
  };

  updateReportBody = event => {
    this.setState({
      description: event.target.value,
    });
  };

  handleSubmitReport = event => {
    event.preventDefault();
    const { makeReport, articleId, closeModal } = this.props;
    const { reasonForReport, description } = this.state;

    if (reasonForReport === '' || reasonForReport === undefined) {
      return Alert.error('Please select reason for the report');
    }
    if (description === '' || description === undefined) {
      return Alert.error('Please add a short description of the report');
    }

    makeReport(articleId, reasonForReport.value, description).then(response => {
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
              <label>Reason for Report</label>
              <Select
                options={options}
                onChange={this.handleChange}
                value={reasonForReport}
              />
            </div>
            <div className="reportForm">
              <form onSubmit={this.handleSubmitReport}>
                <label>Description of Report</label>
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
    loading,
  };
};

const mapDispatchToProps = dispatch => ({
  makeReport(articleId, violation, description) {
    return dispatch(reportArticle(articleId, violation, description));
  },
  clearResponseMessage() {
    return dispatch(clearMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportArticle);
