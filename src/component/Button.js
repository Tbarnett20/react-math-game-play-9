import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
  let button;
 switch (props.answerIsCorrect) {
   case true:
   button =
   <div className="col-2">
      <button className="btn btn-success">
      <FontAwesomeIcon className="check" icon="check" />
      </button>
    </div>
     break;
   case false:
   button =
   <div className="col-2">
    <button className="btn btn-danger">
    <FontAwesomeIcon className="times" icon="times" />
    </button>
   </div>
     break;
   default:
   button = 
   <div className="col-2">
      <button className="btn" disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>=</button>
    </div>
     break;
 }
  return (
    <div className="col-2">
      {button}
    </div> 
  )
}

export default Button;