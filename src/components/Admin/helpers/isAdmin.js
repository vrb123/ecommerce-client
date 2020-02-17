import {ADMIN} from '../../../constants/user_roles'

export default roles => {

    console.log(roles);

    return roles && roles.filter(role => role.name === ADMIN).length !== 0
}