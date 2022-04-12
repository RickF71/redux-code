import React from 'react';
import {useState, useEffect} from 'react';
import {connect,createStoreHook,useDispatch} from 'react-redux';
import ColorReducer from '../reducer/FavColorReducer';
import { createStore } from 'redux';
import FavColorReducer from '../reducer/FavColorReducer';

// const store=createStore(FavColorReducer);


function FavoriteColor(props) {
    let dispatch = useDispatch();
    // const favcolor = useState(null);
    const [favcolor, setFavcolor] = useState(null);
    const handleChange = (e) => {
        setFavcolor(e.target.value);
        dispatch({
            type: "CHANGE_COLOR",
            payload:favcolor
        })
    }
   
    return (
        <div>
            <h1>My favorite color is {favcolor}</h1>
            <input type="radio" 
                value="Yellow" 
                name="favcolor" onClick={handleChange} /> Yellow <br />
            <input type="radio" value="Blue" name="favcolor" onClick={handleChange} /> Blue<br />
            <input type="radio" value="Green" name="favcolor" onClick={handleChange} /> Green<br />
            <input type="radio" value="Brown" name="favcolor" onClick={handleChange} /> Brown<br />
            <input type="radio" value="Red" name="favcolor" onClick={handleChange} /> Red<br />
            <input type="radio" value="Black" name="favcolor" onClick={handleChange} /> Black<br />
            <input type="radio" value="Orange" name="favcolor" onClick={handleChange} /> Orange<br />
            <input type="radio" value="Violet" name="favcolor" onClick={handleChange} /> Violet<br />
            <input type="radio" value="Pink" name="favcolor" onClick={handleChange} /> Pink<br />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeColor: (favcolor) => dispatch ({
            type: "CHANGE_COLOR", payload: favcolor
        })
    }
}
// export default FavoriteColor;
export default connect(mapStateToProps,mapDispatchToProps) (FavoriteColor)