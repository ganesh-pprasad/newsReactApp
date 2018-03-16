import React from 'react';
import PropTypes from 'prop-types';

const Msg = (props) => {
  let msg = null;
  if (props.searchText) {
    if (props.submit) {
      msg = `Showing results for`;
      return (
        <h5 className="msg">{msg} : <strong>{props.searchText}</strong> </h5>
      );
    }
    msg = `Show results for`;
    return (
      <h5 className="msg">{msg} : <i>{props.searchText}</i> <kbd>hit Enter</kbd> </h5>
    );
  }
  return <div />;
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
