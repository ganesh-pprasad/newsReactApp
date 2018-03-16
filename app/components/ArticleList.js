import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Article from './Article';
import { getTrendingData } from '../actions/index';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.renderNews = this.renderNews.bind(this);
    this.props.getTrendingData();
  }

  renderNews(newsData, index) {
    if (!newsData || !newsData.author || !newsData.title) {
      return false;
    }
    const data = {};
    data.author = newsData.author;
    data.content = newsData.text;
    data.title = newsData.title;
    data.url = newsData.url;
    data.uuid = newsData.uuid;
    return (<Article data={data} key={index} />);
  }

  render() {
    if (this.props.news.length > 0) {
      return <ul> {this.props.news.map(this.renderNews)} </ul>;
    }
    if (this.props.loading) {
      return (
        <div className="loading-msg">
          <h3>
            <small>Loading</small>
          </h3>
        </div>
      );
    }
    return (
      <div className="loading-msg">
        <h3>
          <small>Loading Trending Topics</small>
        </h3>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news : news[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTrendingData }, dispatch);
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
  // resetLoading : PropTypes.func,
  loading : PropTypes.bool,
  getTrendingData : PropTypes.func,
};
ArticleList.defaultProps = {
  news : [],
  // resetLoading : () => { /* noop */ },
  loading : false,
  getTrendingData : () => { /* noop */ },
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
