import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
 
import L from 'leaflet';

var customIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
 
class PostIcons extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }
  
  handleClick(e){
    this.setState({ lat: e.latlng.lat, lng:e.latlng.lng});
  }


  render() {

    var greenIcon = new customIcon({iconUrl: 'leaf-green.png'});
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position = {position} icon = {customIcon} >
            <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}


 
export default postIcons;
