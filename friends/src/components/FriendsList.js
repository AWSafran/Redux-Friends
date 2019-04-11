import React, { Component } from 'react';
import { getFriends } from '../actions/index';
import { connect } from 'react-redux';

class FriendsList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        return(
            <div className="friendsListContainer">
                {this.props.friends.map(friend => <div>{friend.name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        friends: state.friends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);