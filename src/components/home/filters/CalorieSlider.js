import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { setCaloriesFilter } from '../../../actions/filterActions';

const CalorieSlider = props => {
  const [value, setValue] = useState(0);
  const ref = useRef();

  return (
    <div className='flex'>
      <input
        ref={ref}
        value={value}
        type='range'
        min='0'
        onChange={e => {
          setValue(e.target.value);
          props.setCaloriesFilter(e.target.value, props.type);
        }}
        max={props.maxValue}
      />
      <label>{value}</label>
    </div>
  );
};

export default connect(null, { setCaloriesFilter })(CalorieSlider);
