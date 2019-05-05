import React from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../shared/Navbar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapProps = {
  center: {
    lat: 20.6739383,
    lng: -103.3704352
  },
  zoom: 14
}

const Map = () => (
  <React.Fragment>
    <Navbar />
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
      >
        <AnyReactComponent
          lat={mapProps.center.lat}
          lng={mapProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  </React.Fragment>
);

Map.displayName = 'Map';

export default Map;