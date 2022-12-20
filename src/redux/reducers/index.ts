import { combineReducers } from "redux"
import { get_allReducer } from './details'

const appReducer = combineReducers({
    data_all: get_allReducer,
})
export const reducer = (state:any, action:any) => {
    return appReducer(state, action)
}