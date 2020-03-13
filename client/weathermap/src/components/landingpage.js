import React, {Component} from 'react';
import { Map, TileLayer } from "react-leaflet";

class Landing extends Component {
  render(){
    return (
      <Map
        center={[45.4, -75.7]} 
        zoom={12}
        style={{ width: '100%', height: '900px'}}
      >
      
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      </Map>

    )
  }
}

export default Landing;
