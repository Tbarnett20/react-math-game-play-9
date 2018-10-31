import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
  let button;
 switch (props.answerIsCorrect) {
   case true:
   button =
   <div className="col-2 text-center">
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      <FontAwesomeIcon className="check" icon="check" />
      </button>
    </div>
     break;
   case false:
   button =
   <div className="col-2 text-center">
    <button className="btn btn-danger">
    <FontAwesomeIcon className="times" icon="times" />
    </button>
   </div>
     break;
   default:
   button = 
   <div className="col-2 text-center">
      <button className="btn" disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>=</button>
    </div>
     break;
 }
  return (
    <div className="col-2 text-center">
      {button}
      <br></br>
      <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0}>
        <FontAwesomeIcon className="redo" icon="redo" /> {props.redraws}
      </button>
    </div> 
  )
}

export default Button;