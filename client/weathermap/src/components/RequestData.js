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
}


export default new RequestData();
