export const apiUrl = 'http://localhost:3001'

export const options = (user) => (
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: user })
    }
)

export const authHeader = () => {
    let token = localStorage.getItem('token')
    return token ? { 'Authorization': `Bearer ${token}` } : {}
}