import { SingleComment } from "./SingleComment"
import { useDispatch, useSelector } from "react-redux"
import { commentCreate } from "../Redux/Actions.Js";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react"

export const Comments = (props) => {
    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const { commentsReducer } = state
        return commentsReducer.comments
    })
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = nanoid();
        dispatch(commentCreate(textComment, id));
    };
    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key = {res.id} data = {res}/>
            })}
            
        </div>
    )
}