import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = (props) => {
  const toAuthor = `/author/${props.data.author}`;
  const toArticle = `/article/${props.data.uuid}`;

  return (
    <li className="article">
      <Link to={toAuthor} className="author">{props.data.author}</Link> <br />
      <Link to={toArticle} className="title">{props.data.title}</Link> <br />
      <a href={props.data.url} className="title"><small>Original article</small></a>
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
    uuid : PropTypes.string,
  }),
};

export default Article;
