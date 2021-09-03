import React from 'react';
import { connect } from 'react-redux';
import { selectCuisine } from '../../../actions/filterActions';

const CuisineSelect = props => {
  return (
    <div className='field'>
      <div className='select'>
        <select onChange={e => props.selectCuisine(e.target.value)}>
          <option value=''>All cuisines</option>
          {props.cuisines.map((cuisine, i) => (
            <option key={i} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default connect(null, { selectCuisine })(CuisineSelect);
