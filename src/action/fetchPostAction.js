import axios from "axios";

export const fetchPostAction = () =>{
    return async(dispatch) =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log('RESPONSE.data', response.data);
        dispatch ({
            type: "FETCH_POSTS",
            payload: response.data
        })
    }
}