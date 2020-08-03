import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { requestUpdateGrid, requestViewGrid } from '../actions';
import Input from '../components/Input';

const CrudTable = () => {
    // const viewGrid = useSelector((state) => state.viewGrid); //기존 데이터 출력
    // const dispatch = useDispatch();
    const [datas, setDatas] = useState(null); //기존 데이터 출력
    // console.log(datas); //초기 진입시 데이터 출력
    const handleSubmit = (dailyno, input) => {
        console.log('submit');
        console.log(dailyno);
        if (datas) {
            setDatas(
                datas.map((d) =>
                    d.dailyno === dailyno
                        ? {
                              ...d,
                              study_date: input.study_date,
                              grade: input.grade,
                              original_id: input.original_id,
                          }
                        : d
                )
            );
        }

        console.log(dailyno, input);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post('http://localhost:6373/table/view-grid');
                setDatas(result.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    //***** saga로 하고 싶음 ****//
    // useEffect(()=>{
    //     dispatchEvent(requestViewGrid());
    // },[]);
    console.log(datas);
    if (datas) {
        console.log(datas[1]);
    }

    //데이터 저장하기
    const onSave = (e) => {
        console.log(`onSave..`);
        console.log(datas);
        // axios.post('http://localhost:6373/table/update-grid',{});

        // console.log(`divpatch(requestUpdatedGrid(datas)), ${datas}`);
    };

    //페이지 첫 진입시 데이터 없을 때는 로딩중
    // if (!datas) {
    //     return <h3>로딩..</h3>;
    // }
    if (!datas) return null;

    return (
        <>
            <h3>테이블 만들기</h3>
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
                            handleSubmit={handleSubmit}
                        />
                    ))}
                </tbody>
            </table>
            <button onClick={onSave}>저장</button>
        </>
    );
};

export default CrudTable;
