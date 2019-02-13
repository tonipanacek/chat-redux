// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import channelReducer from './reducers/channel_reducer';
import messagesReducer from './reducers/messages_reducer';
import usernameReducer from './reducers/username_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers

const initialState = {
  messages: [
    {
      "id": 112233,
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "id": 112232,
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'berlin'],
  selectedChannel: 'general',
  username: 'tonitonytone'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));


const reducers = combineReducers({
  channels: channelReducer,
  messages: messagesReducer,
  username: usernameReducer,
  selectedChannel: selectedChannelReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
