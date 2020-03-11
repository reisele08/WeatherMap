import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'
import Login from './components/form/Login'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }



  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Title">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/UserList">Admin Page</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer className = "drawer-color" title= "Drawer Title">
                  <Navigation>
                      <Link to="/resume">Link</Link>
                      <Link to="/aboutme">Link</Link>
                      <Link to="/projects">Link</Link>
                      <Link to="/contact">Link</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>     
          </Layout>
      </div>
    );
  }
}

export default App;
