import {connect} from 'react-redux'
import { incrementLikes, decrementLikes } from '../Redux/Actions.Js' 

function Likes(props){
    console.log(props)
    return(
        <div className = 'button-controls'>
            <button onClick={props.onIncrementLikes}>♥{props.likes}</button>
            <button onClick={props.onDicrement}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps >', state)
    const { likesReducer } = state
    return{
        likes: likesReducer.likes
    }
    
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),     
        onDicrement: () => dispatch(decrementLikes())
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)