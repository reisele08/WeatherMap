import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
<div>
  <UserList />
</div>
    );
  }
}

export default App;
