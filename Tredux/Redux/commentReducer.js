import { COMMENT_CREATE, COMMENT_UPDATE } from "./types";

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
    }
    return state
}