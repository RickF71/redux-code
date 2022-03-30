const initialState={
    favcolor:null
}

const FavColorCheckReducer = (state=initialState,action)=> {
    const newState = {...state};
    switch(action.type) {
        case 'ADD_COLOR':
            newState.favcolor.push( action.payload);
            const count = newState;
            console.log(count);
            console.log (newState.favcolor);
            break;
        case 'REMOVE_COLOR' :
            newState.favcolor = newState.favcolor.filter(favcolor => favcolor !== action.payload);
            break;
        default:
            return newState;
    }
    console.log ('newState set!!!')
    return newState;
}

export default FavColorCheckReducer;