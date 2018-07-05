import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagaMiddlware from './sagas';

const __PROD__ = process.env.NODE_ENV === 'production';


const saga = createSagaMiddleware();

let composeEnhancers = compose;
if (!__PROD__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}


const initialState = {};

export default createStore(reducers, initialState, composeEnhancers(applyMiddleware(saga)));

saga.run(sagaMiddlware);