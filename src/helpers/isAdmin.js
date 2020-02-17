const user = JSON.parse(localStorage.getItem('user'));

export default () => user && user.roles && user.roles.includes('ROLE_ADMIN');