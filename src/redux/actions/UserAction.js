import { BASE_URL } from "../../config/config"
import { USER_DATA_ERROR, USER_DATA_LOADING, USER_DATA_SUCCESS } from "../types/UserTypes"


const initialState = {
    data: null,
    success: false,
    isLoading: true
}


export const getUserByToken = (token) => async (dispatch,getState) =>{

    try {
        dispatch({
            type: USER_DATA_LOADING,
            payload:initialState
        })
        
        var res = await fetch(`${BASE_URL}/Auth/me`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(x=>x.json())
        initialState.data = res.data;
        initialState.isLoading = false;
        initialState.success = true;
        dispatch({
            type: USER_DATA_SUCCESS,
            payload:initialState
        })
    } catch (error) {
        initialState.data = error;
        initialState.isLoading = false;
        initialState.success = false;
        dispatch({
            type: USER_DATA_ERROR,
            payload:initialState
        })
    }



}