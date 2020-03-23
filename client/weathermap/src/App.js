import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList'
import Login from './components/form/Login'
import Profile from './components/Profile'
import Logout from './components/Logout'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import RouterTable from './components/RouterTable';
import {Link} from 'react-router-dom';
import AdminNavigation from './components/AdminNavigation'
import UserNavigation from './components/UserNavigation'

class App extends Component {

    loginNavigation() {

        if ((localStorage.getItem('isAdmin') === 'true') && localStorage.getItem('loggedIn') === 'true') {
            return (                  
                <AdminNavigation/>      
            )
        } 
        else {
            return (                        
                <UserNavigation/>
            )
        }
    }
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Title">
              {this.loginNavigation()}

                  {/* <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/UserList">Admin Page</Link>
                      <Link to="/Profile">Profile</Link>
                  </Navigation> */}
              </Header>
              <Drawer className = "drawer-color" title= "Drawer Title">
                  <Navigation>
                      <Link to="/Logout">Logout</Link>
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
