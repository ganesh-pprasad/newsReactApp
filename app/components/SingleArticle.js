import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SingleArticle = (props) => {
  return (
    <div>
      <h2 className="author">{props.data.author}</h2>
      <h5 className="title">{props.data.title}</h5>
      <p className="content">{props.data.content}</p>
    </div>
  );
};

function mapStateToProps({ news }, ownProps) {
  // Find the article with uuid
  const a = news[0].filter((ar) => {
    return ar.uuid === ownProps.match.params.uuid;
  });
  return { data : a[0] };
}

SingleArticle.defaultProps = {
  data : {},
};

SingleArticle.propTypes = {
  data : PropTypes.shape({
    author : PropTypes.string,
    content : PropTypes.string,
    title : PropTypes.string,
    url : PropTypes.string,
  }),
};

export default connect(mapStateToProps)(SingleArticle);
