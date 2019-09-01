export const user = (state = null, action) => {
    switch (action.type){
        case 'SUCCESS':
            return action.user
        default:
            return state
    }
}