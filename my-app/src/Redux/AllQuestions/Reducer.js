import {
    FETCH_ALL_QUESTIONS_REQUEST,
    FETCH_ALL_QUESTIONS_SUCCESS,
    FETCH_ALL_QUESTIONS_FAILURE,
} from './Action'

const initialState = {
    allQuestions: [],
    isRequest: false,
    isLoading: false,
    isData: false,
    error: '',
}

const allQuestionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_QUESTIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isRequest: true,
            }

        case FETCH_ALL_QUESTIONS_SUCCESS:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                isData: true,
                allQuestions: action.data
            }

        case FETCH_ALL_QUESTIONS_SUCCESS:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}

export default allQuestionsReducer