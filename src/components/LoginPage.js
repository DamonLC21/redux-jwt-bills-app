import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userActions } from '../actions'

class LoginPage extends React.Component {
    
    state = {
        username: '',
        password: ''
    }

    componentDidMount(){
        this.props.logOut()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { username, password} = this.state;

        return (
            <>
                <form className='styled-form' onSubmit={this.handleSubmit}>
                    <h1><span id='trackr'>Trackr</span> Log In</h1>
                    <label htmlFor='username'>Username</label>
                    <input
                        placeholder="Username..."
                        name="username"
                        type="text"
                        value={username}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor='password'>Password</label>
                    <input
                        placeholder="Password..."
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        required />
                    <input
                        id="submit-button"
                        value="SUBMIT"
                        type="submit" />
                    <p>Don't have an account?  <Link to="/signup">Sign Up</Link></p>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
   login: (user) => userActions.userRequest(user, 'login', dispatch),
   logOut: () => userActions.logOut(dispatch)
})

export default connect(null, mapDispatchToProps)(LoginPage)

