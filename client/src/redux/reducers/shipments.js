const shipmentDefaultState = [];

export const shipmentReducer = (state = shipmentDefaultState, action) => {

    switch (action.type) {
        case 'SET_SHIPMENTS':
            return [
                ...action.shipments
            ]

        default:
            return state

    }
}