const errorDefaultState = {
    errors: ""
}

export const errorReducer = (state = errorDefaultState, action) => {
    switch (action.type) {

        case 'ERROR_USER':
            return {
                ...action.errors
            }


        default:
            return state

    }
}