import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = (props) => {
  const toAuthor = `/author/${props.data.author}`;
  const toArticle = `/article/${props.data.uuid}`;

  return (
    <li className="article">
      <Link to={toAuthor} className="author"><h4><strong>{props.data.author}</strong></h4></Link>
      <Link to={toArticle} className="title"><h4>{props.data.title}</h4></Link>
      <a href={props.data.url} className="title"><h5><small>Go to Original article</small></h5></a>
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
    uuid : PropTypes.string,
  }),
};

export default Article;
