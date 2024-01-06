import { combineReducers } from 'redux';
import { likesReducer } from '../Redux/LikesReducer'
export const rootReducer = combineReducers({
    likesReducer: likesReducer
})