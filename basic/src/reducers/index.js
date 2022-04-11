import todoReducer from "./todoReducer";
import { combineReducers } from 'redux'

const root=combineReducers({
    todo:todoReducer,
})

export default root