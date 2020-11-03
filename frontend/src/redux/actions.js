import axios from 'axios';
import { GET_ALL_USERS } from './types';
import store from './store';
export const getAllUsers = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users', {
        headers: {
            Authorization: token
        }
    })
    store.dispatch({ type: GET_ALL_USERS, payload: res.data });

}