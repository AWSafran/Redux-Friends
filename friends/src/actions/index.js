import axios from 'axios';

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
