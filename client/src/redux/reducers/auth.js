const authDefaultState = {
    _id: '',
    username: '',
    email: '',
    error: ''
};

export const authReducer = (state = authDefaultState, action) => {
    switch (action.type) {

        case 'LOGIN_USER':
            return {
                ...action.auth
            };


        default:
            return state

    }
}