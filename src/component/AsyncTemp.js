import React, { useEffect, useState } from 'react';

function AsyncTemp(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .catch((error) => setError(error.message));
    }, []);
    
    if (error) {
        return <span>{error}</span>
    }

    return (
        <div className='AsyncTemp'>
            {user ? <User user={user} /> :<span>Loading ...</span> }
        </div>
    );
}


// *************************** new stuff
// const[counter, setCounter] = useState(0);

// const increment = () => {
//     setCounter((val) => val++)
// }

// const decrement =() =>{
//     setCounter((val) = val--)
// }



export default AsyncTemp;