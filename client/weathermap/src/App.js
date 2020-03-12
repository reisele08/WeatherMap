import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList'
import Login from './components/form/Login'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import RouterTable from './components/RouterTable';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Title">
                  <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/Login">Login</Link>
                      <Link to="/UserList">UserList</Link>
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
                  <RouterTable/>
              </Content>     
          </Layout>
      </div>
    );
  }
}

export default App;
