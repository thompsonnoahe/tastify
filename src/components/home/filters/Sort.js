import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeSortOrder } from '../../../actions/filterActions';

const Sort = props => {
  const [sortOrder, setSortOrder] = useState('');
  return (
    <div>
      <div>
        <span
          className={`icon-text cursor-pointer ${
            sortOrder === 'asc' ? 'font-bold' : ''
          }`}
          onClick={() => {
            props.changeSortOrder('asc');
            setSortOrder('asc');
          }}>
          <span className='icon'>
            <i className='fas fa-sort-alpha-up'></i>
          </span>
          <span>Ascending</span>
        </span>
      </div>
      <div>
        <span
          className={`icon-text cursor-pointer ${
            sortOrder === 'desc' ? 'font-bold' : ''
          }`}
          onClick={() => {
            props.changeSortOrder('desc');
            setSortOrder('desc');
          }}>
          <span className='icon'>
            <i className='fas fa-sort-alpha-down'></i>
          </span>
          <span>Descending</span>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { order: state.sortOrder };
};

export default connect(mapStateToProps, { changeSortOrder })(Sort);
