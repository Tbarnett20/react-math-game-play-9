import React from 'react';

import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

// This is the full game so all components will sit in this main component
class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr></hr>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
     </div>
     <br></br>
     <Numbers />
      </div>
    )
  }
}

export default Game;