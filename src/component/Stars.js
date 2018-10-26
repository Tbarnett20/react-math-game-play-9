import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var _ = require('lodash')

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

  return (
    <div className="col-5">
     {_.range(numberOfStars).map(i =>
      <FontAwesomeIcon className="star" icon="star" />
      )}
    </div>
  )
}

export default Stars;