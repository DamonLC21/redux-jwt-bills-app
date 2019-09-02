import React from 'react'
import Moment from 'react-moment';
import { billActions } from '../actions'
import { connect } from 'react-redux';


class Card extends React.Component {

    markAsPaid = (bill) => {
        this.props.payBill(bill)
    }

    render(){
        const {deleteBill, bill} = this.props
        const { name, due, amount, paid, id } = bill
        return (
            <div className='bill-card'>
                <section className='bill-details-left'>
                    <Moment format="D MMM" className='due' >
                        {due}
                    </Moment>
                    <p id='bill-name'>{ name }</p>
                    <p>${ amount.toFixed(2) }</p>
                </section>
                <section className='bill-details-right'>             
                    { paid
                        ? <h4>Paid <span role='img' aria-label='emoji'>✅</span></h4>
                        : <button id='mark-as-paid' onClick={() => this.markAsPaid(bill)}>Mark As Paid</button>
                    }
                    <button id='remove-bill' onClick={() => deleteBill(id)}>Remove Bill</button>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteBill: (id) => billActions.deleteBill(id, dispatch),
    payBill: (bill) => billActions.payBill(bill, dispatch)
})

export default connect(null, mapDispatchToProps)(Card)