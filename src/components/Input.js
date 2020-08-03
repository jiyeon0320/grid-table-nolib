import React, { useState } from 'react';

//인풋 컴포넌트
const Input = ({ data, handleSubmit }) => {
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
        <>
            {edit ? (
                <tr onSubmit={onSubmit}>
                    <td>
                        <input value={study_date} onChange={onChange} />
                    </td>
                    <td>
                        <input value={grade} onChange={onChange} />
                    </td>
                    <td>
                        <input value={original_id} onChange={onChange} />
                    </td>
                    <td>{dailyno}</td>
                </tr>
            ) : (
                <tr onSubmit={onSubmit}>
                    <td name={data.study_date} onClick={onClick}>
                        {study_date}
                    </td>
                    <td name={grade} onClick={onClick}>
                        {grade}
                    </td>
                    <td name={original_id} onClick={onClick}>
                        {original_id}
                    </td>
                    <td name={dailyno} onClick={onClick}>
                        {dailyno}
                    </td>
                </tr>
            )}
            {/* <button></button> */}
        </>
    );
};

export default Input;
