import {Component} from 'react';
import axios from 'axios';

var Local = true;

class RequestData extends Component {
    async getData() {
        try {
            var axiosOptions = {
              headers: {'Authorization': 'Bearer 49M4VW1ePbphHDcrVC34sHD-PFaD1XbM1MSTV07_'}
            };
            var response = await axios.get("https://api.predicthq.com/v1/events/?category=severe-weather,disasters,terror&limit=50", axiosOptions);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async getGdacsEarthquakes(){
      
        var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=EQ");
        console.log(response);
        return response;
    }

    async getGdacsTropicalCyclones(){
      
        var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=TC");
        console.log(response);
        return response;
    }

    async getGdacsFloods(){
      
        var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=FL");
        console.log(response);
        return response;
    }

    async getGdacsVolcanoes(){
      
        var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=VL");
        console.log(response);
        return response;
    }

    async getGdacsDroughts(){
      
        var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=DR");
        console.log(response);
        return response;
    }

    async getCovid19DataByCountry(){

        var response = await axios.get("https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_2.geojson");
        console.log(response);
        return response;
    }
}
export default new RequestData;
