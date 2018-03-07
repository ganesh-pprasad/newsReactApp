const webhoseio = require('webhoseio');

const client = webhoseio.config({ token : '66877140-cff5-41e6-b9ad-a6710d6c821d' });

// default export for a single value
export const FETCH_NEWS = 'fetch_news';

export const getNewsData = (searchText) => {
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
