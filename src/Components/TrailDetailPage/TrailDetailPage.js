import React, {Component} from 'react';
import './TrailDetailPage.scss';
import CreateJournal from '../CreateJournal/CreateJournal.js';

export default class TrailDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createJournal: false,
      createReview: false,
      trailId: this.props.match.params.id - 1,
    };

    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(event) {
    if (event.target.className === "journal-button") {
      this.setState({
        createJournal: true,
      })
    };

    if (event.target.className === "review-button") {
      this.setState({
        createReview: true,
      })
    }
  };

  render() {

    return (
      <div>

        <img src={this.props.trails[this.state.trailId].trail_image}/>
        <h1>{this.props.trails[this.state.trailId].name}</h1>
        <p>{this.props.trails[this.state.trailId].distance}</p>
        <p>{this.props.trails[this.state.trailId].duration}</p>
        <p>{this.props.trails[this.state.trailId].elevation}</p>
        <p>{this.props.trails[this.state.trailId].latitude}</p>
        <p>{this.props.trails[this.state.trailId].longitude}</p>

        <div>
          <button className="journal-button" onClick={this.buttonClick}>Create Journal</button>
          <button className="review-button" onClick={this.buttonClick}>Create Review</button>
        </div>

        <CreateJournal
          trailId={this.state.trailId}
          title={this.props.title}
          entry={this.props.entry}
          submitJournalEntry={this.props.submitJournalEntry}
          onInputChange={this.props.onInputChange}
        />

      </div>
    )
  }
}
