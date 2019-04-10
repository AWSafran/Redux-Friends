import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.friends}
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
