import React, {Component, Fragment} from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from 'axios';
import requestData from './RequestData';

// Types
type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

type MarkerData = {| ...Props, key: string |}

type State = {
  markers: Array<MarkerData>,
}

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

// React Component
class Landing extends Component<{}, State> {
  // TODO: Retrieve PredictHQ API data

  updateMarkers(data) {
    let markerList = [];
    let results = data.results;
    let counter = 0;

    results.forEach(function(result) {
      let title = result.title;
      let latitude = result.location[0];
      let longitude = result.location[1];
      let location = [longitude, latitude];
      let uniqueKey = "Marker" + counter++;
      markerList.push({key: uniqueKey, position: location, content: title});
    });

    this.setState({
      lat: markerList[0]["position"][0],
      lng: markerList[0]["position"][1],
      zoom: 4,
      markers: markerList}
    );
  }

  populateGdacsMarkers(data){
      var markerList = [];
      var features = data.features;
      let counter = 0;

      features.forEach(function(result) {
        var title = "GDACS" + result.properties.name;
        var latitude = result.bbox[0];
        var longitude = result.bbox[1];
        var location = [longitude, latitude];
        let uniqueKey = "Marker" + counter++;
        markerList.push({key: uniqueKey, position: location, content: title});

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

  async getGdacsAPI(){
    var response = await requestData.getGdacs();
    if (response !== null){
      this.populateGdacsMarkers(response.data);
      console.log(response.data);
    }
  }

  componentDidMount() {
    this.getDataAPI();
    this.getGdacsAPI();
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
