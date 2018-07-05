import {all, fork} from 'redux-saga/effects';

import {wathMovies} from './movie';

export default function* () {
  yield all([
    fork(wathMovies)
  ])
}