import L from "leaflet";

var greenIcon = new L.Icon({
    iconUrl: require('./images/tornado.png'),
    shadowUrl: null,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
    iconUrl: require('./images/earthquake.png'),
    shadowUrl: null,
    iconSize: [41, 41],
    iconAnchor: [41, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [41, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
    iconUrl: require('./images/warning.png'),
    shadowUrl: null,
    iconSize: [41, 41],
    iconAnchor: [41, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var covidIcon = new L.Icon({
    iconUrl: require('./images/covid.png'),
    shadowUrl: null,
    iconSize: [41, 41],
    iconAnchor: [41, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: require('./images/marker-icon-2x-red.png'),
    shadowUrl: null,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
    iconUrl: require('./images/drought.png'),
    shadowUrl: null,
    iconSize: [41, 41],
    iconAnchor: [41, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


export { blackIcon,blueIcon,greenIcon,greyIcon,redIcon,yellowIcon, covidIcon};
