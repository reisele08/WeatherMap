import React, {Component} from 'react';
import RequestServer from './RequestServer';

class PostStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async() => {
        var response = await RequestServer.postStatus(this.state);
        if (response == null) {
            alert("Error")
        } else {
            console.log(response)
        }
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
}

export default PostStatus;