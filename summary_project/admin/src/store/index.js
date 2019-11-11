import {createStore} from 'redux'
import {SET_DATA,SET_COUNT,SET_CURR} from '../actions'

let reducer = function(state={},action){
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data:action.data
            }
        case SET_COUNT:
            return {
                ...state,
                count:action.count
            }
        case SET_CURR:
            return {
                ...state,
                curr:action.curr
            }
        default:
            return state
    }
}
let store = createStore(reducer)
export default store