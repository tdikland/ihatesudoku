//import React, { useState } from 'react'
import React from 'react'

import SudokuBoard from '../../components/SudokuBoard'

const SolveSudoku = () => {
  //const [sudokuImage, setSudokuImage] = useState(null)
  //const [sudokuState, setSudokuState] = useState(0)

  const testSudoku = [
    1,0,0,0,0,0,0,0,0,
    0,1,0,0,0,0,0,0,0,
    0,0,1,0,0,0,0,0,0,
    0,0,0,1,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,
    0,0,0,0,0,1,0,0,0,
    0,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,1,0,
    0,0,0,0,0,0,0,0,1
  ];

  return (
    <SudokuBoard sudokuState={testSudoku} />
  )
}

export default SolveSudoku
