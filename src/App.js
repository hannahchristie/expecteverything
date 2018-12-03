import React, { Component } from 'react';
import {
  MDBContainer,
} from 'mdbreact';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Listen from './Listen';
import Discover from './Discover';
import Fight from './Fight';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header/>
          <MDBContainer>
            <Route path="/" exact component={Home}/>
            <Route path="/listen" component={Listen}/>
            <Route path="/discover" component={Discover}/>
            <Route path="/fight" component={Fight}/>
          </MDBContainer>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;