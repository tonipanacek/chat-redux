// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/meesages_reducer';
import usernameReducer from './reducers/username_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
let username = prompt('Username?');

const initialState = {
  messages: [],
  channels: ['general', 'react', 'berlin'],
  selectedChannel: 'general',
  username: username || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};


const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  username: usernameReducer,
  selectedChannel: selectedChannelReducer
});


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
