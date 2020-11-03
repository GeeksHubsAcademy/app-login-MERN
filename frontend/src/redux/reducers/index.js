import { combineReducers } from "redux";
import movieReducer from './movie';
import userReducer from './user';
const reducer = combineReducers({
    movie: movieReducer,
    user: userReducer,
})
export default reducer;