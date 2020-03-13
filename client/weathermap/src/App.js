import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList'
import Login from './components/form/Login'
import Profile from './components/Profile'
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
                      <Link to="/login">Login</Link>
                      <Link to="/UserList">Admin Page</Link>
                      <Link to="/Profile">Profile</Link>
                  </Navigation>
              </Header>
              <Drawer className = "drawer-color" title= "Drawer Title">
                  <Navigation>
                      <Link to="/link1">Link</Link>
                      <Link to="/link2">Link</Link>
                      <Link to="/link3">Link</Link>
                      <Link to="/Profile">Profile</Link>
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
