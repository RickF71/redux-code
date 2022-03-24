const CounterReducer = (state = 0, action) => {
    console.log('inside reducer');
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
    }
}

export default CounterReducer;