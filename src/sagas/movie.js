import {take, call, put} from 'redux-saga/effects';
import {LOAD_MOVIES, loadMoviesAction} from '../actions/movies';
import {callApi} from '../apiClient';
import {fetchData} from './util';

export function* wathMovies() {
  while (true) {
    const params = yield take(LOAD_MOVIES);
    yield fetchData(loadMoviesAction, callApi, params);
  }
}