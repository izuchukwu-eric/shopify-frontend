import {GET_RESPONSE, GET_RESPONSE_FAIL} from "../actions/types"

const initialState = {
    loading: true,
    response: []
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_RESPONSE:
            return {
                ...state,
                loading: false,
                ...state.response.unshift(payload)
            }
        case GET_RESPONSE_FAIL: 
            return {
                ...state,
                loading: false,
                reponse: null,
            }
        default: 
        return state;    
    }
}