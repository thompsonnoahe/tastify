import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions';
import AutoSuggest from './AutoSuggest';
import FilterBox from './FilterBox';
import FilterButton from './FilterButton';
import SearchHistory from './SearchHistory';

let formData = {
  search: '',
  cuisine: '',
};

class Search extends React.Component {
  state = { loading: false, error: false, hideError: false, searchHistory: [] };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.inputRef = React.createRef();
    this.selectRef = React.createRef();
  }

  handleChange(value) {
    this.inputRef.current.value = value;
  }

  async handleSelectChange(e) {
    this.selectRef.current.value = e.target.value;
    this.setState({ loading: true });
    await this.props
      .searchRecipes(this.inputRef.current.value, this.selectRef.current.value)
      .catch(() => this.setState({ error: true, hideError: false }));
    this.setState({ loading: false });
  }

  renderSubmit() {
    return (
      <div className='field p-5 flex justify-center'>
        <div className='control lg:mr-10 sm:m-0'>
          <button type='submit' className='button is-primary inline-block'>
            <span className='icon is-small'>
              <i className='fas fa-utensils'></i>
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>
    );
  }

  renderSearch({ input }) {
    return (
      <div className='flex w-full'>
        <div className='field w-full p-5'>
          <div className='control ml-10'>
            <input
              ref={this.inputRef}
              className='input'
              type='text'
              {...{ ...input, value: this.inputRef.current?.value }}
              autoComplete='off'
            />
          </div>
          <AutoSuggest
            onResultClicked={this.handleSubmit.bind(this)}
            handleChange={this.handleChange}
            value={input.value}
          />
        </div>
      </div>
    );
  }

  renderForm(formProps) {
    return (
      <div>
        <form
          className='flex items-center sm:flex-col sm:justify-center'
          onSubmit={formProps.handleSubmit}>
          <Field name='search' render={this.renderSearch.bind(this)} />
          <FilterButton />
          <Field name='submit' render={this.renderSubmit} />
        </form>
        <FilterBox />
      </div>
    );
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className='notification is-danger' hidden={this.state.hideError}>
          <button
            className='delete'
            onClick={() => this.setState({ hideError: true })}></button>
          Something went wrong! Please try again later.
        </div>
      );
    }
    return null;
  }

  async handleSubmit() {
    this.setState({ loading: true });
    await this.props
      .searchRecipes(
        this.inputRef.current.value,
        this.props.cuisine,
        this.props.intolerances.join(),
        this.props.calorieFilters.minCalories,
        this.props.calorieFilters.maxCalories
      )
      .catch(() => this.setState({ error: true, hideError: false }));
    this.setState({ loading: false });
    this.setState(prevState => ({
      searchHistory: [this.inputRef.current.value, ...prevState.searchHistory],
    }));
  }

  handleSearchHistoryDelete(item) {
    this.setState(prevState => ({
      searchHistory: [...prevState.searchHistory].filter(i => i !== item),
    }));
  }

  render() {
    return (
      <div className='mt-5 container'>
        <Form
          initialValues={{ ...formData }}
          onSubmit={this.handleSubmit.bind(this)}
          render={this.renderForm.bind(this)}
        />
        {this.state.loading ? (
          <progress className='progress is-large is-primary' max='100'>
            60%
          </progress>
        ) : null}
        <div>
          <SearchHistory
            handleResultClicked={this.handleChange.bind(this)}
            handleDeleteClicked={this.handleSearchHistoryDelete.bind(this)}
            history={this.state.searchHistory}
          />
        </div>
        <div>{this.renderError()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    intolerances: state.selectedIntolerances,
    cuisine: state.selectedCuisine,
    calorieFilters: state.calorieFilters,
  };
};

export default connect(mapStateToProps, { searchRecipes })(Search);
