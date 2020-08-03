import { call, takeLatest, put } from 'redux-saga/effects';
import * as Api from '../apis';
import * as Actions from '../actions/index';

function* requestViewGridFlow(action){
    const response = yield call(Api.postViewGrid, action.payload);
    yield put(Actions.successViewGrid(response.data));
    // console.log('sagas >> '+ JSON.stringify(response.data));
}

function* requestUpdateGridFlow(action){
    console.log('saga 진입');
    const {result} = yield call(Api.postUpdateGrid, action.payload);
    console.log('saga 진입'+ result);
    

    if(result === 1){
        yield put(Actions.successUpdateGrid(result));
        console.log('update 성공!');
    } else{
        console.log('update 실패!');
    }
}

export default function* (){
    yield takeLatest(Actions.REQUEST_VIEW_GRID, requestViewGridFlow);
    yield takeLatest(Actions.REQUEST_UPDATE_GRID, requestUpdateGridFlow);
}