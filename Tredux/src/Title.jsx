import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../Redux/Actions.Js";
import { inputReducer } from "../Redux/InputReduces";

export const Title = (props) => {
    console.log('title >', props)

    const text = useSelector(state =>{
        const {inputReducer} = state
        return inputReducer.text
    })

    const dispatch = useDispatch()

    const handleChange = (e) => dispatch(inputText(e.target.value))

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange ={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}