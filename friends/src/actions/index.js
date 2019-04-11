import axios from 'axios';
import axiosWithAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = userInfo => dispatch =>{
    dispatch({ type: LOGIN_START });

    axios.post("http://localhost:5000/api/login", userInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            console.log(localStorage.getItem('token'));
            dispatch({
                type: LOGIN_SUCCESS
            })
        })
        .catch(err => console.log(err));
}


export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';

export const getFriends = () => dispatch =>{
    console.log("getting friends from server");
    dispatch({ type: GET_FRIENDS_START });

    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: GET_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));


}
