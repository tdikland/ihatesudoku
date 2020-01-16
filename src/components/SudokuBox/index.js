import React from 'react';

const SudokuBox = (props) => {
  if (props.value === 0) {
    return (
      <p>{""}</p>
    )
  } else {
    return (
      <p>{props.value}</p>
    )
  }
};

export default SudokuBox;
