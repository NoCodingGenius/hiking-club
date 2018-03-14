import React from 'react';
import './trails.scss';
import { Link } from 'react-router-dom';
import TrailDetailPage from '../TrailDetailPage/TrailDetailPage';

const Trail = function(props) {

  return (
    <div>
      <Link to={`/traildetail/${props.id}`} params={{id: props.id}}><p>Trail Name: {props.trailName}</p></Link>
      <p>Distance: {props.trailDistance} miles</p>
      <p>Duration: {props.trailDuration} hours</p>
      <p>Elevation: {props.trailElevation}</p>
    </div>
  )
}

export default Trail;
