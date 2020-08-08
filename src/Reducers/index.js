import {combineReducers} from 'redux'
import counterTotal from './counterTotal'
import counterNumber from "./counterNumber";

export default combineReducers({
    counterTotal:counterTotal,
    counterNumber:counterNumber
})