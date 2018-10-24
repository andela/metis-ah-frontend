import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeaturedCards from '../FeaturedCards';
import updateFeaturedArticles from '../../../store/actions/featuredArticlesAction';
import './style.scss';

class FeaturedArticles extends React.Component {
	componentDidMount() {
		const { updateFeaturedArticlesAction } = this.props;
		updateFeaturedArticlesAction();
	}

	render() {
		const { articlesFeatured } = this.props;

		return (
			<div className="Featured-ArticlesWrapper">
				<FeaturedCards featured={articlesFeatured} />
			</div>
		);
	}
}

FeaturedArticles.propTypes = {
	updateFeaturedArticlesAction: PropTypes.func.isRequired,
	articlesFeatured: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
	articlesFeatured: state.featuredArticles
});

const mapDispatchToProps = dispatch => ({
	updateFeaturedArticlesAction: () => dispatch(updateFeaturedArticles())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FeaturedArticles);
