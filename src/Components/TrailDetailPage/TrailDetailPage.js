import React, {Component} from 'react';
import './TrailDetailPage.scss';

export default class TrailDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createJournal: false,
      createReview: false,
    };

    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(event) {
    console.log("event.target.className", event.target.className);
    if (event.target.className === "journal-button") {
      console.log("JOURNAL BUTTON WAS CLICKED!!!");
      this.setState({
        createJournal: true,
      })
    };

    if (event.target.className === "review-button") {
      console.log("REVIEW BUTTON WAS CLICKED!!!");
      this.setState({
        createReview: true,
      })
    }
  };

  render() {
    return (
      <div>

        <img src={this.props.trails[this.props.match.params.id - 1].trail_image}/>
        <h1>{this.props.trails[this.props.match.params.id - 1].name}</h1>
        <p>{this.props.trails[this.props.match.params.id - 1].distance}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].duration}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].elevation}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].latitude}</p>
        <p>{this.props.trails[this.props.match.params.id - 1].longitude}</p>

        <div>
          <button className="journal-button" onClick={this.buttonClick}>Create Journal</button>
          <button className="review-button" onClick={this.buttonClick}>Create Review</button>
        </div>

      </div>
    )
  }
}
