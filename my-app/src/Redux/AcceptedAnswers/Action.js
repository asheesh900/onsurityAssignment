import axios from 'axios';

// action types

export const FETCH_ANS_REQUEST = "FETCH_ANS_REQUEST";
export const FETCH_ANS_SUCCESS = "FETCH_ANS_SUCCESS";
export const FETCH_ANS_FAILURE = "FETCH_ANS_FAILURE";

// action creators

export const ansRequest = () => {
    return {
        type: FETCH_ANS_REQUEST,
    }
}

export const ansSuccess = (data) => {
    return {
        type: FETCH_ANS_SUCCESS,
        data: data,
    }
}

export const ansFailure = (error) => {
    return {
        type: FETCH_ANS_FAILURE,
        error: error,
    }
}

// action to fetch the data

export const getAcceptedAns = (questionId) => {
    let url = `https://api.stackexchange.com/2.2/questions/${questionId}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
    return dispatch => {
        dispatch(ansRequest())
        return axios
            .get(url)
            .then(res => {
                // console.log(res.data)
                dispatch(ansSuccess(res.data))
            })
            .catch(err => dispatch(ansFailure(err)))
    }
}
