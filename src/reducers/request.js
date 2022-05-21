import {GET_RESPONSE, GET_RESPONSE_FAIL} from "../actions/types"

const initialState = {
    isAuthenticated: null,
    loading: true,
    response: []
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_RESPONSE:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                ...state.response.unshift(payload)
            }
        case GET_RESPONSE_FAIL: 
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                reponse: null,
            }
        default: 
        return state;    
    }
}