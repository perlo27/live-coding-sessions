import {put, call} from 'redux-saga/effects'

export function* fetchData (action, apiFnc, params) {



  yield put(action.request(params));
  try {

    const apiResponse = yield call(apiFnc, params);
    if(apiResponse) {
      const {err, response} = apiResponse;
      if (response) {
        yield put(action.success(response, params));
      }

      if(err) {
        yield put(action.error(err));
      }
    }
  } catch (e) {

  }
}