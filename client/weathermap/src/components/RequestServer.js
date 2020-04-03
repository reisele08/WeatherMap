import {Component} from 'react';
import axios from 'axios';
import '../App.css';

var Local = true;

class RequestServer extends Component {

    getServerLocation() {
        if (Local) {
            return 'http://localhost:9000'
        }
        //just in case, if we need to host server somewhere
        return 'http://localhost:9000'
    }

    async login(username, password) {
        // var userObj = {
        //     username: username,
        //     password: password
        // }
        try {
            var response = await axios.get(this.getServerLocation() + '/users/login/'+ username + '/' + password)
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    //get all the users - for the table
    async getUsers() {
        try {
            var response = await axios.get(this.getServerLocation() + '/users')
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getByUsername(username) {
        try {
            var response = await axios.get(this.getServerLocation() + '/users/find/' + username)
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async addUser(user) {
        try {
            var response = await axios.post(this.getServerLocation() + '/users/', user)
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async deleteUser(id) {
        try {
            var response = await axios.delete(this.getServerLocation() + '/users/delete/' + id)
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async updateUser(user){
        try {
            var response = await axios.post(this.getServerLocation() + '/users/update/', user)
            return response
        } catch (error) {
            console.log(error)
            return null
        }

    }


    async GetCoronabyCountryStatus(country,status){
        try {
            var response = await axios.get(this.getServerLocation() + '/corona/'+ country+'/'+status);
            return response
        } catch (error) {
            console.log(error)
            return null
        }

    }



}


export default new RequestServer();
