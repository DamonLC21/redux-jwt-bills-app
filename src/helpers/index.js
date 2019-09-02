export const apiUrl = 'http://localhost:3001'

export const authHeader = () => {
    let token = localStorage.getItem('token')
    return token ? { 'Authorization': `Bearer ${token}` } : {}
}

export const validationHeader = { ...{'Content-Type': 'application/json'}, ...authHeader() }

export const billOptions = (bill) => ({
    method: 'POST',
    headers: validationHeader,
    body: JSON.stringify(bill)
})

export const userOptions = (user) => (
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: user })
    }
)

export const handleResponse = (response) => {
    return response.json()
}

