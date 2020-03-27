import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import RouterTable from './components/RouterTable';
import {Link} from 'react-router-dom';
import AdminNavigation from './components/AdminNavigation'
import UserNavigation from './components/UserNavigation'
import LoggedOutNavigation from './components/LoggedOutNavigation'

class App extends Component {
    
    loginNavigation() {
        if ((localStorage.getItem('isAdmin') === 'true') && localStorage.getItem('loggedIn') === 'true') {
            return (                  
                <AdminNavigation/>      
            )
        } 
        else if ((localStorage.getItem('isAdmin') === 'false') && localStorage.getItem('loggedIn') === 'true'){
            return (                        
                <UserNavigation/>
            )
        }
        else {
            return (                        
                <LoggedOutNavigation/>
            )
        }
    }
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Weather Map">
              {this.loginNavigation()}

                  {/* <Navigation>
                      <Link to = "/">Home</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/UserList">Admin Page</Link>
                      <Link to="/Profile">Profile</Link>
                  </Navigation> */}
              </Header>
              <Drawer className = "drawer-color" title= "Options">
                  <Navigation>
                      <Link to="/link2">Empty Link</Link>
                      <Link to="/link3">Empty Link</Link>
                      <Link to="/Profile">Profile</Link>
                      <Link to="/Logout">Logout</Link>
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
