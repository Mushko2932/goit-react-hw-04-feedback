import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { FeedbackBtn } from 'components/FeedbackBtn/FeedbackBtn';
import { FeedbackList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackBtn
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
