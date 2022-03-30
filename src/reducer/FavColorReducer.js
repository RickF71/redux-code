const initialState={
    color:null
}

const FavColorReducer = (state=initialState,action)=> {
    console.log('FavColorReducer called');
    const newState = {...state};
    switch(action.type) {
        case 'CHANGE_COLOR':
            newState.favcolor = action.payload;
            console.log (newState.favcolor);
            break;
        default:
            return newState;
    }
    return newState;
}

export default FavColorReducer;