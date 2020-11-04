import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

import rootReducer from "./root-reducer"
import productListSagas from "pages/products/list/slice/sagas"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

function* rootSagas() {
    yield all([
        productListSagas()
    ])
}

sagaMiddleware.run(rootSagas);

export default store;