import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var _ = require('lodash')

const Stars = (props) => {
  return (
    <div className="col-5">
     {_.range(props.numberOfStars).map(i =>
      <FontAwesomeIcon className="star" icon="star" />
      )}
    </div>
  )
}

export default Stars;