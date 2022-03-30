import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostAction } from '../action/fetchPostAction';
import { useSelector } from 'react-redux';

function Posts(props) {
    const dispatch = useDispatch();
    const values = useSelector(state=>state)
    const titles = values.map((val) =>
        <li key = {val.id}>{val.title}</li>)
    useEffect(() => {
        dispatch(fetchPostAction());
    }, [])
    return (
        <div>
            <h1>Data from API call</h1>
             <p>{titles}</p>
        </div>
    );
}

export default Posts;