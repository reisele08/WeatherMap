import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import UserList from './UserList';
import Login from './form/Login';
import SignUp from './form/SignUp';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/Login" component = {Login} />
    <Route path = "/UserList" component = {UserList} />
    <Route path = "/SignUp" component = {SignUp} />


</Switch>
)

export default Main;
