import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { requestUpdateGrid, requestViewGrid } from '../actions';
import Input from '../components/Input';

const CrudTable = () => {
  // const viewGrid = useSelector((state) => state.viewGrid); //기존 데이터 출력
  // const dispatch = useDispatch();
  const [datas, setDatas] = useState([]); //기존 데이터 출력
  // console.log(datas); //초기 진입시 데이터 출력
  const onChangeData = (changedData, index) => {
    console.log('submit');
    setDatas((prevDatas) => {
      const datas = [...prevDatas];
      datas[index] = changedData;
      return datas;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: viewGrid } = await axios.post(
          'http://localhost:6373/table/view-grid'
        );

        setDatas(viewGrid.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //데이터 서버로 보내기
  const onSubmit = (e) => {
    console.log(`onSubmit..`);
    console.log(datas);
    console.log(e.target);
    axios.post('http://localhost:6373/table/update-grid', datas);

    // dispatch(requestUpdateGrid({ study_date, grade, original_id, stat, dailyno }));
  };

  //페이지 첫 진입시 데이터 없을 때는 로딩중
  // if (!datas) {
  //     return <h3>로딩..</h3>;
  // }

  const onAddData = () => {
    setDatas((prevDatas) => [
      {
        study_date: '',
        grade: '',
        original_id: '',
        stat: 'I',
      },
      ...prevDatas,
    ]);
  };

  return (
    <>
      <h3>테이블 만들기</h3>
      <button onClick={onAddData}>생성</button>
      <table>
        <thead>
          <tr>
            <th>등록일자</th>
            <th>학년</th>
            <th>내용</th>
            <th>번호</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((d, i) => (
            <Input
              key={d.dailyno}
              data={d}
              study_date={d.study_date}
              grade={d.grade}
              original_id={d.original_id}
              dailyno={d.dailyno}
              index={i}
              onChangeData={onChangeData}
            />
          ))}
        </tbody>
      </table>
      <button onClick={onSubmit}>저장</button>
    </>
  );
};

export default CrudTable;
