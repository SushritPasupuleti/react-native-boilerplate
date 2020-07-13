import {
    SETCOUNT
}
    from './../actions/types';

const initialState = {
    count: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SETCOUNT:
            {
                return {
                    ...state,
                    count: action.payload
                };
            }

        default:
            {
                return state
            }
    }
}