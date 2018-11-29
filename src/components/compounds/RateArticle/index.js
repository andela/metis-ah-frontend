import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { getUserRating, rateArticle } from "../../../store/actions/rateArticle";
import Alert from "../../../util/helpers/alert";
import "./style.scss";

// https://codepen.io/dwayne/pen/qakVOG
class RateArticle extends Component {
  state = {
    value: this.props.stars,
    dynamicValue: this.props.stars
  };

  handleClick = rating => {
    const { articleId, rateSingleArticle, userId } = this.props;
    if (userId === undefined) {
      return Alert.info("Please login to continue");
    }
    rateSingleArticle(articleId, rating);
    this.setState({
      value: rating,
      dynamicValue: rating
    });
  };

  handleMouseEnter = newValue => {
    this.setState({ dynamicValue: newValue });
  };

  handleMouseLeave = newValue => {
    this.setState({ dynamicValue: this.state.value });
  };

  render() {
    const { averageRating, userRating } = this.props;
    const { dynamicValue } = this.state;
    const starCollection = [];

    for (let star = 1; star <= 5; star++) {
      if (star <= dynamicValue) {
        starCollection.push(
          <span
            key={star}
            className="star"
            onMouseEnter={this.handleMouseEnter.bind(this, star)}
            onMouseLeave={this.handleMouseLeave.bind(this, star)}
            onClick={this.handleClick.bind(this, star)}
          >
            ★
          </span>
        );
      } else {
        starCollection.push(
          <span
            key={star}
            className="star"
            onMouseEnter={this.handleMouseEnter.bind(this, star)}
            onMouseLeave={this.handleMouseLeave.bind(this, star)}
            onClick={this.handleClick.bind(this, star)}
          >
            ☆
          </span>
        );
      }
    }

    return (
      <Fragment>
        <div className="starCollection">
          <div className="averageRating">
            <p className="sizeMedium averageRatingHeader">Average Rating</p>
            <span className="averageRatingStar">★</span>
            <span className="averageRatingValue">
              {averageRating === 0 ? this.props.rating : averageRating}
            </span>
          </div>
          <div>
            <p className="sizeMedium">Rate this article</p>
            <p>{starCollection}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { authUser, rateArticle } = state;
  const { averageRating, userRating, error } = rateArticle;
  return {
    averageRating,
    userRating,
    error,
    userId: authUser.user.id
  };
};

const mapDispatchToProps = dispatch => ({
  rateSingleArticle(articleId, rating) {
    return dispatch(rateArticle(articleId, rating));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateArticle);
