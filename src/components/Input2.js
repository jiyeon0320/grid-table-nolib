import React, { useState } from 'react';

//인풋 컴포넌트
const Input2 = ({ data, handleSubmit }) => {
    const [input, setInput] = useState(data);
    const [edit, setEdit] = useState(false);
    // console.log(input.study_date);
    const { study_date, grade, original_id, dailyno } = input;
    // console.log(input);

    const onClick = () => {
        setEdit(!edit);
        console.log('click');
    };
    const onChange = (e) => {
        console.log(e.target.value);
        console.log(data.dailyno);
        setInput(e.target.value);
    };
    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        handleSubmit(data.dailyno, input);
    };
    return (
        <form onSubmit={onSubmit}>
            {edit
                ? () =>
                      input.map((d) => (
                          <>
                              <input value={d.study_date} onChange={onChange} />
                              <input value={d.grade} onChange={onChange} />
                              <input value={d.original_id} onChange={onChange} />
                              <div value={d.dailyno} />
                          </>
                      ))
                : () =>
                      input.map((d) => (
                          <>
                              <div name={study_date} onClick={onClick}>
                                  {d.study_date}
                              </div>
                              <div name={grade} onClick={onClick}>
                                  {d.grade}
                              </div>
                              <div name={original_id} onClick={onClick}>
                                  {d.original_id}
                              </div>
                              <div>{d.dailyno}</div>
                          </>
                      ))}
        </form>
    );
};

export default Input2;
