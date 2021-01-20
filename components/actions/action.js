//Types
import {
    GET_USERS,
    GET_DATA
} from '../types';

//Actions

//The example for a synchronous action
export const getData = () => dispatch => {
    try {
        dispatch({
            type: GET_DATA,
            payload: {data: 'Test component'}
        });
    } catch (error) {
        console.log(error);
    }
};

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getUsers = () => async dispatch => {
    try {
        let url = 'http://rem-rest-api.herokuapp.com/api/users';
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: GET_USERS,
            payload: {users: data.data}
        });
    } catch (error) {
        console.log(error);
    }
};
