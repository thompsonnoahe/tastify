import React from 'react';
import { connect } from 'react-redux';
import RecipePreview from './RecipePreview';

import { searchRecipes } from '../../actions';

class Results extends React.Component {
  state = { numResults: 20, offset: 0 };
  renderLoadMore() {
    return (
      this.props.searchData.recipes &&
      this.props.searchData.recipes.length >= 10 &&
      this.props.searchData.recipes.length !==
        this.props.searchData.totalResults
    );
  }
  loadMore() {
    if (this.state.numResults % 100 === 0) {
      this.setState({ offset: this.state.numResults + 100 });
    }
    this.props.searchRecipes(
      this.props.searchData.query,
      this.state.numResults,
      this.state.offset
    );
    this.setState({ numResults: this.state.numResults + 10 });
  }
  render() {
    return this.props.searchData.recipes?.length ||
      !this.props.searchData.query ? (
      <div className='container md:grid md:grid-cols-5'>
        {this.props.searchData.recipes?.map(recipe => (
          <RecipePreview key={recipe.id} recipe={recipe} />
        ))}
        {this.renderLoadMore() ? (
          <div className='col-start-3'>
            <button
              onClick={this.loadMore.bind(this)}
              className='button w-full is-primary'>
              Load More
            </button>
          </div>
        ) : null}
      </div>
    ) : (
      <div className='container p-10'>No results found.</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.searchData,
  };
};

export default connect(mapStateToProps, { searchRecipes })(Results);
