import { combineReducers } from 'redux'
import UsersReducers from './Template/Dashboard/Reducer'

const rootReducers = combineReducers({
    users: UsersReducers
})

export default rootReducers;