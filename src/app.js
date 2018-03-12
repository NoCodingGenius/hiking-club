import React, {Component} from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import './index.scss';

import SignUp from './Components/Postcard/SignUp';
import SignIn from './Components/Postcard/SignIn'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Trails from './Components/Trails/trails';
import JournalDetail from './Components/JournalDetail/JournalDetail';
import SplashPage from './Components/SplashPage/SplashPage';
require('../public/fonts/Antic-Slab-Regular/Antic-Slab-Regular.scss');
require('../public/fonts/Orienta-Regular/Orienta-Regular.scss');
require('../public/fonts/Yellowtail-Regular/Yellowtail-Regular.scss');


export default class App extends Component {
  constructor(props) {
    super(props);

    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.openSignInModal = this.openSignInModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fakeSignUp = this.fakeSignUp.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getJournals = this.getJournals.bind(this);

    this.state = {
      isLoggedIn: false,
      postCardShowing: false,
      hasAccount: false,
      userId: '',
      name: '',
      email: 'l%40l.com',
      reviews: [],
      journals: [],
    }
  };

  // this will call the user profile on page load.
  componentDidMount() {
    this.showProfile();
  };

  showProfile() {
    // const fakeUser = {
    //   userId: 4,
    //   name: 'Smokey Bear',
    //   email: 'smokey@thebear.com'
    // }
    axios.get(`https://localhost:3000/users/${this.state.email}`)
      .then((user) => {
        const { name, email } = user;
        const profilePicture = user.profile_picture;
        this.setState({
          userId: user.id,
          name: user.name,
          email: user.email,
        });
      })
      .catch(console.error);
  };

  openSignUpModal(userStatus) {
    this.setState({
      postCardShowing: true,
      hasAccount: false,
    })
  };

  openSignInModal(userStatus) {
    this.setState({
      postCardShowing: true,
      hasAccount: true,
    })
  }

  closeModal() {
    this.setState({
      postCardShowing: false,
    })
  };

  fakeSignUp(event) {
    event.preventDefault();
    this.setState({
      isLoggedIn: true,
      postCardShowing: false,
    })
  }

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

  render() {
    let modal = null;
    if (!this.state.hasAccount) {
      modal = (
        <SignUp
        postCardShowing={this.state.postCardShowing}
        closeModal={this.closeModal}
        fakeSignUp={this.fakeSignUp}
        />
      )
    } else {
      modal = (
        <SignIn
        postCardShowing={this.state.postCardShowing}
        closeModal={this.closeModal}
        fakeSignUp={this.fakeSignUp}
        />
      )
    }
    // TODO: maybe look at how to use a layout to render the header and footer

      return (
        <div className="app-container">
          {modal}
          <Navbar
          isLoggedIn={this.state.isLoggedIn}
          openSignUpModal={this.openSignUpModal}
          openSignInModal={this.openSignInModal}
          />

            <Switch>
              <Route exact path="/" component={SplashPage}/>
              <Route exact path="/journal" component={JournalDetail} />
              <Route exact path="/trails" render={(props) => (
                  <Trails trailName={this.state.trailName}/>)}/>

              <Route exact path="/profile" render={(props) => (
                <Profile
                  name={this.state.name}
                  reviews={this.state.reviews}
                  journals={this.state.journals}
                  email={this.state.email}
                  getReviews={this.getReviews}
                  getJournals={this.getJournals}
                />)} />

            </Switch>
        </div>
      );
  };
};
