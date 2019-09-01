import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../actions';

class Dashboard extends Component {

    componentDidMount(){
        this.props.validate()
    }
    
    render(){
        const { user } = this.props
        return (
            <div className='dashboard'>
                <h1>Hey User</h1>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    validate: () => userActions.validate(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

