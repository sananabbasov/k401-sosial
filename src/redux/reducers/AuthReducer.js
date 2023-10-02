import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../types/AuthTypes";


const initialState = {
    data: null,
    success: false,
    isLoading: true
}
export const AuthReducer = (state = { user: [] }, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGOUT:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}