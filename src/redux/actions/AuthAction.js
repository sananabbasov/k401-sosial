import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../types/AuthTypes"


const initialState = {
    data: null,
    success: false,
    isLoading: true
}

export const authLogin = (userEmail, userPassword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LOGIN,
            payload: initialState
        })

        let data = await fetch("https://localhost:7147/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            })
        }).then(x => x.json())
        initialState.data = data
        initialState.isLoading = false;
        initialState.success = true;
        

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


    } catch (error) {

        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error
        })

    }

}


export const auhtLogout = () => (dispatch,getState) =>{

    initialState.data = null
    initialState.isLoading=false;
    initialState.success=false;
    dispatch({
        type:USER_LOGOUT,
        payload:initialState
    })
    
}