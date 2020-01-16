import React, { useState } from 'react'

import SudokuBoard from '../../components/SudokuBoard'

const SolveSudoku = () => {
  const [sudokuStartState, setSudokuStartState] = useState([])
  const [sudokuSolutionState, setSudokuSolutionState] = useState([])

  const easySudoku = [
    4,0,1,2,9,0,0,7,5,
    2,0,0,3,0,0,8,0,0,
    0,7,0,0,8,0,0,0,6,
    0,0,0,1,0,3,0,6,2,
    1,0,5,0,0,0,4,0,3,
    7,3,0,6,0,8,0,0,0,
    6,0,0,0,2,0,0,3,0,
    0,0,7,0,0,1,0,0,4,
    8,9,0,0,6,5,1,0,7
  ]

  const fetchSudokuSolution = (sudokuState) => {
    fetch("http://localhost:8888/api/solve/", {
      method: "POST",
      body: JSON.stringify({
        sudokuState: sudokuState
      })
    })
      .then(response => response.json())
      .then(data => setSudokuSolutionState(data.data.sudokuSolution))
  }

  return (
    <div>
      <SudokuBoard sudokuState={sudokuStartState} />
      <button type='button' onClick={() => setSudokuStartState(easySudoku)}>
        Click to set easy Sudoku
      </button>
      <button type='button' onClick={() => fetchSudokuSolution(sudokuStartState)}>
        Click to set fetch solution
      </button>
      <SudokuBoard sudokuState={sudokuSolutionState} />
    </div>
  )
}

export default SolveSudoku
