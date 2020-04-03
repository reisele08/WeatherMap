import React from 'react';
import UpdateProfile from "./form/UpdateProfile";
import {Update} from "@material-ui/icons";


class Profile extends React.Component {
    constructor(props) {
        var data = JSON.parse(localStorage.getItem("userData"));

        super(props)
        console.log(props)
        this.state = {
            name:'',
            email: '',
            username: ''
        };
        if(data !== '{}'){
            this.state = {
                name: data.user.name,
                email: data.user.email,
                username:data.user.username,
            };
        }
        console.log(props)
    };



    render(){

        return(
            <div style={{margin:'auto', padding : '20px', textAlign: 'center'}}>
                <h2>Hello {this.state.name}</h2>
                <h3>Username : {this.state.username} </h3>
                <UpdateProfile/>
            </div>
        )
    }
}
export default Profile