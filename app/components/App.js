import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ArticleList from './ArticleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
  }

  state = {
    loading : false,
  }

  setLoading(bool) {
    this.setState({ loading : bool });
  }

  render() {
    return (
      <div>
        <SearchBar setLoading={this.setLoading} />
        <ArticleList loading={this.state.loading} resetLoading={this.setLoading} />
      </div>
    );
  }
}

export default App;
