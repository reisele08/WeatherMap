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
  loggedInDrawer() {
    if (localStorage.getItem('loggedIn') === 'true') {
      return (
        <Navigation>
          <Link to="/Profile">Profile</Link>
          <Link to="/CovidTable">COVID-19 Tracker</Link>
          <Link to="/CovidStatsWorld">COVID-19 Stats</Link>
          <Link to="/PostStatus">Post Status</Link>
          <Link to="/Logout">Logout</Link>
        </Navigation>
      )
    } else {
      return (
        <Navigation>
          <Link to="/CovidTable">COVID-19 Tracker</Link>
          <Link to="/CovidStatsWorld">COVID-19 Stats</Link>
        </Navigation>
      )
    }
  }
  render() {
    return (
      <div>
          <Layout>
              <Header className = "header-color" title = "Weather Map">
                {this.loginNavigation()}
              </Header>

              <Drawer className = "drawer-color" title= "Menu Options">
                  {this.loggedInDrawer()}
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
