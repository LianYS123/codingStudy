import {createStore,combineReducers} from 'redux'
import user from './user'
import company from './company'
let arr = combineReducers({
    user,
    company
});
//创建存储对象
export default createStore(arr)