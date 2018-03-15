import React, { Component } from 'react';
import './CreateJournal.scss';

export default class CreateJournal extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
      <form onSubmit={this.props.submitJournalEntry}>
        <label>Title:</label>
        <input
          title={this.props.title}
          onChange={this.props.onInputChange}
        />

        <label>Journal Entry:</label>
        <textarea
          rows="20"
          cols="30"
          entry={this.props.entry}
          onChange={this.props.onInputChange}
        />

        <button className="journal-submit-button">Submit</button>
      </form>
    </div>
  )
  }

}
