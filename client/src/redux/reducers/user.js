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
            return state.map((data) => {
                if (data.id === action.id) {
                    return {
                        ...data,
                        ...action.updates
                    }
                } else { return data }

            })


        default:
            return state
    }
}