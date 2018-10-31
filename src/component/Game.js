import React from 'react';

import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

// This is the full game so all components will sit in this main component
class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };
  unselectNumber = (clickedNumber) => {
    // if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  };
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    }))
  };
  redraw = () => {
    if (this.state.redraws === 0) {
      return;
    }
    this.setState(prevState =>({
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
      selectedNumbers: [],
      answerIsCorrect: null,
      redraws: prevState.redraws - 1,
    }))
  }

  render() {
    const { selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers, redraws } = this.state
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr></hr>
        <div className="row">
         <Stars  numberOfStars={randomNumberOfStars} />
         <Button selectedNumbers={selectedNumbers}
                 redraws={redraws}
                 checkAnswer={this.checkAnswer}
                 answerIsCorrect={answerIsCorrect}
                 acceptAnswer={this.acceptAnswer}
                 redraw={this.redraw}
          />
         <Answer selectedNumbers={selectedNumbers} 
                 unselectNumber={this.unselectNumber} 
          />
     </div>
     <br></br>
     <Numbers selectedNumbers={selectedNumbers}
              selectNumber={this.selectNumber}
              usedNumbers={usedNumbers}
     />
      </div>
    )
  }
}

export default Game;