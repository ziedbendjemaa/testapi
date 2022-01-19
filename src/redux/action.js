import axios from "axios";
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./actionType"


export const getData=()=> async (dispatch)=>{
    dispatch({
        type:GET_DATA,

    });
    try {
        const res= await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(res)
        dispatch({
            type:GET_DATA_SUCCESS,
            payload:res.data,
        })
    } catch (error) {
        dispatch({
            type:GET_DATA_FAIL,
            payload:error.response.data,
        })
        
    }
}