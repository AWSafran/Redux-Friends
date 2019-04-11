import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    friends: state.friends
  }
}

export default connect(mapStateToProps, {})(App);
