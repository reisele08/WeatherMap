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
            return null;
        }
    }

    async getGdacsEarthquakes(){
        try {
            var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=EQ");
            console.log(response);
            return response;
        } catch (error) {
            return null;
        }
    }

    async getGdacsTropicalCyclones(){
        try {
            var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=TC");
            // console.log(response);
            return response;            
        } catch (error) {
            return null;
        }
    }

    async getGdacsFloods(){
        try {
            var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=FL");
            // console.log(response);
            return response;
        } catch (error) {
            return null;
        }
    }

    async getGdacsVolcanoes(){
        try {
            var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=VO");
            // console.log(response);
            return response;
        } catch (error) {
            return null;
        }

    }

    async getGdacsDroughts(){
        try {
            var response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtypes=DR");
            // console.log(response);
            return response;
        } catch (error) {
            return null;
        }
    }

    async getCovid19DataByCountry(){
        try {
            var response = await axios.get("https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_2.geojson");
            // console.log(response);
            return response;
        } catch (error) {
            return null;
        }
    }







}
export default new RequestData;
