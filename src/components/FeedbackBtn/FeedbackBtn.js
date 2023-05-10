import React from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackBtn.styled";


export const FeedbackBtn = ({children, onClick, type="button"}) => {
    return (
      <Button
        type={type}
        onClick={onClick}
      >
        {children}
      </Button>
    );
}

FeedbackBtn.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}