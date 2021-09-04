import React from 'react';
import { connect } from 'react-redux';
import RecipePreview from './RecipePreview';

import { searchRecipes } from '../../actions';

class Results extends React.Component {
  state = { numResults: 20, offset: 0 };

  renderLoadMore() {
    // If there are recipes, and the recipes array length is greater than 10, and if the recipes array length isn't equal to the total number of results, keep loading more until the length is equal to the total results
    return (
      this.props.searchData.recipes?.length &&
      this.props.searchData.recipes?.length >= 10 &&
      this.props.searchData.recipes?.length !==
        this.props.searchData.totalResults
    );
  }

  loadMore() {
    if (this.state.numResults % 100 === 0) {
      this.setState({ offset: this.state.numResults + 100 });
    }
    this.props.searchRecipes(
      this.props.searchData.query,
      this.props.cuisine,
      this.props.intolerances.join(),
      this.props.calorieFilters.minCalories,
      this.props.calorieFilters.maxCalories,
      this.state.numResults,
      this.state.offset
    );
    this.setState({ numResults: this.state.numResults + 10 });
  }

  render() {
    return this.props.searchData.recipes?.length ||
      !this.props.searchData.query ? (
      <div className='container grid grid-cols-5 sm:block'>
        {this.props.searchData.recipes
          ?.sort((a, b) => {
            if (this.props.sortOrder === 'asc') {
              return a.title > b.title ? -1 : 1;
            } else if (this.props.sortOrder === 'desc') {
              return a.title < b.title ? -1 : 1;
            } else {
              return 0;
            }
          })
          ?.map(recipe => (
            <RecipePreview key={recipe.id} recipe={recipe} />
          ))}
        {this.renderLoadMore() ? (
          <div className='col-start-3 sm:px-5'>
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
    sortOrder: state.sortOrder,
    intolerances: state.selectedIntolerances,
    cuisine: state.selectedCuisine,
    calorieFilters: state.calorieFilters,
  };
};

export default connect(mapStateToProps, { searchRecipes })(Results);
