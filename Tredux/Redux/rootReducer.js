import { combineReducers } from 'redux';
import { likesReducer } from '../Redux/LikesReducer'
import { inputReducer } from './InputReduces'
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
})