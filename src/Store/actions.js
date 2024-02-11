import axios from "axios";

export const Init = () => {
    return async dispatch => {
        const token = localStorage.getItem("access");
        dispatch({
            type: 'LOGIN',
            payload: token,
        })
    }
}