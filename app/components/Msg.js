import React from 'react';
import PropTypes from 'prop-types';

const Msg = (props) => {
  let msg = null;
  if (props.searchText) {
    if (props.submit) {
      msg = `Showing articles for ${props.searchText} ... `;
    } else {
      msg = `Show articles for ${props.searchText} [ENTER]`;
    }
  } else {
    msg = "Search for news !! ";
  }
  return (
    <div className="msg">{msg}</div>
  );
};

Msg.propTypes = {
  searchText : PropTypes.string,
  submit : PropTypes.bool,
};

Msg.defaultProps = {
  searchText : '',
  submit : false,
};

export default Msg;
