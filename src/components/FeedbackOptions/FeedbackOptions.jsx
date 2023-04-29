import React from 'react';
import { ButtonWrapped } from './FeedBackOptions.styled';
import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapped>
      {options.map((name, i) => (
        <button
          key={i + 1}
          type="button"
          onClick={() => {
            onLeaveFeedback(name);
          }}
        >
          {name}
        </button>
      ))}
    </ButtonWrapped>
  );
};

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
