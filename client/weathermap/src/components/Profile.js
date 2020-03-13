import React from 'react';



class Profile extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            name:''
        };
        if(props.location.state !== undefined){
            this.state = {
                name: props.location.state.detail.name,
                email: props.location.state.detail.email,
                username:props.location.state.detail.username
            };
        }
        console.log(props)
    };



    render(){

        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}
export default Profile