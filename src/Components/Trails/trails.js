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
      trails: [],
    }
  }
  getAllTrails() {
    axios.get(`http://localhost:3000/trails/`)
      .then((trails) => {
        this.setState({
        trails: trails.data,
      });
    })
      .catch(console.error);
}

  componentDidMount() {
    this.getAllTrails();
  }

  render() {

    let trailList = (
      <div>
      {this.state.trails.map((trail) =>
      <Trail
        key={trail.id}
        trailName={trail.name}
        trailDistance={trail.distance}
        trailDuration={trail.duration}
        trailElevation={trail.elevation}
        trailImage={trail.trail_image}
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
