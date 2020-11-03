import axios from 'axios';
import { GET_ALL_MOVIES } from '../types';
import store from './store';

export const getAllMovies = async() => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL + '/movies');
    store.dispatch({ type: GET_ALL_MOVIES, payload: res.data })
}