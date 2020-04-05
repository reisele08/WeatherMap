import React from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import RequestServer from "../RequestServer";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            fname:'',
            lname:'',
            name:'',
            email: '',
            username:'',
            password:''
        };
        // var data = JSON.parse(localStorage.getItem("userData"));
        // var name = data.user.name.split(" ");
        // this.state ={
        //     fname:name[0],
        //     lname:name[1],
        //     email: data.user.email,
        //     username:data.user.username,
        //     password:''
        // };
        this.handleChange = this.handleChange.bind(this);
        this.getData();
    }

    async getData(){
        var localData = JSON.parse(localStorage.getItem("userData"));
        var data = await RequestServer.getByUsername(localData.user.username);
        data = data.data.data
        var name = data.name.split(' ');

        console.log(data);

        this.setState({
            fname:name[0],
            lname:name[1],
            name:'',
            email: data.email,
            username:data.username,
            password:''
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async () => {
        this.setState({
            name: this.state.fname + ' ' + this.state.lname,
        })
        var response = await RequestServer.updateProfile(this.state);
        if(response === null){
            alert( 'Incorrect Inputs' )
        }else{
            console.log(response)
            this.props.history.push(
                '/Profile'
            )
        }
    }

    changePassword(){


    }

    render() {
        return(

            <div className="updateProfile">
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                    style={{ backgroundColor: 'white', margin : 'auto', padding : '20px', textAlign: 'center'}}
                >

                    <TextValidator
                        label="First Name"
                        onChange={this.handleChange}
                        name="fname"
                        value={this.state.fname}
                        validators={['required', 'matchRegexp:^[A-Za-z]+$']}
                        errorMessages={['this field is required', 'Invalid input (only letters)']}
                        variant="outlined" />
                    <br/>
                    <br/>
                    <TextValidator
                        label="Last Name"
                        onChange={this.handleChange}
                        name="lname"
                        value={this.state.lname}
                        validators={['required', 'matchRegexp:^[A-Za-z]+$']}
                        errorMessages={['this field is required', 'Invalid input (only letters)']}
                        variant="outlined" />
                    <br/>
                    <br/>
                    <TextValidator
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                        variant="outlined" />
                    <br/>
                    <br/>
                    <Button type="submit" style={{backgroundColor: 'rgba(0,0,0, 0.87)', color: 'white'}}>Update</Button>
                    <br/>
                    <br/>
                    <br/>
                    <Button style={{backgroundColor: 'rgba(0,0,0, 0.87)'}}> <Link to="/updatePassword" style={{color:"white"}}>Update Password</Link> </Button>

                </ValidatorForm>



            </div>
        );
    }
}

export default UpdateProfile
