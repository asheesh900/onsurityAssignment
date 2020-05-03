import axios from 'axios'

// action type

export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";

// action creators

export const questionsRequest = () => {
    return {
        type: FETCH_QUESTIONS_REQUEST
    }
}

export const questionsSuccess = (data) => {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        data: data
    }
}

export const questionsFailure = (error) => {
    return {
        type: FETCH_QUESTIONS_FAILURE,
        error: error
    }
}

// action to fetch the data

export const getQuestions = (tag) => {
    let url = `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`;
    return dispatch => {
        dispatch(questionsRequest())

        return axios
            .get(url)
            .then(res => {
                console.log(res.data)
              return dispatch(questionsSuccess(res.data))
            })
            .catch(err => {
               return dispatch(questionsFailure(err))
            })
    }
}