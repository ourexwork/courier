// this function calculates the distance between two points using \
//longitude and lat

//convert the degree to km
const toRadians = (value) => {

    return value * Math.PI / 180;
}

// using haversine formular
module.exports = (lat1, lon1, lat2, lon2) => {

    /*
    Q = latitude
    Y  = longtitude
    CQ , CY change in latutude, longtitude respectively
    R = the earth mean radius 6.371 km or  or 6.371e3m
    D = Distance
    */
    let R = 6371e3; // this 6371e3 is will give result in metres, but in km =(6371)

    let Q1 = toRadians(lat1);

    let Q2 = toRadians(lat2);

    let CQ = toRadians((lat2 - lat1));

    let CY = toRadians((lon2 - lon1));

    let A = Math.sin(CQ / 2) * Math.sin(CQ / 2) +
        Math.cos(Q1) * Math.cos(Q2) *
        Math.sin(CY / 2) * Math.sin(CY / 2);

    let C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));

    let D = R * C;
    // console.log(D);
    return D;


}




// distance(18.643190, 3.254760, 8.559120, 3.365850)