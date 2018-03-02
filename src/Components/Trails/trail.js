import React from 'react';
import './trails.scss';

const Trail = function(props) {

  return (
    <div>
      <p>Trail Name: {props.trailName}</p>
      <p>Distance: {props.trailDistance} miles</p>
      <p>Duration: {props.trailDuration} hours</p>
      <p>Elevation: {props.trailElevation}</p>
    </div>
  )
}

export default Trail;
