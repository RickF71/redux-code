
export const MyLogger = store => {
    return next => {
        return action =>{
            console.log('Middleware!');
            return next(action);
        }
    }
}

export default MyLogger;