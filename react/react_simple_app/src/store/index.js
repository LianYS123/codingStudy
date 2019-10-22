import {SET_DATA,SET_DIALOG} from '../actions'
import {createStore} from 'redux'
let reducer = function(state = {},action){
    switch(action.type){
        case SET_DATA:
            return {
                ...state,
                data : action.data
            }
        case SET_DIALOG:
            return {
                ...state,
                showDialog:action.showDialog
            }
        default:
            return state
    }
}
let store = createStore(reducer)

export default store