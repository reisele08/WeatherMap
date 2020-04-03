import React from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import RequestServer from "../RequestServer";


class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        var data = JSON.parse(localStorage.getItem("userData"));
        var name = data.user.name.split(" ");
        this.state ={
            fname:name[0],
            lname:name[1],
            email: data.user.email,
            username:data.user.username,
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async () => {
        var response = await RequestServer.updateUser(this.state);
        if(response === null){
            alert( 'Incorrect Inputs' )
        }else{
            console.log(response)
            this.props.history.push(
                '/'
            )
        }
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
                    <Button type='button' style={{backgroundColor: 'rgba(0,0,0, 0.87)', color: 'white'}}>Update Password</Button>

                </ValidatorForm>



            </div>
        );
    }
}

export default UpdateProfile
