const userDefaultState = []

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {

        case 'REGISTER_USER':
            return [
                ...state,
                action.user
            ]

        case 'SET_USERS':
            return [

                ...action.users
            ]

        case 'EDIT_USER':
            return state.map((user) => {
                if (user._id === action.id) {
                    return {
                        ...user,
                        ...action.updates
                    }
                } else { return user }

            })


        default:
            return state
    }
}