import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../actions'

class SignUpPage extends Component {

    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '', 
        email: '',
        error: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {
            username, 
            password, 
            first_name, 
            last_name, 
            email
        } = this.state
        
        return (
            <div>
                <form className='styled-form' onSubmit={this.handleSubmit}>
                    <h1>Sign Up for <span id='trackr'>Trackr</span></h1>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        required 
                        name='username' 
                        value={username} 
                        id='username' 
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        required
                        name='password' 
                        value={password} 
                        id='password' 
                        onChange={this.handleChange}
                    />
                    <label htmlFor='first_name'>First Name</label>
                    <input 
                        type='text' 
                        required 
                        name='first_name' 
                        value={first_name}
                        id='first_name' 
                        onChange={this.handleChange} 
                    />
                    <label htmlFor='last_name'>Last Name</label>
                    <input 
                        type='text' 
                        required 
                        name='last_name' 
                        value={last_name} 
                        id='last_name' 
                        onChange={this.handleChange}
                    />
                    <label htmlFor='email'>Email Address</label>
                    <input 
                        type='email' 
                        required 
                        name='email' 
                        value={email} 
                        id='email' 
                        onChange={this.handleChange}
                    />
                    <input type='submit' id='submit-button' value='Sign Me Up!' />
                    <p>Already a member ?  <Link to="/login">Log In</Link></p>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => userActions.userRequest(user, 'users', dispatch)
})

export default connect(null, mapDispatchToProps)(SignUpPage)