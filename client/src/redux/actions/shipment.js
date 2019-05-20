import axios from 'axios';

export const startSetShipments = () => {
    return (dispatch, getState) => {
        // const uid = getState().auth.uid
        return axios.get('/api/shipment/all-shipment').then((snapshot) => {
            console.log(snapshot.data)

            const shipments = [];
            snapshot.data.forEach((childSnapshot) => {
                shipments.push({
                    ...childSnapshot
                })
            })
            dispatch(setShipments(shipments))
        })
    }

}


export const setShipments = (shipments) => {
    return {
        type: 'SET_SHIPMENTS',
        shipments
    }
}