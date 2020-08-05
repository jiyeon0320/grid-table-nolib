import React, { useState } from 'react';

//인풋 컴포넌트
const Input = ({ data, onChangeData, index }) => {
  // console.log(input.study_date);
  const { study_date, grade, original_id, dailyno, stat } = data;
  // console.log(input);

  const onClick = () => {
    onChangeData(
      {
        ...data,
        stat: 'U',
      },
      index
    );
  };

  const onChange = (name) => (e) => {
    console.log('save');
    console.log(e);
    onChangeData(
      {
        ...data,
        [name]: e.target.value,
      },
      index
    );
  };

  return (
    <>
      {stat === 'U' || stat === 'I' ? (
        <tr>
          <td>
            <input value={study_date} onChange={onChange('study_date')} />
          </td>
          <td>
            <input value={grade} onChange={onChange('grade')} />
          </td>
          <td>
            <input value={original_id} onChange={onChange('original_id')} />
          </td>
          <td>{dailyno}</td>
        </tr>
      ) : (
        <tr>
          <td name={study_date} onClick={onClick}>
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
