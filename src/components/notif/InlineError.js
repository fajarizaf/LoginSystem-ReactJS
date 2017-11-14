import React from 'react';
import PropTypes from 'prop-types'

const InlineError = ({ text }) => (
  <div style={{ color: "#ae5856", margin: "4px" }} >{ text }</div>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
