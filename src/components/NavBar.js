import React from 'react'
import { connect } from 'react-redux'
import { userActions } from '../actions'
import { Link } from 'react-router-dom'

function NavBar({user}) {
    return (
        <header className='header'>
            <h1 className="logo">
                <Link to='/'>
                    <span role='img' aria-label='emoji'>💰</span> 
                    Trackr
                </Link>
            </h1>
            <ul className="main-nav">
                <li><Link to='/'>home</Link></li>
                <li>{user ? <Link to="/login">logout</Link> : null}</li>
            </ul>
        </header>
    )
}

const mapStateToProps = ({user}) => ({
    user
})
const mapDispatchToProps = (dispatch) => ({
    logOut: () => userActions.logOut(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

