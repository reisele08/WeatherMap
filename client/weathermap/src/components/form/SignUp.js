import React from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            username: '',
            password: '',
            name: '',
            fname: '',
            lname: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {

        //Need to add some validator for username
        ValidatorForm.addValidationRule('checkUsername', (value) => {

            return true;
        });

    }

    handleSubmit = async () => {
        //input validation
        this.setState({
            name: this.state.fname + ' ' + this.state.lname,
        })

    }




    render() {
        return (
            <div className="newForm">

                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                    style={{
                        backgroundColor: 'white',
                            margin : 'auto',
                            padding : '20px',
                            textAlign: 'center'
                    }}
                >
                    <TextValidator
                        label="First Name"
                        onChange={this.handleChange}
                        name="fname"
                        value={this.state.fname}
                        validators={['required', 'matchRegexp:^[A-Za-z]+$']}
                        errorMessages={['this field is required', 'Invalid input (only letters)']}
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <TextValidator
                        label="Last Name"
                        onChange={this.handleChange}
                        name="lname"
                        value={this.state.lname}
                        validators={['required', 'matchRegexp:^[A-Za-z]+$']}
                        errorMessages={['this field is required', 'Invalid input (only letters)']}
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <TextValidator
                        label="Username"
                        onChange={this.handleChange}
                        name="username"
                        value={this.state.username}
                        validators={['required', 'checkUsername']}
                        errorMessages={['this field is required', 'Existing Username: Re-enter the username']}
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
                    <Button type="submit" style={{backgroundColor: 'rgba(0,0,0, 0.87)', color: 'white'}}>Submit</Button>
                    <br/>
                </ValidatorForm>

            </div>
        );
    }
}

export default SignUp
