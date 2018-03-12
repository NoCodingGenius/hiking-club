import React, { Component } from 'react';
import axios from 'axios';
import MyMapComponent from '../Map/Map'
import Trail from './trail';
import './trails.scss';


export default class Trails extends Component {
  constructor(props){
    super(props)
    this.state = {
      pins: [],
    }
  }

  componentDidMount() {
    this.props.getAllTrails();
  }

  render() {

    let trailList = (
      <div>
      {this.props.trails.map((trail) =>
      <Trail
        key={trail.id}
        id={trail.id}
        trailName={trail.name}
        trailDistance={trail.distance}
        trailDuration={trail.duration}
        trailElevation={trail.elevation}
      />
      )}
    </div>
    );

    return (
      <div>
        <h1>Trails Component</h1>
        <MyMapComponent />
        {trailList}
      </div>
    )
  }
}
