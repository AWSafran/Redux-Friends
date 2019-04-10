const initialState = {
    friends: ["Andrew"]
};

function reducer(state = initialState, action){
    switch(action.type){
        default:
        return{
            ...initialState
        };
    };
};

export default reducer;