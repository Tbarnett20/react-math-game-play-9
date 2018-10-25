import React from 'react';

import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <Stars />
        <Button />
        <Answer />
      </div>
    )
  }
}

export default Game;