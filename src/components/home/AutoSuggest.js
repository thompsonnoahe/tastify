import React, { useEffect, useRef, useState } from 'react';
import { autoComplete } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      className='tile is-parent w-full mx-5 p-1 relative'
      style={{ display: `${hide ? 'none' : ''}` }}>
      <div className='tile is-child box w-full overflow-scroll xl:max-h-52 max-h-32 absolute z-10'>
        {suggestions.map((suggestion, index) => (
          <div key={index}>
            <Link
              to={''}
              className='cursor-pointer'
              onClick={() => {
                props.handleChange(suggestion?.title);
                props.onResultClicked();
                setHide(true);
              }}>
              {suggestion.title}
            </Link>
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
