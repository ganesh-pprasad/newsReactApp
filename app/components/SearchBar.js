import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getNewsData, resetNewsData } from '../actions/index';
import Msg from './Msg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      submit : false,
    };
    this.onInutChange = this.onInutChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInutChange(e) {
    this.setState({ value : e.target.value });
    this.setState({ submit : false });
  }

  onSubmit(e) {
    this.props.resetNewsData();
    this.setState({ submit : true });
    e.preventDefault();
    this.props.getNewsData(this.state.value);
    this.props.setLoading(true);
  }

  render() {
    return (
      <div>
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
        <Msg
          searchText={this.state.value}
          submit={this.state.submit}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNewsData, resetNewsData }, dispatch);
}

SearchBar.propTypes = {
  getNewsData : PropTypes.func,
  setLoading : PropTypes.func,
  resetNewsData : PropTypes.func,
};
SearchBar.defaultProps = {
  getNewsData : () => { /* noop */ },
  setLoading : () => { /* noop */ },
  resetNewsData : () => { /* noop */ },
};

export default connect(null, mapDispatchToProps)(SearchBar);
