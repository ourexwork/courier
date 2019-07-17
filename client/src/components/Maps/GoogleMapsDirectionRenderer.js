/*global google*/
import React, { useState, useEffect } from 'react';
import { Marker, DirectionsRenderer } from 'react-google-maps';

const GoogleMapsDirectionRender = props => {
  const [directions, setDirections] = useState({});

  useEffect(() => {
    console.log('effect map rendered');

    const {
      pickupAddress = { lat: 6.641673299999999, lng: 3.477649299999939 },
      deliveryAddress = { lat: 6.6449262, lng: 3.2538191999999526 }
    } = props.locationRenderer;
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: new google.maps.LatLng(pickupAddress.lat, pickupAddress.lng),
        destination: new google.maps.LatLng(
          deliveryAddress.lat,
          deliveryAddress.lng
        ),
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          // set the directions
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [props.locationRenderer.deliveryAddress]);

  return directions && <DirectionsRenderer directions={directions} />;
};

export default GoogleMapsDirectionRender;
