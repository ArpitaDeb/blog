import React from 'react';
import { combineReducers} from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer
});