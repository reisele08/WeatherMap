import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import UserList from './UserList';
import Login from './form/Login';
import SignUp from './form/SignUp';


class RouterTable extends Component {
  render() {
    const jsx = <Switch>
                  <Route exact path = "/" component = {LandingPage} />
                  <Route path = "/Login" component = {Login} />
                  <Route path = "/UserList" component = {UserList} />
                  <Route path = "/SignUp" component = {SignUp} />

                </Switch>

    return jsx;
  }
}

export default RouterTable;
