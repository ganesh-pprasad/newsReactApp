import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  return (
    <li className="article">
      <h4 className="author">{props.data.author}</h4>
      <h2 className="title">{props.data.title}</h2>
      <p className="content">{props.data.content}</p>
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
  }),
};

export default Article;
