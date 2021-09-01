import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions';
import AutoSuggest from './AutoSuggest';

let formData = {
  search: '',
};

class Search extends React.Component {
  state = { loading: false, error: false, hideError: false };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.inputRef = React.createRef();
  }

  handleChange(value) {
    this.inputRef.current.value = value;
  }

  renderSearch({ input }) {
    return (
      <div className='flex'>
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
          <AutoSuggest handleChange={this.handleChange} value={input.value} />
        </div>
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
      </div>
    );
  }

  renderForm(formProps) {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <Field name='search' render={this.renderSearch.bind(this)} />
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

  async handleSubmit() {
    this.setState({ loading: true });
    await this.props
      .searchRecipes(this.inputRef.current.value)
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
