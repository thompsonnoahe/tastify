import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const SearchHistory = ({
  history,
  handleResultClicked,
  handleDeleteClicked,
}) => {
  history = _.uniq(history);
  return history?.length ? (
    <div className='container p-5'>
      <p className='inline-block'>You searched for:&nbsp;</p>
      {history.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className='mx-10 sm:m-3 inline-block cursor-pointer'
          onClick={() => handleResultClicked(item)}>
          <span class='tag is-medium'>
            {item}
            <button
              class='delete is-small'
              onClick={() => handleDeleteClicked(item)}></button>
          </span>
        </div>
      ))}
    </div>
  ) : null;
};

export default connect(null)(SearchHistory);
