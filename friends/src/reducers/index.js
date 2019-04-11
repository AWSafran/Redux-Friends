import { LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    loggingIn: false,
    fetchingFriends: false,
    error: null,
    friends: [],
    addingFriend: false
};

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return({
                ...state,
                loggingIn: true,
                error: ''
            })
        case LOGIN_SUCCESS:
            return({
                ...state,
                loggingIn: false,
                error: ''
            })
        default:
        return{
            ...state
        };
    };
};

export default reducer;