import { INPUT_TEXT } from "./types";
import { inputText } from "./Actions.Js";
const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case INPUT_TEXT:
            return {
                ...state,
               text: action.text
            }
        default:
            return state
        }
}