/**
  action :  
 */


//테이블 조회
export const REQUEST_VIEW_GRID = 'requestViewGrid';
export const SUCCESS_VIEW_GRID = 'successViewGrid';
export const FAILURE_VIEW_GRID = 'failureViewGrid';

//테이블 수정, 입력, 삭제
export const REQUEST_UPDATE_GRID = 'requestUpdateGrid'; //상태 바꾸려는것
export const SUCCESS_UPDATE_GRID = 'successUpdateGrid';
export const FAILURE_UPDATE_GRID = 'failureUpdateGrid';

export const requestViewGrid = () => ({
    type: REQUEST_VIEW_GRID
});
export const successViewGrid = (data) => ({
    type: SUCCESS_VIEW_GRID,
    payload: data,
});

export const requestUpdateGrid = ({study_date, grade, original_id, trim_date, dailyno, stat}) => ({
    type: REQUEST_UPDATE_GRID,
    payload: {study_date, grade, original_id, trim_date, dailyno, stat},
});
// export const requestUpdateGrid = ({dailyno, insertData}) => ({
//     type: REQUEST_UPDATE_GRID,
//     payload: {dailyno, insertData},
// });
export const successUpdateGrid = (data)=>({
    type: SUCCESS_UPDATE_GRID,
    payload: data
});