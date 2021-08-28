import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';

import { searchRecipes } from '../../actions';

let formData = {
  search: '',
};

class Search extends React.Component {
  renderSearch({ input }) {
    return (
      <div className='field'>
        <div className='control'>
          <input className='input' type='text' {...input} />
          <button type='submit' className='button is-primary'>
            Submit
          </button>
        </div>
      </div>
    );
  }

  renderForm(formProps) {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <Field name='search' component={this.renderSearch} />
      </form>
    );
  }

  handleSubmit(values) {
    this.props.searchRecipes(values.search);
  }

  render() {
    return (
      <div className='mt-5 container'>
        <Form
          initialValues={{ ...formData }}
          onSubmit={this.handleSubmit.bind(this)}
          render={this.renderForm.bind(this)}
        />
      </div>
    );
  }
}

export default connect(null, { searchRecipes })(Search);
