import React, { Component } from 'react';
import axios from 'axios';
import Review from '../Review/Review';
import JournalEntry from '../JournalEntry/JournalEntry';
import MyMapComponent from '../Map/Map';

import './Profile.scss';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      journals: [],
      map: null,
      email: 'l%40l.com',
    };
  };

  // gets all of the reviews for a user.
  getReviews() {
    axios.get(`http://localhost:3000/users/${this.state.email}/reviews`)
      .then((reviews) => {
      this.setState({
        reviews: reviews.data,
      });
      })
      .catch(console.error);
  };

  // gets all of the journals for a user.
  getJournals() {
    axios.get(`http://localhost:3000/users/${this.state.email}/journals`)
      .then((journals) => {
      this.setState({
        journals: journals.data,
      });
      })
      .catch(console.error);
  };

  getMap() {
    // okay, we are essentially going to fetch the latitude and longitude of all of the trails associated with the current user_id (either in reviews or journals), and then pass those coordinates each as objects in an array to the google maps api (another fetch call?). that should, in turn, allow us to return the map and serve it to the component. Currently setting up the map as a string in state. assuming it will be a url eventually.
  }

  getAllUserContent() {
    // this.getMap();
    this.getReviews();
    this.getJournals();
  }

  // loads reviews as soon as page loads.
  componentDidMount() {
    this.getAllUserContent();
  }

  // allows the user to edit a review. need to remember how to pass in the value of the review id from the click event.
  // editReview() {
  //   axios.put(`https://localhost:3000/users/${this.state.userId}/:id`)
  //     .then((editedReview) => {
  //       // set the state of the specific review and then update the reviews array.
  //     })
  //     .catch(console.error)
  // }

  render() {

    let reviewList = null;

    if (this.state.reviews.length > 0) {
      reviewList = (
        <div className="review">
        {this.state.reviews.map((review, index) =>
          <Review
          key={review.id}
          userId={review.user_id}
          rating={review.rating}
          comment={review.comment}
          />
        )}
        </div>
      );
    } else {
      reviewList = (
        <div>No reviews here. Why not create one?</div>
      );
    }

    let journalList = null;

    if (this.state.journals.length > 0) {
      journalList = (
        <div className="journal">
        {this.state.journals.map((journal, index) =>
          <JournalEntry
            key={journal.id}
            trailId={journal.trail_id}
            user_id={journal.user_id}
            title={journal.title}
            entry={journal.entry}
          />
        )}
      </div>
    );
    } else {
      journalList = (
        <div>No journals yet. Why not create one?</div>
      )
    }

    return (
      <div className="profile-container">
        <MyMapComponent />
        <div className="user-profile">
          <img className="profile-pic" src={this.props.profilePicture}/>
          <h3 className="user-name">Name: {this.props.name}</h3>
        </div>
        <div className="user-content">
          <div className="review-container">
            <h2>Your Reviews</h2>
            {reviewList}
          </div>
          <div className="journal-container">
            <h2>Your Journals</h2>
            {journalList}
          </div>
        </div>
      </div>
    );
  }
};
