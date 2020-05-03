import {
    FETCH_ANS_REQUEST,
    FETCH_ANS_SUCCESS,
    FETCH_ANS_FAILURE,
} from './Action'

const initialState = {
    allAns: [],
    isAnsLoading: false,
    isAnsRequest: false,
    isAns: false,
    error: ''
}

const ansReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANS_REQUEST:
            return {
                ...state,
                isAnsLoading: true,
                isAnsRequest: true,
            }

        case FETCH_ANS_SUCCESS:
            return {
                ...state,
                isAnsLoading: false,
                isAns: true,
                allAns: action.data,
            }

        case FETCH_ANS_FAILURE:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default ansReducer;