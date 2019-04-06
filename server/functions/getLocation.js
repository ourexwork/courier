const config = require('config');
const axios = require('axios');

module.exports = async address => {
  //   const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${config.get('GEOLOCATION_API_KEY')}`;

  try {
    const response = await axios.default.get(url);

    if (response.data.status === 'OK') {
      return {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,

        longitude: response.data.results[0].geometry.location.lng,

        state:
          response.data.results[0].address_components[5].types[0] ===
          'administrative_area_level_1'
            ? response.data.results[0].address_components[5].long_name
            : undefined,
        country:
          response.data.results[0].address_components[6].types[0] === 'country'
            ? response.data.results[0].address_components[6].long_name
            : undefined
      };
    }

    // console.log(JSON.stringify(result.data[0].formatted_address, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};
