//import config from 'config';
import axios from 'axios';

export const login = (auth) => ({
    type: 'LOGIN_USER',
    auth

})


export const startLogin = (userData = {}) => {

    return (dispatch) => {

        const {
            username = '',
                password = '',


        } = userData;


        const user = { username, password };

        axios.post('api/users/login', user).then((data) => {

                localStorage.setItem('x-auth-token', data)
                dispatch(login(data))
            }).catch((e) => {

                const user = { _id: '', username: '', email: '', error: e.response.data.error }
                dispatch(login(user))
                    // console.log(error.response.data)

            })
            // try {
            //     const callBackEnd = await axios.post('api/users/login', user);
            //     dispatch(login(callBackEnd.data))
            // } catch (error) {
            //     if (error.response) {
            //                 console.log(error.response.data)
            //                 return error.response.data
            //             }
            // }



    }


}