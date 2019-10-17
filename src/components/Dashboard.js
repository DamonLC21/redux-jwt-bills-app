import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../actions';
import Moment from 'react-moment'
import BillForm from './BillForm'
import Card from './Card'

class Dashboard extends Component {

    componentDidMount(){
        this.props.validate()
    }

    loadingDashboard = () => (
        <div className='dashboard'>
            <div className='bills-container'>
                <section className='bills'>
                </section>
                <section className='next-due'>
                </section>
            </div>
        </div>
    )

    showBills = () => (
        this.props.bills.map((bill, i )=> <Card key={i} bill={bill} />)
    )

    userDashboard = (user) => {
        const nextDue = this.nextDue()
        return (
            <div className='dashboard'>
                <BillForm />
                <div className='bills-container'>
                    <section className='bills'>
                    <h4 id='bills-header'>CURRENT BILLS DUE ({this.dueBills().length})</h4>
                        {this.showBills()}
                    </section>
                    <section className='next-due'>
                    <div id='next-due-header'>
                        <h4>NEXT BILL DUE</h4>
                        <h4>
                            <Moment format="MMMM-D-YYYY" className='due'>
                                {nextDue.due}
                            </Moment>
                        </h4>
                    </div>
                        <h2>{nextDue.name}</h2>
                        <p id='price'>${nextDue.amount ? nextDue.amount.toFixed(2) : null}</p>
                    </section>
                </div>
            </div>
        )
    }

    nextDue = () => {
        const today = new Date()
        return this.dueBills().reduce((closestBill, currentBill) => {
            return ((new Date(closestBill.due) - today) < (new Date(currentBill.due) - today))
                ? closestBill 
                : currentBill
        }, {})
    }

    dueBills = () => {
        return this.props.bills.filter(bill => !bill.paid)
    }
    
    render(){
        const { user } = this.props
        return user ? this.userDashboard(user) : this.loadingDashboard()
    }
}

const mapStateToProps = ({user, bills}) => ({
    user,
    bills
})

const mapDispatchToProps = (dispatch) => ({
    validate: () => userActions.validate(dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

