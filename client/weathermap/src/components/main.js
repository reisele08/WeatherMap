import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import UserList from './UserList';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/UserList" component = {UserList} />

  </Switch>
)

export default Main;
