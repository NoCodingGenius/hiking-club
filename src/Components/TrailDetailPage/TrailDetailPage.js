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
    console.log('this.props.match', this.props.match)
    console.log('this.props', this.props)
    return (
      <div>
        <img src={this.props.trail_image}/>
        <h1>{this.props.name}</h1>
        <p>{this.props.distance}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.elevation}</p>
        <p>{this.props.lat}</p>
        <p>{this.props.lon}</p>
      </div>
    )
  }
}
