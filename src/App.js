import React from 'react';
import Button from './components/button';
import Board from './components/board';
class App extends React.Component {
  render() {
    return (
      <div>

        <p>
          Hello World
        </p>
        <h3>
          From ASAC
        </h3>
        <Button />
        <Board />
      </div>

    )
  }

}

export default App;