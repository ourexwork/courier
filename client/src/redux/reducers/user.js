const userDefaultState = []

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {

        case 'REGISTER_USER':
            return [
                ...state,
                action.user
            ]
        case 'ERROR_USER':
            return {
                ...action.error
            }

        default:
            return state

    }
}