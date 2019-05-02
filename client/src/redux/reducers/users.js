const userDefaultState = {
    _id: '',
    username: '',
    email: '',
    error: ''
};

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];
        case 'LOGIN_USER':
            return {
                ...action.user
            };


        default:
            return state

    }
}