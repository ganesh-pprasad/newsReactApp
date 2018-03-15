import TOKEN from '../config/env';

const webhoseio = require('webhoseio');

// default export for a single value
export const FETCH_NEWS = 'fetch_news';
export const RESET_NEWS = 'reset_news';
export const AUTHOR = 'author';
export const TREND = 'trend';

export const getNewsData = (searchText) => {
  const client = webhoseio.config({ token : TOKEN });
  const query = {
    q : `"${searchText}" language:english (site_type:news OR site_type:blogs) performance_score:>5`,
    sort : "crawled",
  };
  const response = client.query('filterWebContent', query);
  return {
    type : FETCH_NEWS,
    payload : response,
  };
};

export const resetNewsData = () => {
  return {
    type : RESET_NEWS,
    payload : [],
  };
};

export const getAuthorData = (author) => {
  const client = webhoseio.config({ token : TOKEN });
  const query = {
    q : `${author} language:english`,
    sort : "crawled",
  };
  const response = client.query('filterWebContent', query);
  return {
    type : AUTHOR,
    payload : response,
  };
};

export const getTrendingData = () => {
  const client = webhoseio.config({ token : TOKEN });
  const query = {
    q : "performance_score:>6",
    ts : "1521011431247",
    sort : "performance_score",
  };
  const response = client.query('filterWebContent', query);
  return {
    type : TREND,
    payload : response,
  };
}
