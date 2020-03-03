import React from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async () => {
        //input validation
        //access to db and check if the inputs are correct or not 
        // if the matching account does not exist - show error msg
        // if it exists - go to the dashboard

        console.log("this is what user putted in username : " + this.state.username + " password : " + this.state.password);

    }


    render(){
        return(
            <div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        label="Username"
                        onChange={this.handleChange}
                        name="username"
                        value={this.state.username}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <TextValidator
                        label="Password"
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        type="password"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        variant="outlined"
                    />
                    
                    <br/>
                    <br/>
                    <Button type="submit">Submit</Button>
                    <br/>
                </ValidatorForm>
            </div>
        )
    }
}
export default Login