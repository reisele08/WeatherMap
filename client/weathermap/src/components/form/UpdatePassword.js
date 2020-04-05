import React from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import RequestServer from "../RequestServer";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";

class UpdateProfile extends React.Component {
    constructor(props) {
        var localData = JSON.parse(localStorage.getItem("userData"));
        super(props);
        this.state ={
            username:localData.user.username,
            password:'',
            newPassword:'',
            repeatPassword:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.newPassword) {
                return false;
            }
            return true;
        });

    }

    handleSubmit = async () => {
        var response = await RequestServer.updatePassword(this.state);
        if(response === null){
            alert( 'Password Does not Match' )
        }else{
            console.log(response)
            this.props.history.push(
                '/updateProfile'
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
                        label="Old Password"
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        type="password"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        variant="outlined"
                            />
                            <br/> <br/>
                    <TextValidator
                        label="New Password"
                        onChange={this.handleChange}
                        name="newPassword"
                        value={this.state.newPassword}
                        type="password"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        variant="outlined"
                    />
                    <br/> <br/>
                    <TextValidator
                        label="Repeat New password"
                        onChange={this.handleChange}
                        name="repeatPassword"
                        value={this.state.repeatPassword}
                        type="password"
                        validators={['isPasswordMatch', 'required']}
                        errorMessages={['password mismatch', 'this field is required']}
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <Button type="submit" style={{backgroundColor: 'rgba(0,0,0, 0.87)', color: 'white'}}>Update</Button>
                    <br/>

                    </ValidatorForm>



        </div>
    );
    }
}

export default UpdateProfile
