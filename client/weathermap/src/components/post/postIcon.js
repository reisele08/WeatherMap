import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
 
import L from 'leaflet';


L.Icon.Default.imagePath = './logo192.png'
const myIcon =  L.Icon.extend({
  options: {
    shadowUrl: './logo192.png',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  }
});
 
class PostIcons extends Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      long: -123.09,
      zoom: 13
    }
  }
  
  handleClick(e){
    this.setState({ lat: e.latlng.lat, lng:e.latlng.lng});
    console.log(this.lat,this.long);
  }


  render() {

    //var greenIcon = new customIcon({iconUrl: ''});


    const position = [this.state.lat, this.state.long];
    var reactIcon = new myIcon({iconUrl: require('./typhoon.svg')});


    return (
      
     
      
      <Map
      center={[45.4, -75.7]} 
      zoom={12}
      style={{ width: '100%', height: '900px'} } onClick={this.handleClick()}
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

         

        <Marker position={position } icon = {reactIcon} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
      </Map>
    );
  }
}


 
export default PostIcons;
