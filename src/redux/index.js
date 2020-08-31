import { combineReducers, createStore } from "redux";
import timeReducer from "./time"

const rootReducer = combineReducers({
    time: timeReducer
})

const store = createStore(rootReducer)
export default store