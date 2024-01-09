import { 
    COMMENT_CREATE,  
    COMMENT_UPDATE, 
    COMMENT_DELETE, } from "./types";

const initialState = {
    comments: []
}
export const commentsReducer = (state = initialState, action) => {
    console.log('commnet reducer >', action )

    switch (action.type){

        case COMMENT_CREATE:

        return {
            ...state,
            comments: [...state.comments, action.data]
        }

        case COMMENT_UPDATE:
            const { data } = action
            const { comments } = state
            const indexItem = comments.findIndex( res => res.id === data.id )
            const nextComments = [
                ...comments.slice(0, indexItem),
                data,
                ...comments.slice(indexItem + 1)
            ];
        return {
            ...state,
            comments: nextComments
        }

        case COMMENT_DELETE:
            return (() => {
            const { id } = action
            const { comments } = state
            const indexItem = comments.findIndex( res => res.id === id )
            const nextComments = [
                ...comments.slice(0, indexItem),
                ...comments.slice(indexItem + 1)
            ];
        return {
            ...state,
            comments: nextComments
        }
            })();
    }
    return state
}