import {
    SETCOUNT
} from './types';

export const setCount = (count) => dispatch => {
    //socket.emit("getStateList", {get: true});
    dispatch({
        type: SETCOUNT,
        payload: count
    })
}