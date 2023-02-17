import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h2>Home Page</h2>
        <p>This is test message</p>
        <p>Test test</p>
      </div>
    );
  }
}

export default HomePage;
