import history from '../history'
import { SUCCESS } from './types'
import * as helpers from '../helpers'

const userRequest = (user, endpoint, dispatch) => {
    fetch(`${helpers.apiUrl}/api/v1/${endpoint}`, helpers.options(user))
        .then(response => response.json())
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
        .then(response => response.json())
        .then(response => {
            dispatch({ type: SUCCESS, user: response.user })
        })
}

export const userActions = {
    userRequest,
    validate
}