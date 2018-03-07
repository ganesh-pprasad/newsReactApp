import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getNewsData } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value : '' };
    this.onInutChange = this.onInutChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInutChange(e) {
    this.setState({ value : e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.getNewsData(this.state.value);
    this.setState({ value : '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="input-group"
      >
        <input
          type="text"
          value={this.state.value}
          className="form-control"
          onChange={this.onInutChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNewsData }, dispatch);
}

SearchBar.propTypes = {
  getNewsData : PropTypes.func,
};
SearchBar.defaultProps = {
  getNewsData : () => { /* noop */ },
};

export default connect(null, mapDispatchToProps)(SearchBar);
