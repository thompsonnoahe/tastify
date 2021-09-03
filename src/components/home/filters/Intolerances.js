import React from 'react';
import { connect } from 'react-redux';
import { filterByIntolerances } from '../../../actions/filterActions';

const Intolerances = props => {
  const handleChange = e => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    props.filterByIntolerances(values);
  };
  return (
    <div className='select is-multiple'>
      <select multiple size='5' onChange={handleChange}>
        {props.intolerances.map((intolerance, i) => (
          <option key={i} value={intolerance}>
            {intolerance}
          </option>
        ))}
      </select>
    </div>
  );
};

export default connect(null, { filterByIntolerances })(Intolerances);
