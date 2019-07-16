/*global google */
import React, { useState } from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import GoogleMapsDirectionRenderer from './GoogleMapsDirectionRenderer';

const Maps = props => {
  const [state] = useState({
    defaultZoom: 7,
    defaultCenter: new google.maps.LatLng(41.85073, -87.65126)
  });

  return (
    <GoogleMap
      defaultZoom={state.defaultZoom}
      defaultCenter={state.defaultCenter}
    >
      <GoogleMapsDirectionRenderer locationRenderer={props.locationRenderer} />
    </GoogleMap>
  );
};

export default compose(
  withProps({
    // googleMapURL:'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap
)(Maps);
