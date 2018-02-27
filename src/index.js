import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// Redux & Reducers
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from './middleware/logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
