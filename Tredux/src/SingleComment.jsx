import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commentUpdate } from '../Redux/Actions.Js';


export const SingleComment = ({ data }) => {
    const [commentText, setCommentsText] = useState('')
    const {text, id} = data;
    const dispatch = useDispatch();

    useEffect(() =>{
        if (text){
            setCommentsText(text)
        }
    },[text])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id))
    }

    const handleInput = (e) => {
        setCommentsText(e.target.value)
    }

    return(
        <form onSubmit = {handleUpdate} className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value = {commentText} onChange ={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}