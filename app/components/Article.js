import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  return (
    <li className="article">
      <h4 className="author">{props.data.author}</h4>
      <a href={props.data.url} className="title">{props.data.title}</a>
      {/* <p className="content">{props.data.content}</p> */}
    </li>
  );
};

Article.defaultProps = {
  data : {},
};

Article.propTypes = {
  data : PropTypes.shape({
    author : PropTypes.string,
    content : PropTypes.string,
    title : PropTypes.string,
    url : PropTypes.string,
  }),
};

export default Article;
