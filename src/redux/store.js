import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import songsSubReducer from './subReducers/songsSubReducer';
import artistsSubReducer from './subReducers/artistsSubReducer';

const reducers = {
  songs: songsSubReducer,
  artists: artistsSubReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
