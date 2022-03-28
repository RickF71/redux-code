import React from 'react';
import {useState, useEffect} from 'react';
import {connect,createStoreHook,useDispatch} from 'react-redux';
import ColorReducerCheck from '../reducer/FavColorCheckReducer';
import { createStore } from 'redux';
// import FavColorCheckReducer from '../reducer/FavColorCheckReducer';

// const store=createStore(FavColorReducer);


function FavoriteColorCheck(props) {
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
            <input type="checkbox" value="Yellow" name="favcolor" onClick={handleChange} /> Yellow <br />
            <input type="checkbox" value="Blue" name="favcolor" onClick={handleChange} /> Blue<br />
            <input type="checkbox" value="Green" name="favcolor" onClick={handleChange} /> Green<br />
            <input type="checkbox" value="Brown" name="favcolor" onClick={handleChange} /> Brown<br />
            <input type="checkbox" value="Red" name="favcolor" onClick={handleChange} /> Red<br />
            <input type="checkbox" value="Black" name="favcolor" onClick={handleChange} /> Black<br />
            <input type="checkbox" value="Orange" name="favcolor" onClick={handleChange} /> Orange<br />
            <input type="checkbox" value="Violet" name="favcolor" onClick={handleChange} /> Violet<br />
            <input type="checkbox" value="Pink" name="favcolor" onClick={handleChange} /> Pink<br />
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
export default connect(mapStateToProps,mapDispatchToProps) (FavoriteColorCheck)