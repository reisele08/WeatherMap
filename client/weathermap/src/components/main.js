import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import UserList from './UserList';
import Login from './form/Login';
import SignUp from './form/SignUp';
import postIcons from './post/postIcon';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/Login" component = {Login} />
    <Route path = "/UserList" component = {UserList} />
    <Route path = "/SignUp" component = {SignUp} />
    <Route path = "/Post" component = {postIcons}/>
</Switch>

)

export default Main;
