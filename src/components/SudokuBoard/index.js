import React from 'react';

import SudokuBox from '../SudokuBox';
// sudokuState is an array of length 81 [1,0,2,1,2,3, ... ]

const sudokuStateToRows = (sudokuState) => {
  let rows = []
  for (let i=0; i < 9; i++) {
    let rowToAdd = []
    for (let j=0; j < 9; j++) {
      rowToAdd.push(sudokuState[9*i+j])
    }
    rows.push(rowToAdd)
  }
  return rows
}

const SudokuBoard = (props) => {
  const sudokuState = props.sudokuState;
  const sudokuRows = sudokuStateToRows(sudokuState)
  console.log(sudokuRows)
  return (
    <table className="sudoku">
      <tbody>
        {sudokuRows.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((boxValue, columnIndex) => (
                <td key={columnIndex}>
                  <SudokuBox value={boxValue} />
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SudokuBoard
