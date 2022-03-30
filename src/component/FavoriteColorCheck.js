import React from 'react';
import {useState, useEffect} from 'react';
import {connect,createStoreHook,useDispatch, useSelector} from 'react-redux';
import ColorReducerCheck from '../reducer/FavColorCheckReducer';
import { createStore } from 'redux';
import { Checkbox } from './Checkbox';
// import FavColorCheckReducer from '../reducer/FavColorCheckReducer';

// const store=createStore(FavColorReducer);

function FavoriteColorCheck() {

    let dispatch = useDispatch();
    
    const [likings,setLikings] = useState();
    
    const colorVal = useSelector(state => state.favcolor);
    const [preferences, setPreferences] = useState( 
        { 
            'yellow': false, 
            'blue': false, 
            'green': false, 
            'brown': false, 
            'red': false
        } ) 
    console.log ('changes : ', colorVal);


    function togglePreference(favcolor) { 
        preferences[favcolor] = !preferences[favcolor]; 
        // Update favcolor likings 
        let newLikings = ""; 
        for ( var favcolor in preferences ) { 
          if ( preferences[favcolor] ) { 
            newLikings += favcolor + " "; 
          } 
        } 
        setLikings(newLikings); 
      } 
   
    return (
        <div>
            {/* <h1>My favorite color is {favcolor}</h1> */}
            <Checkbox onText="yellow" offText="yellow" togglePreference={togglePreference} favcolor="yellow" />
            <Checkbox onText="blue" offText="blue" togglePreference={togglePreference} favcolor="blue" />
            <Checkbox onText="green" offText="green" togglePreference={togglePreference} favcolor="green" />
            <Checkbox onText="brown" offText="brown" togglePreference={togglePreference} favcolor="brown" />
            <Checkbox onText="red" offText="red" togglePreference={togglePreference} favcolor="red" />
            <h1> Liked Colors ... {likings}</h1>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state
    }
}
   
// export default FavoriteColor;
export default FavoriteColorCheck