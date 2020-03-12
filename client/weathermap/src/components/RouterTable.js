import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import UserList from './UserList';

class RouterTable extends Component {
  render() {
    const jsx = <Switch>
                  <Route exact path = "/" component = {LandingPage} />
                  <Route path = "/UserList" component = {UserList} />

                </Switch>

    return jsx;
  }
}

export default RouterTable;
