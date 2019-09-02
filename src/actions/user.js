import history from '../history'
import { SUCCESS, LOGOUT } from './types'
import * as helpers from '../helpers'

const userRequest = (user, endpoint, dispatch) => {
    fetch(`${helpers.apiUrl}/api/v1/${endpoint}`, helpers.userOptions(user))
        .then(helpers.handleResponse)
        .then(response => {
            localStorage.setItem('token', response.jwt)
            return response.user
        })
        .then(user => {
            dispatch({ type: SUCCESS, user: user })
            history.push('/')
        })
}

const validate = (dispatch) => {
    const options = {
        method: 'GET',
        headers: helpers.authHeader()
    }

    return fetch(`${helpers.apiUrl}/api/v1/profile`, options)
        .then(helpers.handleResponse)
        .then(response => {
            dispatch({ type: SUCCESS, user: response.user })
        })
}

const logOut = (dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: LOGOUT})
}

export const userActions = {
    userRequest,
    validate,
    logOut
}