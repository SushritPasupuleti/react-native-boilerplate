import {
    SETAUTHINFO
} from './types';

export const setAuth = (user) => dispatch => {
    //socket.emit("getStateList", {get: true});
    dispatch({
        type: SETAUTHINFO,
        payload: user
    })
}