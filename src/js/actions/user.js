import axios from 'axios';

export const GET_USER = "GET_USER";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


export function getUser () {

    var id = document.cookie.split(';')[0];
    return (dispatch) => {
        console.log("getUser");
        dispatch(getUserRequest());
        axios.get('/get-user?'+ id)
        .then((response) => {

            dispatch(getUserSuccess(response.data));
        })
        .catch((error) => {
            console.log(error);
            dispatch(getUserFailure(error));
        });
    };
}

function getUserRequest () {
    return {
        type: GET_USER_REQUEST,
        isFetching: true
    };
}

function getUserSuccess (data) {
    return {
        type: GET_USER_SUCCESS,
        isFetching: false,
        data: data
    };
}

function getUserFailure (error) {
    return {
        type: GET_USER_FAILURE,
        isFetching: false,
        error: error
    };
}
