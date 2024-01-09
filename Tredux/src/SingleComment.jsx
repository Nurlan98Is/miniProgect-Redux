import { useState, useEffect} from 'react'

export const SingleComment = ({ data }) => {
    const [commentText, setCommentsText] = useState('')
    const {text, id} = data;
    useEffect(() =>{
        if (text){
            setCommentsText(text)
        }
    },[text])

    return(
        <form  className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value = {commentText}/>
            <input type="submit" hidden/>
        </form>
    )
}