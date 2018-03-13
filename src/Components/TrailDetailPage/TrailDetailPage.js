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
    return (
      <div>
        <img src={this.props.trails[0].trail_image}/>
        <h1>{this.props.trails[0].name}</h1>
        <p>{this.props.trails[0].distance}</p>
        <p>{this.props.trails[0].duration}</p>
        <p>{this.props.trails[0].elevation}</p>
        <p>{this.props.trails[0].lat}</p>
        <p>{this.props.trails[0].lon}</p>
      </div>
    )
  }
}
