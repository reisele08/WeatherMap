import React, {Component, Fragment} from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from 'axios';
import requestData from './RequestData';
import L from 'leaflet';
import { yellowIcon, blueIcon, blackIcon, greenIcon, redIcon, greyIcon} from './icon';
import {blue} from "@material-ui/core/colors";


// Types
type Position = [number, number]


var iconObject = {
  DE:yellowIcon,
  EQ:blackIcon,
  TC:greenIcon,
  FL:blueIcon,
  VL:redIcon,
  DR:greyIcon
};

type Props = {|
    content: string,
    position: Position,
    icon: string,
|}

type MarkerData = {| ...Props, key: string |}

type State = {
  markers: Array<MarkerData>,
}

const MyPopupMarker = ({ content, position, icon }: Props) => (
  <Marker
    position={position}
    icon = {iconObject[icon]}
  >
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

// export const myIcon = new L.Icon({
//   iconUrl: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
//   iconRetinaUrl: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -35],
//   iconSize: [40, 40],
//   //shadowUrl: '../assets/marker-shadow.png',
//   shadowSize: [29, 40],
//   shadowAnchor: [7, 40],
// })

var markerList = [];

class Landing extends Component<{}, State> {

  updateMarkers(data) {
    //var markerList = [];
    let results = data.results;
    let counter = 0;

    results.forEach(function(result) {
      let title = "PredictHQ " + result.title;
      let latitude = result.location[0];
      let longitude = result.location[1];
      let location = [longitude, latitude];
      let uniqueKey = "Marker" + counter++;
      markerList.push({key: uniqueKey, position: location, content: title, icon:'DE'});
    });

    this.setState({
      lat: markerList[0]["position"][0],
      lng: markerList[0]["position"][1],
      zoom: 4,
      markers: markerList}
    );
  }

  populateGdacsMarkers(data){
      //var markerList = [];
      var features = data.features;
      let counter = 0;

      features.forEach(function(result) {
        var title = "GDACS " + result.properties.name;
        var latitude = result.bbox[0];
        var longitude = result.bbox[1];
        var location = [longitude, latitude];
        var iconType = result.properties.eventtype;
        let uniqueKey = "Marker" + counter++;
        markerList.push({key: uniqueKey, position: location, content: title, icon:iconType});

      });
      
      this.setState({
        lat: markerList[0]["position"][0],
        lng: markerList[0]["position"][1],
        zoom: 4,
        markers: markerList}
      );
  }

  async getDataAPI() {
    var response = await requestData.getData();
    if (response !== null) {
        this.updateMarkers(response.data);
    }
  }

  async getGdacsEQ(){
    var response = await requestData.getGdacsEarthquakes();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log('EQ DATA')
      console.log(response.data);
    }
  }

  async getGdacsTC(){
    var response = await requestData.getGdacsTropicalCyclones();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log('TC DATA')
      console.log(response.data);
    }
  }

  async getGdacsFL(){
    var response = await requestData.getGdacsFloods();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log('FL DATA')

      console.log(response.data);
    }
  }

  async getGdacsVL(){
    var response = await requestData.getGdacsVolcanoes();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log(response.data);
    }
  }

  async getGdacsDR(){
    var response = await requestData.getGdacsDroughts();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log(response.data);
    }
  }

  componentDidMount() {

    this.getDataAPI();
    this.getGdacsEQ();
    this.getGdacsTC();
    this.getGdacsFL();
    this.getGdacsVL();
    this.getGdacsDR();
  }

  state = {
    markers: [
      {key: "temp", location: [0,0], content: "temp"}
    ]
  };

  render(){
    const position = [this.state.lat, this.state.lng];
    return (
     <Map center = {position}
          zoom = {this.state.zoom}
          style={{ width: '100%', height: '900px'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
       <MyMarkersList markers={this.state.markers} />
      </Map>
    );
  }
}

export default Landing;
