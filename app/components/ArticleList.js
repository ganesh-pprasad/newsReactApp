import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from './Article';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.renderNews = this.renderNews.bind(this);
  }

  renderNews(newsData, index) {
    if (!newsData || !newsData.author || !newsData.title || !newsData.text) {
      return false;
    }

    if (index > 4) {
      return false;
    }
    this.props.resetLoading(false);
    const data = {};
    data.author = newsData.author;
    data.content = newsData.text;
    data.title = newsData.title;
    return (<Article data={data} key={index} />);
  }

  render() {
    return <ul> {this.props.news.map(this.renderNews)} </ul>;
  }
}

function mapStateToProps({ news }) {
  return { news : news[0] };
}

ArticleList.propTypes = {
  news : PropTypes.arrayOf(PropTypes.shape({
    author : PropTypes.string,
    crawled : PropTypes.string,
    entities : {},
    external_links : PropTypes.string,
    highlightText : PropTypes.string,
    highlightTitle : PropTypes.string,
    language : PropTypes.string,
    ord_in_thread : PropTypes.string,
    published : PropTypes.string,
    rating : PropTypes.string,
    text : PropTypes.string,
    thread : PropTypes.string,
    title : PropTypes.string,
    url : PropTypes.string,
    uuid : PropTypes.string,
  })),
  resetLoading : PropTypes.func,
};
ArticleList.defaultProps = {
  news : [],
  resetLoading : () => { /* noop */ },
};

export default connect(mapStateToProps)(ArticleList);
