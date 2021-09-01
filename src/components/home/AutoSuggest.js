import React, { useEffect, useState } from 'react';
import { autoComplete } from '../../actions';
import { connect } from 'react-redux';

const AutoSuggest = props => {
  const [suggestions, setSuggestions] = useState([]);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    props.autoComplete(props.value);
    setSuggestions(props.suggestions);
    setHide(false);
  }, [props.value]);
  return suggestions.length !== 0 ? (
    <div
      className='tile is-parent ml-10 p-1'
      style={{ display: `${hide ? 'none' : ''}` }}>
      <div className='tile is-child box'>
        {suggestions.map((suggestion, index) => (
          <div
            className='cursor-pointer'
            onClick={() => {
              props.handleChange(suggestion?.title);
              setHide(true);
            }}
            key={index}>
            {suggestion.title}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return { suggestions: state.autoCompletions };
};

export default connect(mapStateToProps, { autoComplete })(AutoSuggest);
