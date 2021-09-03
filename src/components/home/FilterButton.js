import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/filterActions';

const FilterButton = props => {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <span
      className='icon cursor-pointer'
      onClick={() => {
        setShowFilter(!showFilter);
        props.toggleFilter(showFilter);
      }}>
      <i className='fas fa-cog fa-2x'></i>
    </span>
  );
};

export default connect(null, { toggleFilter })(FilterButton);
