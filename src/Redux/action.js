//Create ActionCreator functions here
import { GET_SHOES_FAILURE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS } from "./actionTypes";
import axios from "axios"

export const getShoesRequest=(dispatch)=>{
    dispatch({type:GET_SHOES_REQUEST})
    axios.get("http://localhost:8080/shoes")
    .then((res)=>(dispatch({type:GET_SHOES_SUCCESS,payload:res.data})))
    .catch((err)=>(dispatch({type:GET_SHOES_FAILURE})))
}