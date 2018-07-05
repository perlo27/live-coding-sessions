import { combineReducers } from 'redux';

import {LOAD_MOVIES} from '../actions/movies';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_MOVIES}_REQUEST`:
      return {...state, isLoading: true};
    case `${LOAD_MOVIES}_SUCCESS`:
      return { data: action.payload, isLoading: false};
    case `${LOAD_MOVIES}_ERROR`:
        return { data: [], isLoading: false, error: action.error};
    case `LOAD M__SUCCESS`:
     return state.setIn(['data', action.payload.Id], action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer
})
