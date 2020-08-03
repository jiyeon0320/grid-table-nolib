import axios from 'axios';
import config from './config';

//데이터 조회
export const postViewGrid = () => axios.post(config.viewGrid, {}).then((res)=>res.data);
//데이터 상태 변화 (insert, update, delete)
export const postUpdateGrid = ({stat, study_date, grade, original_id, dailyno}) => 
    axios.post(config.updateGrid, [{stat, study_date, grade, original_id, dailyno}]).then((res)=>res.data);