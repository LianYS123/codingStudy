import {SET_NAME,SET_AGE} from '../actions'
export default function(state = {name:"company",age:18},action){
    switch(action.type){
        case SET_NAME:
            return {
                ...state,
                name:action.name
            }
        case SET_AGE:
            return {
                ...state,
                age:action.age
            }
        default:
            return state;
    }
}