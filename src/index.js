import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './app';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const browserHistory = createBrowserHistory({});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
  <Router history={browserHistory}>
    <App />
  </Router>
  </Provider>, document.getElementById('root'))


// if (module.hot) {
//   module.hot.accept();
// }
