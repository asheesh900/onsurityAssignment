import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE
} from './Action'

const initialState = {
    questionsByTag: [],
    isLoading: false,
    isRequest: false,
    isData: false,
    error: "",

}

const top10QsByTagreducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isRequest: true,
            }

        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                isData: true,
                isLoading: false,
                questionsByTag: action.data,

            }

        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default top10QsByTagreducer;