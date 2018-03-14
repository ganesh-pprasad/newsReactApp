import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import Author from './components/Author';
import SingleArticle from './components/SingleArticle';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <Switch>
        <Route path="/author/:author" component={Author} />
        <Route path="/article/:uuid" component={SingleArticle} />
        <Route path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
  , document.querySelector('#root'),
);
