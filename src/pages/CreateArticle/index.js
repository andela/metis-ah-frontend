import React, {
  Component,
  Fragment
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BrandContainer from 'Components/compounds/BrandContainer';
import SearchAndProfile from 'Components/compounds/SearchAndProfile';
import Editor from 'Components/compounds/Editor';
import ImageUploadButton from 'Components/atoms/ImageUploadButton';
import CategorySelect from 'Components/atoms/CategorySelect';
import TagSelect from 'Components/atoms/TagSelect';
import Loader from 'Components/atoms/TopLoader';
import PublishButton from 'Components/atoms/Button';
import FooterBrand from 'Components/compounds/FooterBrand';
import AutoSave from 'Utils/AutoSave';
import WordCount from 'Utils/WordCounter';
import checkArticle from 'Utils/helpers/checkArticle';
import { createArticle, getTags } from 'Store/actions/createArticle';
import { getCategories } from 'Store/actions/categories';
import 'Components/compounds/SearchAndProfile/style.scss';
import './style.scss';
/**
* CreateArticle
*/

export class CreateArticle extends Component {
  state = {
    menu: false,
    articleDescription: '',
    articleTitle: '',
    articleBody: '',
    selectedCategory: { value: 0, label: 'Choose a category' },
    selectedTag: [],
    articleBanner: null,
    autoSave: false,
    bannerName: null
  };

  timer = null;

  componentDidMount() {
    const { getAllCategories, categories, getAllTags } = this.props;
    AutoSave.restore(this, 'articleTitle');
    AutoSave.restore(this, 'articleDescription');
    AutoSave.restore(this, 'articleBody');
    if (!categories.length) {
      getAllCategories();
    }
    getAllTags();
  }

  showMenu = () => {
    this.setState(state => ({
      menu: !state.menu,
    }));
  }

  articleTitleHandler = (e) => {
    const title = e.target.value;
    this.setState({
      articleTitle: title
    });
    AutoSave.save('articleTitle', title);
  }

  articleBodyHandler = (event, editor) => {
    const articleBody = editor.getData();
    this.setState({
      articleBody,
      autoSave: true
    });
    AutoSave.save('articleBody', articleBody);

    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.setState({
      autoSave: false
    }), 1000);
  }

  articleBannerHandler= (e) => {
    const image = e.target.files[0];
    if (image) {
      this.setState({
        articleBanner: image,
        bannerName: image.name
      });
    }
  }

  articleDescriptionHandler = (e) => {
    const desc = e.target.value;
    this.setState({
      articleDescription: desc
    });
    AutoSave.save('articleDescription', desc);
  }

  selectedCategoryHandler = (selectedCategory) => {
    this.setState({
      selectedCategory
    });
  }

  selectedTagHandler = (selectedTag) => {
    this.setState({
      selectedTag
    });
  }

  publishArticleHandler = () => {
    const {
      articleBody,
      articleTitle,
      articleDescription,
      selectedTag,
      articleBanner,
      selectedCategory
    } = this.state;
    const { saveArticle, history } = this.props;
    const tags = selectedTag.reduce((acc, curr) => [...acc, curr.value], []);

    const articleError = checkArticle(WordCount(articleTitle),
      WordCount(articleDescription), WordCount(articleBody));

    if (!articleError) {
      const collection = {
        title: articleTitle,
        description: articleDescription,
        body: articleBody,
        image: articleBanner,
        tags,
        categoryId: selectedCategory.value
      };

      const article = new FormData();

      Object.keys(collection).forEach(data => article.append(`${data}`, collection[data]));

      return saveArticle(article, history);
    }
    toastr.error(articleError);
  }

  render() {
    const {
      menu,
      articleBody,
      articleTitle,
      articleDescription,
      selectedTag,
      selectedCategory,
      autoSave,
      bannerName,
      articleBanner
    } = this.state;

    const {
      tags,
      error,
      loading,
      categories
    } = this.props;
    error && toastr.error(error);
    return (
      <Fragment>
        {loading && <Loader />}
        <div className="navCover">
          <nav className="navbar container Landing-Page-Header" role="navigation" aria-label="main navigation">
            <BrandContainer showMenu={this.showMenu} menu={menu} />
            <SearchAndProfile menu={menu} />
          </nav>
        </div>
        <div className="Main container">
          {autoSave && <span className="autoSave"> saving ...</span>}
          <Editor
            articleBody={articleBody}
            articleBodyHandler={this.articleBodyHandler}
            articleTitle={articleTitle}
            articleDescription={articleDescription}
            articleTitleHandler={this.articleTitleHandler}
            articleDescriptionHandler={this.articleDescriptionHandler}
          />
          <ImageUploadButton handler={this.articleBannerHandler} selected={articleBanner} />
          {bannerName && <span className="imgLabel">{bannerName}</span>}
          <CategorySelect
            selectedCategory={selectedCategory}
            categories={categories}
            handler={this.selectedCategoryHandler}
          />
          <TagSelect tags={tags} selectedTag={selectedTag} handler={this.selectedTagHandler} />
          <PublishButton className="publish" color="green" onClick={this.publishArticleHandler}>PUBLISH</PublishButton>
        </div>

        <footer className="Main-Footer">
          <FooterBrand />
        </footer>
      </Fragment>
    );
  }
}

CreateArticle.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes
    .arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
  saveArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  getAllTags: PropTypes.func.isRequired,
  getAllCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tags: state.createArticle.tags,
  categories: state.categories.categories,
  error: state.createArticle.error,
  loading: state.createArticle.loading,

});

const mapDispatchToProps = dispatch => ({
  saveArticle: (article, history) => dispatch(createArticle(article, history)),
  getAllTags: () => dispatch(getTags()),
  getAllCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
