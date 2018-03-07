import TOKEN from '../config/env';

const webhoseio = require('webhoseio');

// default export for a single value
export const FETCH_NEWS = 'fetch_news';

export const getNewsData = (searchText) => {
  const client = webhoseio.config({ token : TOKEN });
  const query = {
    q : `"${searchText}" language:english`,
    sort : "crawled",
  };
  const response = client.query('filterWebContent', query);
  return {
    type : FETCH_NEWS,
    payload : response,
  };
};
