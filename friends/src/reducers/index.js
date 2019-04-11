import { LOGIN_START } from "../actions";

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
                loggingIn: true
            })
        default:
        return{
            ...state
        };
    };
};

export default reducer;