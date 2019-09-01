import history from '../history'
import { SUCCESS } from "./types";

const apiUrl = 'http://localhost:3001'

const signUpOptions = (user) => (
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: user})
    }
)

const signUpRequest = (user, dispatch) => {
    fetch(`${apiUrl}/api/v1/users`, signUpOptions(user))
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('token', response.jwt)
            return response.user
        })
        .then(user => {
                dispatch({type: SUCCESS, user: user})
                console.log(user)
                history.push('/')
            }
        )
}

export const userActions = { 
    signUpRequest
}