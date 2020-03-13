import React, {Component, Fragment} from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// TODO: Temporary retrieving data from local file. Need to hook this up to get from PredictHQ API
import { data } from './TempData.js';


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
  getData() {
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

  componentDidMount() {
    this.getData();
  }

  state = {};

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
