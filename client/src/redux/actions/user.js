//import config from 'config';
import axios from 'axios';

export const register = (user) => ({
    type: 'REGISTER_USER',
    user

})

export const errorRegister = (error) => ({
    type: 'ERROR_USER',
    error

})



export const startRegister = (userData = {}) => {

    return (dispatch) => {

        const {
            firstName = '',
                lastName = '',
                phoneNumber = '',
                email = '',
                address = '',
                password = '',
                confirm_password = '',


        } = userData;


        const user = {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            password,
            confirm_password
        };

        axios.post('api/users/register', user).then((data) => {

            dispatch(register(data))
        }).catch((e) => {

            const errorreg = { error: e.response.data.error }
            console.log(errorreg)
            dispatch(errorRegister(errorreg))
                // console.log(error.response.data)

        })

    }

}