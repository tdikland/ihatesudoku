import React from 'react';

import SudokuBox from '../SudokuBox';

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
