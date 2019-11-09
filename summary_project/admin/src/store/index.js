import {createStore} from 'redux'
import {SET_DATA} from '../actions'

let reducer = function(state={},action){
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data:action.data
            }
        default:
            return state
    }
}
let store = createStore(reducer)
export default store