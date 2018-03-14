import React, { Component } from 'react';
import './TrailDetailPage.scss';

export default class TrailDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createMode: false,
    };
  }

  render() {
    console.log("PROPS!!!", this.props);
    console.log("PARAMS!!!", this.props.id);
    return (
      <div>
        <img src={this.props.trails[].trail_image}/>
        <h1>{this.props.trails[].name}</h1>
        <p>{this.props.trails[].distance}</p>
        <p>{this.props.trails[].duration}</p>
        <p>{this.props.trails[].elevation}</p>
        <p>{this.props.trails[].latitude}</p>
        <p>{this.props.trails[].longitude}</p>
      </div>
    )
  }
}
