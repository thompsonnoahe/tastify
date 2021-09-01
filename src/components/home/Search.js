import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions';
import AutoSuggest from './AutoSuggest';

let formData = {
  search: '',
  cuisine: '',
};

class Search extends React.Component {
  state = { loading: false, error: false, hideError: false };

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
        <div className='control mr-10'>
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

  renderCuisineSelect({ input }) {
    return (
      <div className='field p-5'>
        <div className='select'>
          <select
            {...{
              ...input,
              value: this.selectRef.current?.value,
              onChange: this.handleSelectChange.bind(this),
            }}
            ref={this.selectRef}>
            <option value=''>All cuisines</option>
            <option value='African'>African</option>
            <option value='American'>American</option>
            <option value='British'>British</option>
            <option value='Cajun'>Cajun</option>
            <option value='Caribbean'>Caribbean</option>
            <option value='Chinese'>Chinese</option>
            <option value='Eastern European'>Eastern European</option>
            <option value='European'>European</option>
            <option value='French'>French</option>
            <option value='German'>German</option>
            <option value='Greek'>Greek</option>
            <option value='Indian'>Indian</option>
            <option value='Irish'>Irish</option>
            <option value='Italian'>Italian</option>
            <option value='Japanese'>Japanese</option>
            <option value='Jewish'>Jewish</option>
            <option value='Latin American'>Latin American</option>
            <option value='Mediterranean'>Mediterranean</option>
            <option value='Mexican'>Mexican</option>
            <option value='Middle Eastern'>Middle Eastern</option>
            <option value='Nordic'>Nordic</option>
            <option value='Southern'>Southern</option>
            <option value='Spanish'>Korean</option>
            <option value='Thai'>Thai</option>
            <option value='Vietnamese'>Vietnamese</option>
          </select>
        </div>
      </div>
    );
  }

  renderSearch({ input }) {
    return (
      <div className='flex w-2/3'>
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
      <form className='flex' onSubmit={formProps.handleSubmit}>
        <Field name='search' render={this.renderSearch.bind(this)} />
        <Field name='cuisine' render={this.renderCuisineSelect.bind(this)} />
        <Field name='submit' render={this.renderSubmit} />
      </form>
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

  async handleSubmit(values) {
    this.setState({ loading: true });
    await this.props
      .searchRecipes(this.inputRef.current.value, values?.cuisine)
      .catch(() => this.setState({ error: true, hideError: false }));
    this.setState({ loading: false });
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
        <div>{this.renderError()}</div>
      </div>
    );
  }
}

export default connect(null, { searchRecipes })(Search);
