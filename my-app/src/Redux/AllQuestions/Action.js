import axios from 'axios';

// action type

export const FETCH_ALL_QUESTIONS_REQUEST = "FETCH_ALL_QUESTIONS_REQUEST";
export const FETCH_ALL_QUESTIONS_SUCCESS = "FETCH_ALL_QUESTIONS_SUCCESS";
export const FETCH_ALL_QUESTIONS_FAILURE = "FETCH_ALL_QUESTIONS_FAILURE";

// action creators

export const allQuestionsRequest = () => {
    return {
        type: FETCH_ALL_QUESTIONS_REQUEST
    }
}

export const allQuestionsSuccess = (data) => {
    return {
        type: FETCH_ALL_QUESTIONS_SUCCESS,
        data: data
    }
}

export const allQuestionsFailure = (error) => {
    return {
        type: FETCH_ALL_QUESTIONS_FAILURE,
        error: error
    }
}

// action to fetch the data

export const getAllQuestions = () => {
    let url = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow`
    return dispatch => {
        dispatch(allQuestionsRequest())

        return axios
            .get(url)
            .then(res => {
                console.log(res.data)
                dispatch(allQuestionsSuccess(res.data))
            }
                )
            .catch(err => dispatch(allQuestionsFailure(err)))
    }
}
