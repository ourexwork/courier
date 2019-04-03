// this function calculates the distance between two points using \
//longitude and lat

//convert the degree to km
const toRadians = (value) => {

    return value * Math.PI / 180;
}

// using haversine formular
const distance = (lat1, lon1, lat2, lon2) => {

    let R = 6371e3;

    let Q1 = toRadians(lat1);

    let Q2 = toRadians(lat2);

    let CQ = toRadians((lat2 - lat1));

    let CY = toRadians((lon2 - lon1));

    let A = Math.sin(CQ / 2) * Math.sin(CQ / 2) +
        Math.cos(Q1) * Math.cos(Q2) *
        Math.sin(CY / 2) * Math.sin(CY / 2);

    let C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));

    let D = R * C;

    return D;


}

export default distance