//import config from 'config';
import axios from 'axios';

export const register = (user) => ({
    type: 'REGISTER_USER',
    user

})

export const errorRegister = (errors) => ({
    type: 'ERROR_USER',
    errors

})

export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates

})

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        users
    }
}


export const startEditUser = (id, updates) => {

    return (dispatch) => {
        return axios.put(`/api/users/edit/${id}`, updates).then(() => {
            console.log(updates._id)
            console.log(id)
            dispatch(editUser(id, updates))
        }).catch((e) => {
            if (e.response) {
                const errorreg = { error: e.response.data.error }
                console.log(errorreg)
                dispatch(errorRegister(errorreg))
                    // console.log(error.response.data)

            }
        })
    }
}

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

        return axios.post('api/users/register', user).then((snapshot) => {
            dispatch(register(snapshot.data))
            return { success: true }
        }).catch((e) => {
            if (e.response) {
                const errorreg = { error: e.response.data.error }
                console.log(errorreg)
                dispatch(errorRegister(errorreg))
                    // console.log(error.response.data)
                return { success: false }
            }
        })


    }

}



export const startSetUsers = () => {
    return (dispatch, getState) => {
        // const uid = getState().auth.uid
        return axios.get('/api/users/allusers').then((snapshot) => {
            console.log(snapshot.data)

            const users = [];
            snapshot.data.forEach((childSnapshot) => {
                users.push({
                    ...childSnapshot
                })
            })
            dispatch(setUsers(users))
        })
    }

}