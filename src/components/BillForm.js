import React from 'react';
import { connect } from 'react-redux';
import { billActions } from '../actions'

class BillForm extends React.Component {
    
    state = {
        name: '',
        amount: '',
        due: '',
        user_id: this.props.user.id,
        paid: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBill(this.state)
        this.setState({
            name: '',
            amount: '',
            due: ''
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, amount, due} = this.state;
        return (
            <>
                <form className='bill-form' onSubmit={this.handleSubmit}>
                    <h1>Add Bill to <span id='trackr'>Trackr</span></h1>
                    <label htmlFor='name'>Name:</label>
                    <input
                        placeholder="Name of bill..."
                        name="name"
                        type="text"
                        value={name}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor='amount'>Amount:</label>
                    <input
                        placeholder="Amount due..."
                        name="amount"
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor='due'>Due Date:</label>
                    <input
                        placeholder="Due Date..."
                        name="due"
                        type="date"
                        value={due}
                        onChange={this.handleChange}
                        required />
                    <input
                        id="submit-button"
                        value="Add Bill"
                        type="submit" />
                </form>
            </>
        );
    }
}

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
   addBill: (bill) => billActions.addBill(bill, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm)

