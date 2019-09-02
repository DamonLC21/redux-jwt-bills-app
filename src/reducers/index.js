import { combineReducers } from 'redux'
import { user } from './user'
import { bills } from './bills'

export default combineReducers({
    user,
    bills
})