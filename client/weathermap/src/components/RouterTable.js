import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import UserList from './UserList';
import Login from './form/Login';
import Logout from './Logout';
import SignUp from './form/SignUp';
import Profile from "./Profile";
import CovidTable from "./CovidTable";
import Canada from "./CovidGraphs";



class RouterTable extends Component {
  render() {
    const jsx = <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/Login" component = {Login} />
        <Route path = "/Logout" component = {Logout} />
        <Route path = "/UserList" component = {UserList} />
        <Route path = "/SignUp" component = {SignUp} />
        <Route path = "/Profile" component = {Profile} />
        <Route path = "/CovidTable" component = {CovidTable} />
        <Route path = "/CovidStats" component = {Canada} />

        </Switch>

    return jsx;
  }
}

export default RouterTable;
