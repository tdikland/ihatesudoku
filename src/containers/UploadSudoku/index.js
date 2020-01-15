import React from 'react'
import Button from '../../components/Button'

class UploadSudoku extends React.Component {
  state = {
    "count": 1
  }

  incrementCounter() {
    let currentCount = this.state.count;
    this.setState({"count": currentCount + 1});
  }

  render() {
    return (
      <div>
        <button type="button" onClick={()=>{this.incrementCounter()}}> click meee! </button>
        <p>the button was clicked {this.state.count} times</p>
      </div>
    )
  }
}

export default UploadSudoku
