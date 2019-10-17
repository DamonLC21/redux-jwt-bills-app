import {SUCCESS, LOGOUT} from '../actions/types'
export const user = (state = null, action) => {
    switch (action.type){
        case SUCCESS:
            return action.user
        case LOGOUT:
            return null
        default:
            return state
    }
}