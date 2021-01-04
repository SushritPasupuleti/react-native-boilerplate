import {
    SETAUTHINFO
}
    from './../actions/types';

const initialState = {
    UserAuthData: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SETAUTHINFO:
            {
                return {
                    ...state,
                    UserAuthData: action.payload
                };
            }

        default:
            {
                return state
            }
    }
}