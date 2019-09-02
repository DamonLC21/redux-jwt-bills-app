import * as helpers from '../helpers'
import { BILL_ADDED, BILL_DELETED, BILL_PAID } from './types';

const addBill = (bill, dispatch) => {
    fetch(`${helpers.apiUrl}/api/v1/bills`, helpers.billOptions(bill))
        .then(helpers.handleResponse)
        .then(bill => dispatch({type: BILL_ADDED, bill}))
}

const deleteBill = (id, dispatch) => {
    const options = {
        method: 'DELETE',
        headers: helpers.authHeader()
    }
    fetch(`${helpers.apiUrl}/api/v1/bills/${id}`, options)
        .then(helpers.handleResponse)
        .then(bills => dispatch({type: BILL_DELETED, bills}) )
}

const payBill = (bill, dispatch) => {
    const options = {
        method: 'PATCH',
        headers: helpers.validationHeader,
        body: JSON.stringify({bill: {...bill, paid: true}})
    }
    fetch(`${helpers.apiUrl}/api/v1/bills/${bill.id}`, options)
        .then(helpers.handleResponse)
        .then(({bills}) => dispatch({type: BILL_PAID, bills}) )
}

export const billActions = {
    addBill,
    deleteBill,
    payBill
}