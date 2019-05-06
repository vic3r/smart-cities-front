import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../shared/Navbar';

const AnyReactComponent = () => <div>{'Holi'}</div>;

class Map extends Component{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBiYnz15EXZksV-Gb8UJCifnRSJTN_xLIo' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker" />
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}

Map.displayName = "Map";

export default Map;