import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import reducer from './redux/reducers/index';
import { appHasStarted } from './redux/actions/Control';

//Middlewares:
import { controlMdl } from './redux/middleware/ControlMiddleware';
import { usersMdl } from  './redux/middleware/UsersMiddleware';
import { api } from './redux/middleware/Api';

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//TODO: move this to redux/store.js
const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(...controlMdl, ...usersMdl, api, logger)
    )
);

store.dispatch(appHasStarted());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
