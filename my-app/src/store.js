import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import top10QsByTagreducer from './Redux/Top10QsByTag/Reducer'
import allQuestionsReducer from './Redux/AllQuestions/Reducer'

const rootReducer = combineReducers({top10QsByTagreducer, allQuestionsReducer})
const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;