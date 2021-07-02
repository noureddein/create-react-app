import React from 'react';
import Square from './square';

class Board extends React.Component {
  render() {
    return (
      <div>
        <Square squareNumber={'One'} />
        <Square squareNumber={'Tow'} />
        <Square squareNumber={'three'} />
        <Square squareNumber={'four'} />
        <Square squareNumber={'five'} />
      </div>
    )
  }
}

export default Board;