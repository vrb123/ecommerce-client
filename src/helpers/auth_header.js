export default () => {
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

    if (user && user.token) {
        return {
            'Authorization': `Bearer_${user.token}`
        }
    }
    
    return {}
}