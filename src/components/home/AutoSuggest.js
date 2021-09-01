import React, { useEffect, useRef, useState } from 'react';
import { autoComplete } from '../../actions';
import { connect } from 'react-redux';

const AutoSuggest = props => {
  const [suggestions, setSuggestions] = useState([]);
  const [hide, setHide] = useState(false);
  const suggestionsBox = useRef();

  const hideOnOutsideClick = () => {
    document.addEventListener('click', e => {
      if (e.target !== suggestionsBox.current) {
        setHide(true);
      }
    });
  };

  useEffect(() => {
    hideOnOutsideClick();
  });

  useEffect(() => {
    props.autoComplete(props.value);
    setSuggestions(props.suggestions);
    setHide(false);
  }, [props.value]);

  return suggestions.length !== 0 ? (
    <div
      ref={suggestionsBox}
      className='tile is-parent ml-10 p-1'
      style={{ display: `${hide ? 'none' : ''}` }}>
      <div className='tile is-child box'>
        {suggestions.map((suggestion, index) => (
          <div
            className='cursor-pointer'
            onClick={() => {
              props.handleChange(suggestion?.title);
              props.onResultClicked();
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
