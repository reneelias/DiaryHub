import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import MainRoutes from './routes/MainRoutes'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from './components/redux/reducers/userReducer'

const rootReducer = combineReducers({
  userReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();