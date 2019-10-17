export const bills = (state=[], action) => {
    switch (action.type){
        case 'SUCCESS':
            return action.user.bills
        case 'BILL_ADDED':
            return [...state, action.bill]
        case 'BILL_DELETED':
            return action.bills
        case 'BILL_PAID':
            return action.bills
        case 'LOGOUT': 
            return []
        default:
            return state
    }
}

