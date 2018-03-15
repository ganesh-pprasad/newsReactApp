import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Article from './Article';
import { getAuthorData } from '../actions';

class Author extends Component {
  componentDidMount() {
    this.props.getAuthorData(this.props.match.params.author);
  }

  goBack() {
    if (this.props.works.length > 0) {
      this.props.works.length = 0;
    }
    this.props.history.push('/');
  }

  renderArticles(article, i) {
    if (!article) {
      return false;
    }
    if (i > 15) {
      return false;
    }
    return (
      <div key={i}>
        <h3>{article.title}</h3>
        <p>{article.text}</p>
      </div>
    );
  }

  render() {
    console.log('asdf', this.props.history);

    if (this.props.works.length < 1) {
      return <div>Loading</div>
    }

    return (
      <div>
        <button onClick={() => { this.goBack(); }}>Go Back</button>
        <h3>{this.props.match.params.author}</h3>
        <div className="works">
          {this.props.works.map(this.renderArticles)}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAuthorData }, dispatch);
}

function mapStateToProps({ works }) {
  return { works : works[0] }
}

Author.defaultProps = {
  getAuthorData : () => {},
  match : {
    params : {
      author : '',
    },
  },
  works : [],
  history : {},
};

Author.propTypes = {
  getAuthorData : PropTypes.func,
  match : PropTypes.shape({
    params : PropTypes.shape({
      author : PropTypes.string,
    }),
  }),
  works : PropTypes.arrayOf(PropTypes.shape({
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
  history : PropTypes.shape({
    action : PropTypes.string,
    block : PropTypes.func,
    createHref : PropTypes.func,
    go : PropTypes.func,
    goBack : PropTypes.func,
    goForward : PropTypes.func,
    length : PropTypes.number,
    listen : PropTypes.func,
    location : PropTypes.shape({
      pathname : PropTypes.string,
      search : PropTypes.string,
      hash : PropTypes.string,
      state : PropTypes,
    }),
    push : PropTypes.func,
    replace : PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
