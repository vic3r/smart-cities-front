import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../shared/Navbar';
import { Marker, InfoBox } from './styles';

const MapMarker = ({ zone, bikes_available, capacity }) => {
  let bgColor;
  let availability = bikes_available/capacity*100;

  if (availability < 30) {
    bgColor = 'red';
  } else if (availability < 70) {
    bgColor = 'yellow';
  } else {
    bgColor = 'green';
  }

  return <Marker className={bgColor} />
};
const mapProps = {
  center: {
    lat: 20.6739383,
    lng: -103.3704352
  },
  zoom: 14
}

class Map extends PureComponent  {

  state = {
    gdlStations: [],
    tlaqStations: [],
    zapStations: [],
    station: {}
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}stations/zone/Guadalajara`)
      .then(response => response.json())
      .then(data => this.setState({ gdlStations: data['stations in Guadalajara'] }));

    fetch(`${process.env.API_URL}stations/zone/Zapopan`)
      .then(response => response.json())
      .then(data => this.setState({ zapStations: data['stations in Zapopan'] }));
    
    fetch(`${process.env.API_URL}stations/zone/Tlaquepaque`)
      .then(response => response.json())
      .then(data => this.setState({ tlaqStations: data['stations in Tlaquepaque'] }));
  }

  handlerMarkerClick = ev => {
    const keys = ev.split('-');
    const zone = keys[0];
    const index = keys [1];
    const { gdlStations, zapStations, tlaqStations } = this.state;
    let station = {};

    switch(zone) {
      case 'Zapopan':
        station = zapStations[index];
        break;
      case 'Guadalajara':
        station = gdlStations[index];
        break;
      case 'Tlaquepaque':
        station = tlaqStations[index];
    }
    this.setState({ station });
  }

  render() {

    const { gdlStations, tlaqStations, zapStations, station } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        {
          station.station_id && (
            <InfoBox>
              <b>Station: </b>{station.name} <br />
              <b>Bikes Available: </b>{station.bikes_available}/{station.capacity}<br />
              <b>Docks Available: </b>{station.docks_available}/{station.capacity}
            </InfoBox>
          )
        }
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
            defaultCenter={mapProps.center}
            defaultZoom={mapProps.zoom}
            onChildClick={this.handlerMarkerClick}
          >
            {
              gdlStations.map((item, index) => (
                <MapMarker
                  key={"Guadalajara-"+index}
                  lat={item.latitude}
                  lng={item.longitude}
                  zone="Guadalajara"
                  bikes_available={item.bikes_available}
                  capacity={item.capacity}
                />
              ))
            }
            {
              tlaqStations.map((item, index) => (
                <MapMarker
                  key={"Tlaquepaque-"+index}
                  lat={item.latitude}
                  lng={item.longitude}
                  zone="Tlaquepaque"
                  bikes_available={item.bikes_available}
                  capacity={item.capacity}
                />
              ))
            }
            {
              zapStations.map((item, index) => (
                <MapMarker
                  key={"Zapopan-"+index}
                  lat={item.latitude}
                  lng={item.longitude}
                  zone="Zapopan"
                  bikes_available={item.bikes_available}
                  capacity={item.capacity}
                />
              ))
            }
          </GoogleMapReact>
        </div>
      </React.Fragment>
    )
  }
}

Map.displayName = 'Map';

export default Map;