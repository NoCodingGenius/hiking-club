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
    console.log("MATCH.params.id:", this.props.match.params.id);
    return (
      <div>
        <img src={this.props.trails[this.props.match.params.id - 1].trail_image}/>
        <h1>{this.props.trails[this.props.match.params.id - 1].name}</h1>
        <p>{this.props.trails[this.props.match.params.id - 1].distance}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].duration}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].elevation}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].latitude}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].longitude}</p>
      </div>
    )
  }
}
