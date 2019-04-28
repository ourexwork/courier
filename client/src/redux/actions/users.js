//import config from 'config';
import axios from 'axios';
export const login = (userData = {}) => ({
    type: 'LOGIN_USER',
    user: userData

})

export const startLogin = (userData = {}) => {

    return (dispatch) => {

        const {
            _id = '',
                email = '',
                isAdmin = '',
                isVerified = ''


        } = userData;

        axios.post('/api/users/login', userData).then((data) => {
                console.log(data);

                localStorage.setItem('x-auth-token', data)
                dispatch(login(data))
            }).catch(error => console.log(error))
            // const d = await axios.post('/api/user/register', userData)
            // console.log(d)

    }


}