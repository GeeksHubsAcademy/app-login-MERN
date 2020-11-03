import axios from 'axios';
import { GET_ALL_USERS, GET_PROFILE } from '../types';
import store from '../store';
import { LOGIN } from '../types';

export const getAllUsers = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users', {
        headers: {
            Authorization: token
        }
    })
    store.dispatch({ type: GET_ALL_USERS, payload: res.data });

}
export const login = async(user) => {
    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/users/login', user)
    store.dispatch({ type: LOGIN, payload: res.data.user })
    localStorage.setItem('authToken', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user))

}
export const getUser = async(token) => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/users/profile', {
        headers: {
            Authorization: token
        }
    })
    store.dispatch({ type: GET_PROFILE, payload: res.data });
}