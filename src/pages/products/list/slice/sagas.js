import api from "shared/utils/fetch-wrapper"
import { call, put, takeEvery } from 'redux-saga/effects'
import { TYPE } from "./dux"


function* fetchItems() {
    const URL = `https://jsonplaceholder.typicode.com/users`;
    try {
        const response = yield call(api, URL, "GET");
        yield put({ type: TYPE.REQUEST_DATA_SUCCESS, payload: response });
    } catch (e) {
        yield put({ type: TYPE.REQUEST_DATA_FAILURE, payload: { message: e.message } });
    }
}

function* productListSaga() {
    yield takeEvery(TYPE.REQUEST_DATA, fetchItems);
}

export default productListSaga;